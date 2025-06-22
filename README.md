MERN Blog Application (Dockerized)
A sophisticated blog platform crafted with the MERN stack, leveraging Vite for a streamlined frontend, Express for a robust backend, and MongoDB Atlas for scalable cloud storage. Containerized with Docker and Docker Compose for seamless development and deployment.

Project Structure
/
├── client/               # Frontend: Vite, React, TypeScript
│   └── Dockerfile
├── server/               # Backend: Express, TypeScript
│   ├── src/             # Core backend logic
│   ├── .env             # MongoDB Atlas connection details
│   └── Dockerfile
├── docker-compose.yml    # Orchestrates frontend and backend services
└── .dockerignore         # Excludes unnecessary files from Docker builds


Features

Secure user authentication with JSON Web Tokens (JWT)
Comprehensive CRUD operations for blog posts (Create, Read, Update, Delete)
MongoDB Atlas for reliable, cloud-based data management
Dockerized architecture for consistent and reproducible environments


Technology Stack

Frontend: Vite, React, TypeScript, TailwindCSS
Backend: Express, TypeScript, JWT Authentication
Database: MongoDB Atlas (Cloud)
Containerization: Docker, Docker Compose


Setup Instructions
1. Clone the Repository
git clone https://github.com/yourusername/mern-blog-app.git
cd mern-blog-app

2. Configure Environment Variables
Create a server/.env file with the following configuration:
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
PORT=5000

3. Build Docker Images
docker-compose build

4. Launch the Application
docker-compose up

Access the application at:

Frontend: http://localhost:3000
Backend API: http://localhost:5000


Notes

The frontend operates on port 3000 (mapped from 5173 within the Docker container).
The backend is accessible on port 5000.
MongoDB Atlas eliminates the need for a local database container, ensuring scalability and ease of use.


Docker Commands

Build Images:

docker-compose build


Start Services:

docker-compose up


Stop Services:

docker-compose down


License
This project is licensed under the MIT License, fostering open collaboration and usage.

Contact
For inquiries or contributions, please connect via GitHub.
