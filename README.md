
# 📝 BlogSite - (Frontend + Backend)

A simple **Medium-like Blog Platform** with separate **Frontend (Vite + React + TypeScript)** and **Backend (Express + TypeScript)** projects.
⚠️ *Note: Backend and Frontend are not yet connected.*

---

## 🚧 Project Status

* ✅ Frontend: React + Vite + TypeScript + TailwindCSS – **Working**
* ✅ Backend: Express + TypeScript + MongoDB (Planned) – **API routes scaffolded**
* 🔄 **Integration Pending** between frontend and backend.

---

## ⚙️ Tech Stack

| Layer                  | Tech Details                                                |
| ---------------------- | ----------------------------------------------------------- |
| **Frontend**           | React.js (Vite + TypeScript), TailwindCSS, React Router DOM |
| **Backend**            | Node.js, Express.js, TypeScript (Mongoose planned)          |
| **Database (Planned)** | MongoDB (via Mongoose)                                      |
| **Others**             | Axios (for API calls, planned), Nodemon                     |

---

## 📁 Project Structure

```
BlogSite/
│
├── client/            # React Frontend (Vite + TS)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── public/
│   └── index.html
│
├── server/            # Express Backend (TypeScript)
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── app.ts
│   │   └── server.ts
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/BlogSite.git
cd BlogSite
```

---

## 💻 Frontend (React + Vite + TypeScript)

### Setup

```bash
cd client
npm install
npm run dev
```

### Available Scripts

| Command           | Description                                             |
| ----------------- | ------------------------------------------------------- |
| `npm run dev`     | Run React development server at `http://localhost:5173` |
| `npm run build`   | Build for production                                    |
| `npm run preview` | Preview production build                                |

---

## 🖥️ Backend (Express + TypeScript)

### Setup

```bash
cd server
npm install
npm run dev
```

### Available Scripts

| Command         | Description                                    |
| --------------- | ---------------------------------------------- |
| `npm run dev`   | Start backend in development mode with Nodemon |
| `npm run build` | Compile TypeScript to JavaScript               |
| `npm start`     | Run compiled backend                           |

### Current Backend Routes (Example):

```http
GET    /api/posts         // Get all blog posts
POST   /api/posts         // Create a new post 
GET    /api/posts/:id     // Get a specific post
```



## 📌 Notes

* Frontend dev server runs at: `http://localhost:5173`
* Backend dev server runs at: `http://localhost:5000`
* CORS & Proxy setup to be configured later during integration.

---

