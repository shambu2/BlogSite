import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
  },
  password: {
    type: String,
  },
  post: [{ type: String, ref: 'Post' }],
});

export const User = mongoose.model('User',userSchema);

const postSchema = new mongoose.Schema({
    title:String,
    content: String,
    published: {
        type: Boolean,
        default: false
    },
    author:{
        type: String, 
        ref: 'User',
        required: true
    }
})

export const Post = mongoose.model('Post',postSchema)
