# Chat App

A modern and user-friendly chat application that allows you to communicate in real-time.

## 🛠️ Technologies

- **Backend:** Django, Django REST framework, Channels
- **Frontend:** React.js
- **Database:** SQLite
- **Authentication:** JWT (JSON Web Tokens)
- **Other:** Redis for caching and WebSocket management

## 📦 Dependencies

The project uses the following npm packages and Python packages:

### Backend (Python)
```json
{
    "Django": "^4.2",
    "djangorestframework": "^3.14.0",
    "channels": "^4.0.0",
    "channels_redis": "^4.0.0",
    "dj-rest-auth": "^3.0.0",
    "django-allauth": "^0.51.0",
    "daphne": "^4.0.0",
    "redis": "^4.0.0"
}
```

### Frontend (JavaScript)
```json
{
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-router-dom": "^6.0.0"
}
```

These packages will be automatically installed with the `npm install` and `pip install -r requirements.txt` commands.

## ⚙️ Installation Steps

### 1. Prerequisites Installation

#### Redis Installation (Windows)
1. [Download Redis for Windows](https://github.com/microsoftarchive/redis/releases)
2. Extract the zip file to a directory
3. Open Command Prompt and navigate to the Redis directory
4. Run the Redis server:
   ```bash
   redis-server.exe
   ```
5. Open another Command Prompt and run the Redis CLI:
   ```bash
   redis-cli.exe
   ```

### 2. Project Setup

1. Clone the project:
   ```bash
   git clone https://github.com/your-username/chat-app.git
   cd chat-app
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   python -m venv venv
   venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

4. Run the database migrations:
   ```bash
   cd ../backend
   python manage.py migrate
   ```

5. Run the backend server:
   ```bash
   python manage.py runserver
   ```

6. Run the frontend server:
   ```bash
   cd ../frontend
   npm start
   ```

7. Visit in your browser:
   ```
   http://localhost:1234
   ```
