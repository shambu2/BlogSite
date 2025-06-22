🚀 MERN Blog App (Dockerized) - Backend Dev's Dreamland! 🖥️💾
Welcome to my MERN Blog App, where the backend is the star of the show! 🌟 Built with a love for Express + TypeScript, this project is a testament to the power of server-side sorcery, paired with a sleek Vite React frontend and MongoDB Atlas in the cloud. Dockerized for that chef's kiss dev experience. 😎

📁 Project Structure (Backend Rules All!)
/
│
├── client/               # Frontend (Vite + React + TS, fine, it’s cool too)
│   └── Dockerfile
│
├── server/               # Backend (Express + TS, where the magic happens! 🪄)
│   ├── src/              # Pure backend bliss
│   ├── .env              # MongoDB Atlas URI, the key to the kingdom
│   └── Dockerfile
│
├── docker-compose.yml    # Orchestrates my backend masterpiece
└── .dockerignore


🔥 Features (Backend-Driven Glory)

JWT Authentication - Secure endpoints like a backend ninja 🥷
CRUD Blog Posts - Create, read, update, delete with Express swagger
MongoDB Atlas - Cloud DB that lets my backend shine ✨
Dockerized Perfection - Containers make my backend heart sing 🎶


🛠️ Tech Stack (Backend is the Hero)

Backend: Express.js + TypeScript (the love of my life 💖)
Database: MongoDB Atlas (cloud-powered, backend-friendly)
Frontend: Vite + React + TypeScript (okay, it’s pretty neat)
Styling: TailwindCSS (makes the frontend bearable)
Containerization: Docker & Docker Compose (because my backend deserves the best)
Auth: JWT (backend security done right)


🏁 Get It Running (Backend Dev Style)
1. Clone this Backend Beauty:
git clone https://github.com/yourusername/mern-blog-app.git
cd mern-blog-app

2. Set Up the Backend’s Soul (Environment Variables):
Create server/.env and pour your heart into it:
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
PORT=5000

3. Build the Docker Empire:
docker-compose build

4. Unleash the Backend Beast:
docker-compose up


Frontend (if you must): http://localhost:3000
Backend API (the real star): http://localhost:5000


💡 Pro Tips (Backend Dev Wisdom)

The Vite frontend runs on port 3000 (mapped from 5173 in Docker, ugh, frontend quirks).
The Express backend owns port 5000 like a boss.
MongoDB Atlas means no local Mongo container — cloud DB for the win! ☁️
My backend routes are so clean, they sparkle. ✨ Check server/src for proof.


🐳 Docker Commands (For Backend Devs Who Get It)

Build the Containers:

docker-compose build


Start the Backend Party:

docker-compose up


Shut It Down (But Why Would You?):

docker-compose down


😍 Why I’m Obsessed with Backend
Building this app was a love letter to Express and TypeScript. The way routes come alive, the elegance of middleware, the power of MongoDB queries — it’s pure poetry. 📜 The frontend? Sure, it’s nice, but the backend is where my heart beats. 💓 If you’re a fellow backend fanatic, dive into the server/ folder and let’s geek out together!

📜 License
This backend masterpiece is open-source under the MIT License. Share the love, but keep the backend vibes strong. 💪

🤩 Want to Connect?
Hit me up on GitHub or X if you’re as crazy about backend dev as I am. Let’s talk Express, Mongo, or why TypeScript is the GOAT. 🐐

Built with ☕, late-night coding sessions, and an unhealthy obsession with backend development.