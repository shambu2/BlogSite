import { NextFunction, Request, Response } from "express";
import { Post, User } from "../models/model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const jwt_secreat_key = "nothing_is_secreat";

declare module "express-serve-static-core" {
  interface Request {
    userId?: string;
  }
}
export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies?.token;
  let userInfo;
  if (!token) {
    res.status(401).json({ message: "Access Denied. No token provided" });
    return;
  }

  try {
    const decoded = jwt.verify(token, jwt_secreat_key) as { id: string };
    userInfo = await User.findById(decoded.id);
    req.userId = userInfo?.id;
    if (!userInfo) {
      res.status(404).json({ message: "user not found" });
      return;
    }
  } catch (error) {
    res.status(403).json({ message: "error while authenticating user" });
    return;
  }
};

export const postSignup = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  try {
    const userExistance = await User.findOne({ email });
    // console.log(userExistance)
    if (userExistance) {
      res.status(400).json("user already exists");
      return;
    }
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    const token = jwt.sign({ id: newUser.id }, jwt_secreat_key, {
      expiresIn: "7d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 20 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({ message: "You logged in ", newUser });
  } catch (error: any) {
    res.status(500).send("Error while registering User");
  }
};
export const postSignin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  try {
    if (!user) {
      res.status(401).send("user not exists");
      return;
    }
    const passwordCorrect = bcrypt.compareSync(
      password,
      user?.password as string
    );
    if (!passwordCorrect) {
      res.status(404).send("Enter correct Password");
      return;
    }
    const token = jwt.sign({ id: user?.id }, jwt_secreat_key, {
      expiresIn: "7d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      // sameSite: "strict",
      maxAge: 20 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({ message: "Login successful" });
    return;
  } catch (error) {
    res.status(401).json("error while logging in ");
    return;
  }
};
export const postBlog = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  const token = req.cookies.token || "";
  let userInfo;
  if (!token) {
    res.status(401).json({ message: "Please login " });
    return;
  }
  try {
    const decoded = jwt.verify(token, jwt_secreat_key) as { id: string };
    userInfo = await User.findById(decoded.id);
    if (!userInfo) {
      res.status(404).json({ message: "user not found" });
      return;
    }
    req.userId = userInfo?.id;
    const newBlog = new Post({
      title,
      content,
      published: true,
      author: userInfo?.id,
    });
    newBlog.save();
    res.status(200).json({ message: "Post created", newBlog });
    // console.log(req.userId);
    return;
  } catch (error) {
    res.status(403).json({ message: "invalid token" });
    return;
  }
};

export const putBlog = async (req: Request, res: Response) => {
  const { title, content } = req.body || {};
  const { postId } = req.body;
  const { publishOrNot } = req.body || true;

  if (!postId) {
    res.status(401).json("post is not available");
    return;
  }
  try {
    const updateBlog = await Post.findByIdAndUpdate(
      {
        title,
        content,
        published: publishOrNot,
      },
      { new: true }
    );

    if (!updateBlog) {
      res.status(404).json({ messag: "post not found" });
      return;
    }
    res.status(200).json({ message: "Post updated", updateBlog });
    return;
  } catch (error) {
    res.status(500).json({ message: "Error updating post", error });
    return;
  }
};

export const getBlogId = async (req: Request, res: Response) => {
  const { id } = req.body || {};
  if (!id) {
    res.status(403).json({ message: "blog is not available" });
    return;
  }
  try {
    const getblog = await Post.findById(id);
    const blogs = getblog?.save();
    if (!getblog) {
      res.status(403).json({ message: "no blogs are available" });
      return;
    }
    res.status(200).json({ message: "Here are the blogs", blogs });
    return;
  } catch (error) {
    res.status(500).json("error occured while finding blog");
    return;
  }
};
export const getBlogBulk = async(req: Request, res: Response) => {
  try {
    const blogs = await Post.find();
    res.status(200).json({ message: "All blogs fetched", blogs });
    return;
  } catch (error) {
    res.status(500).json({ message: "Error fetching blogs", error });
    return;
  }
};
