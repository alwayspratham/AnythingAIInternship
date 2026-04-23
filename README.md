# 🚀 Backend Developer Assignment – Task Management API

## 📌 Overview

This project is a **secure and scalable REST API** built using FastAPI, implementing:

* JWT-based Authentication
* Role-Based Access Control (User & Admin)
* Task Management (CRUD operations)
* MySQL Database Integration
* Basic React Frontend for interaction

The system ensures that users can manage only their own data, while admins have full access.

---

## 🛠️ Tech Stack

### Backend

* FastAPI
* SQLAlchemy
* MySQL
* JWT (python-jose)
* Passlib (bcrypt)

### Frontend

* React (Vite)
* Fetch / Axios API calls

---

## 📁 Project Structure

```
backend/
 ├── app/
 │    ├── main.py
 │    ├── db/
 │    ├── models/
 │    ├── schemas/
 │    ├── routes/
 │    ├── core/
 │    └── dependencies/

frontend/
 ├── src/
 │    ├── App.jsx
 │    ├── api.js
 │    ├── pages/
 │    │    ├── Auth.jsx
 │    │    └── Dashboard.jsx
```

---

## ⚙️ Setup Instructions

### 🔧 Backend Setup

1. Clone the repository

```bash
git clone <your-repo-url>
cd backend
```

2. Create virtual environment

```bash
python -m venv venv
venv\Scripts\activate   # Windows
```

3. Install dependencies

```bash
pip install -r requirements.txt
```

4. Configure MySQL database
   Update `DATABASE_URL` in:

```
app/db/database.py
```

Example:

```
mysql+pymysql://root:password@localhost/task_manager
```

5. Run server

```bash
uvicorn app.main:app --reload
```

6. Access API Docs

```
http://127.0.0.1:8000/docs
```

---

### 🌐 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

App runs at:

```
http://localhost:5173
```

---

## 🔐 Authentication Flow

1. User registers with email & password
2. Password is hashed using bcrypt
3. User logs in → receives JWT token
4. Token is stored in browser (localStorage)
5. Token is sent in headers:

```
Authorization: Bearer <token>
```

---

## 👥 Role-Based Access

| Role  | Permissions                 |
| ----- | --------------------------- |
| User  | Access only their own tasks |
| Admin | Access all tasks            |

---

## 📦 API Endpoints

### 🔐 Auth

| Method | Endpoint              | Description       |
| ------ | --------------------- | ----------------- |
| POST   | /api/v1/auth/register | Register user     |
| POST   | /api/v1/auth/login    | Login & get token |

---

### 📋 Tasks

| Method | Endpoint           | Description     |
| ------ | ------------------ | --------------- |
| POST   | /api/v1/tasks      | Create task     |
| GET    | /api/v1/tasks      | Get all tasks   |
| GET    | /api/v1/tasks/{id} | Get single task |
| PUT    | /api/v1/tasks/{id} | Update task     |
| DELETE | /api/v1/tasks/{id} | Delete task     |

---

## 🧾 Sample Request

### Login

```json
{
  "email": "user@example.com",
  "password": "123456"
}
```

### Response

```json
{
  "access_token": "jwt_token_here",
  "token_type": "bearer"
}
```

---

## ⚠️ Error Handling

* 400 → Bad Request
* 401 → Unauthorized
* 403 → Forbidden
* 404 → Resource Not Found

---

## 🔒 Security Practices

* Password hashing using bcrypt
* JWT token authentication
* Input validation using Pydantic
* Protected routes using dependencies

---

## 
---

## 🚀 Future Improvements

* Refresh tokens
* Pagination for tasks
* Search & filtering
* Docker deployment
* CI/CD pipeline

---

## ✅ Deliverables

* ✔ Backend API (FastAPI)
* ✔ Authentication & RBAC
* ✔ Task CRUD operations
* ✔ MySQL database integration
* ✔ Basic React frontend
* ✔ API documentation (Swagger)

---

## 📌 Notes

* Environment variables should be used for secrets in production
* Current setup is optimized for development/demo purposes

---

## 👤 Author

Backend Developer Internship Assignment Submission
