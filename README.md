# 🚀 ContentMultiply | AI SaaS Platform

**[Live Demo](https://content-multiply.vercel.app)** | **[Report Bug](https://github.com/viveksharma151/Content-Multiply/issues)**

ContentMultiply is a modern, full-stack B2B SaaS application that leverages AI to instantly repurpose long-form articles and blogs into highly engaging, platform-specific micro-content (Twitter threads, LinkedIn posts, and Email Newsletters).

## ✨ Key Features

- **Secure Authentication**: Robust JWT-based stateless authentication with hashed passwords (bcrypt).
- **AI Content Generation Engine**: Transforms single inputs into multiple format-optimized outputs simultaneously.
- **RESTful API Architecture**: Decoupled Express.js backend designed for scalability and high performance.
- **Modern UI/UX**: Built with React, Vite, and Tailwind CSS v4 for a premium, responsive user experience.
- **Interactive Dashboard**: A seamless user portal to view, manage, and interact with generated assets.

## 🛠️ Tech Stack

**Frontend:**
- React 18 (TypeScript)
- Vite
- Tailwind CSS v4
- React Router DOM
- Axios

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose
- JSON Web Tokens (JWT)
- Bcryptjs

## 🚦 Running Locally

To run this project on your local machine, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/viveksharma151/Content-Multiply.git
cd Content-Multiply
```

### 2. Setup Backend
```bash
cd backend
npm install
node server.js
```
*(Note: The backend is configured to use `mongodb-memory-server` for instant local testing without requiring a local MongoDB installation.)*

### 3. Setup Frontend
Open a new terminal window:
```bash
cd frontend
npm install
npm run dev
```

The frontend will start on `http://localhost:5173` and the backend on `http://localhost:5000`.

## 🌐 Architecture & Deployment

This application follows a modern decoupled architecture:
- **Frontend Hosting:** Deployed on [Vercel](https://vercel.com) for global edge-network delivery.
- **Backend Hosting:** Deployed on [Render](https://render.com) for robust Node.js execution.
- **Database:** MongoDB Atlas (Production) / In-Memory MongoDB (Local Development).

## 📄 License

This project is open-source and available under the MIT License.
