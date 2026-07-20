<div align="center">

# 🚀 PrepPilot

### AI-Powered Interview Preparation Platform

Prepare smarter with AI-generated interview questions, personalized interview sessions, and real-time practice powered by Groq Cloud.

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

![Groq](https://img.shields.io/badge/Groq-Llama_3.3_70B-black?style=for-the-badge)

![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

</div>

---

# 📌 Overview

**PrepPilot** is a full-stack AI-powered interview preparation platform designed to help students and professionals practice technical interviews more effectively.

The platform leverages **Groq Cloud* to generate personalized interview questions and interactive interview sessions while securely managing user authentication and interview data.

Whether you're preparing for software engineering internships or full-time roles, PrepPilot provides an intelligent environment to improve interview performance.

---

# ✨ Features

- 🤖 AI-generated interview questions using Groq Cloud
- 📄 AI-Generated Resume PDF Downloader (Fully integrated with Puppeteer on Render)
- 🐳 Docker Support for cloud deployment containerization
- 🔐 Secure User Authentication
- 👤 User Registration & Login
- 💬 Interactive AI Interview Sessions
- 📚 Personalized Interview Preparation
- ⚡ Fast React + Vite Frontend
- 🌐 RESTful Backend APIs using Express.js
- ☁️ MongoDB Database Integration
- 🔒 Environment Variable Configuration
- 📱 Responsive User Interface

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- JavaScript
- CSS

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- Puppeteer (for PDF generation)

## AI Integration

- Groq Cloud
- Groq Cloud (Llama 3.3 70B Model)

## Other Libraries

- dotenv
- cookie-parser
- cors
- nodemon

---

# 📂 Project Structure

```text
PrepPilot
│
├── Backend
│   ├── src
    ├── Dockerfile
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── Frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── README.md
```

---

# ⚙️ Getting Started

## Clone the Repository

```bash
git clone https://github.com/kanikamishra05/PrepPilot.git

cd PrepPilot
```

---

# Backend Setup

### Option 1: Standard Node.js Setup
```bash
cd Backend

npm install
```

Create a `.env` file inside the Backend folder:


```env
MONGO_URI=your_mongodb_connection_string
GROQ_API_KEY=your_Groq_api_key
PORT=3000
PUPPETEER_CACHE_DIR=./.cache/puppeteer # (Optional) Local cache for chrome
```

Start the backend server:

```bash
npm run dev
```

### Option 2: Docker Setup
Build and run using Docker:
```bash
cd Backend
docker build -t preppilot-backend .
docker run -p 3000:3000 --env-file .env preppilot-backend
```

---

# Frontend Setup

```bash
cd ../Frontend

npm install

npm run dev
```

---

# 🔐 Environment Variables

The backend requires the following environment variables.

* **`MONGO_URI`**: MongoDB Connection String
* **`GROQ_API_KEY`**: Groq API Key
* **`PORT`**: Backend Port (defaults to `3000`)
* **`PUPPETEER_CACHE_DIR`**: Path to cache the Puppeteer Chrome executable. 
  *(Required for Render Node environments: `/opt/render/project/src/Backend/.cache/puppeteer`)*

---

# 🌐 API

Backend runs on

```
http://localhost:3000
```

Frontend runs on

```
http://localhost:5173
```

---

# 🚀 Future Enhancements
- 🎙 Voice-based Mock Interviews
- 📊 Interview Analytics Dashboard
- 📈 Progress Tracking
- 📝 Resume Analyzer
- 📧 Email Verification
- 🔄 Password Reset
- 🌍 Multi-language Support

---

# 🌍 Live Demo

Frontend

```
https://prep-pilot-delta.vercel.app
```

Backend

```
https://preppilot-yu6y.onrender.com
```

---

# 🤝 Contributing

Contributions, suggestions and feature requests are welcome.

Feel free to fork the repository and submit a Pull Request.

---

# 👨‍💻 Author

**Kanika Mishra**

GitHub

https://github.com/kanikamishra05



---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates future improvements.

---

# 📄 License

This project is developed for educational and portfolio purposes.
