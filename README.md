
# MERN Blog Application (Dockerized)

A robust blog platform engineered with the MERN stack, optimized for scalability and developer efficiency. The backend, built with Express and TypeScript, is the core of this project, seamlessly integrated with MongoDB Atlas and containerized using Docker and Docker Compose. Designed with production-ready practices, this application reflects deep expertise in backend architecture, container orchestration, and cloud deployment strategies suitable for AWS environments.

* * *

## Project Structure

```plaintext
/
├── client/               # Frontend: Vite, React, TypeScript
│   └── Dockerfile
├── server/               # Backend: Express, TypeScript
│   ├── src/             # Backend source code
│   ├── .env             # MongoDB Atlas connection configuration
│   └── Dockerfile
├── docker-compose.yml    # Multi-container orchestration
└── .dockerignore         # Optimizes Docker image builds
```

* * *

## Features

* *   Secure JWT-based user authentication
* *   Full CRUD functionality for blog posts (Create, Read, Update, Delete)
* *   MongoDB Atlas for high-availability cloud storage
* *   Dockerized services for consistent development and deployment workflows

* * *

## Technology Stack

* *   **Backend:** Express, TypeScript, JWT Authentication
* *   **Database:** MongoDB Atlas (Cloud)
* *   **Frontend:** Vite, React, TypeScript, TailwindCSS
* *   **Containerization:** Docker, Docker Compose
* *   **Cloud Readiness:** AWS-compatible architecture 

* * *

## Setup Instructions

### 1\. Clone the Repository

```bash
git clone https://github.com/yourusername/mern-blog-app.git
cd mern-blog-app
```

### 2\. Configure Environment Variables

Create `server/.env` with the following:

```plaintext
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
PORT=5000
```

### 3\. Build Docker Images

Leverage Docker's layered caching for efficient builds:

```bash
docker-compose build
```

### 4\. Run the Application

Launch the orchestrated services:

```bash
docker-compose up
```

Access the application:

* *   **Frontend:** [http://localhost:3000](http://localhost:3000/)
* *   **Backend API:** [http://localhost:5000](http://localhost:5000/)

* * *

## Technical Notes

* *   The Vite frontend is exposed on port 3000 (mapped from 5173 internally in Docker).
* *   The Express backend operates on port 5000, optimized for API performance.
* *   MongoDB Atlas eliminates the need for a local database container, reducing overhead and aligning with cloud-native principles.
* *   The Docker setup is lightweight and production-ready, suitable for deployment on AWS ECS or EKS with minimal adjustments.

* * *

## Docker Operations

* *   **Build Images:**

```bash
docker-compose build
```

* *   **Start Services:**

```bash
docker-compose up
```

* *   **Stop Services:**

```bash
docker-compose down
```

For advanced usage, consider Docker's `--build` flag for forced rebuilds or `--scale` for multi-instance testing, which aligns with AWS auto-scaling practices.

* * *

## Backend and AWS Expertise

The backend is architected with TypeScript for type safety and Express for modular routing, ensuring maintainability and scalability. Middleware handles authentication and error management, reflecting production-grade practices. MongoDB Atlas integration supports high availability and global distribution, ideal for AWS-hosted applications. The Dockerized setup is optimized for AWS ECS or EKS, with `.dockerignore` minimizing image size and build time. This project showcases a deep understanding of container orchestration, backend optimization, and cloud deployment strategies.

* * *
