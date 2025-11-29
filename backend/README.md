# FastAPI Login Backend

This is a lightweight backend service built with **FastAPI** and **PostgreSQL**, designed to handle user authentication (login only). It is containerized with **Docker** for easy deployment.

## Features
- **Login Endpoint**: `/login` (Returns JWT access token)
- **User Profile**: `/users/me` (Protected route)
- **Database**: PostgreSQL with SQLAlchemy ORM
- **Containerization**: Docker support

## Prerequisites
- Python 3.10+
- PostgreSQL
- Docker (optional, for containerized run)

## Setup & Installation

### 1. Local Setup
1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd backend
    ```

2.  **Create a virtual environment:**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    ```

3.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Configure Environment:**
    Create a `.env` file in the root directory:
    ```properties
    DATABASE_URL=postgresql://user:password@localhost/dbname
    SECRET_KEY=your_secret_key
    ALGORITHM=HS256
    ACCESS_TOKEN_EXPIRE_MINUTES=30
    ```

5.  **Seed the Database:**
    Since registration is disabled, create a test user:
    ```bash
    python seed.py
    ```
    *User: `test@example.com` / `password123`*

6.  **Run the Server:**
    ```bash
    uvicorn main:app --reload
    ```

### 2. Docker Setup
1.  **Build the image:**
    ```bash
    docker build -t backend .
    ```

2.  **Run the container:**
    *Note: Use `host.docker.internal` to access local DB on macOS/Windows.*
    ```bash
    docker run -p 8000:8000 -e DATABASE_URL="postgresql://user:password@host.docker.internal/dbname" backend
    ```

## API Usage

### Login
**POST** `/login`
- **Body (form-data):**
    - `username`: test@example.com
    - `password`: password123

### Get Current User
**GET** `/users/me`
- **Headers:**
    - `Authorization`: `Bearer <your_access_token>`
