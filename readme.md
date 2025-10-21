# Django Chat App

Gerçek zamanlı mesajlaşma özelliği olan modern bir chat uygulaması.

## 🛠️ Teknolojiler

- **Backend:** Django 5.1.4, Django REST Framework, Channels
- **Frontend:** React.js 18.3.1, Redux, Ant Design
- **Database:** SQLite (Development)
- **Authentication:** Token-based Authentication
- **WebSocket:** Django Channels + Redis

## 📋 Gereksinimler

- Python 3.8+
- Node.js 16+
- Redis Server

## ⚙️ Kurulum

### 1. Projeyi Klonlama

```bash
git clone https://github.com/ensaryesir/django-chat-app.git
cd django-chat-app
```

### 2. Environment Değişkenlerini Ayarlama

`.env.example` dosyasını kopyalayıp `.env` olarak kaydedin:

```bash
copy .env.example .env
```

`.env` dosyasını açın ve SECRET_KEY oluşturun:

```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

Oluşan key'i `.env` dosyasındaki `SECRET_KEY` alanına yapıştırın.

**Development için `.env` örneği:**
```env
SECRET_KEY=your-generated-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
CORS_ALLOWED_ORIGINS=http://localhost:1234
```

### 3. Backend Kurulumu

```bash
# Virtual environment oluşturma (opsiyonel ama önerilir)
python -m venv venv
venv\Scripts\activate  # Windows
# source venv/bin/activate  # Linux/Mac

# Bağımlılıkları yükleme
pip install -r requirements.txt

# Database migration
cd backend
python manage.py migrate

# Superuser oluşturma (opsiyonel)
python manage.py createsuperuser
```

### 4. Frontend Kurulumu

```bash
cd frontend
npm install
```

### 5. Redis Kurulumu ve Çalıştırma

**Windows için:**
1. [Redis for Windows](https://github.com/microsoftarchive/redis/releases) indirin
2. Zip dosyasını çıkartın
3. Redis'i başlatın:
```bash
redis-server.exe --port 6380
```

**Linux/Mac için:**
```bash
sudo apt-get install redis-server  # Ubuntu/Debian
brew install redis  # Mac

# Redis'i başlatma
redis-server --port 6380
```

## 🚀 Uygulamayı Çalıştırma

### Backend Sunucusunu Başlatma

```bash
cd backend
python manage.py runserver
```

Backend: `http://localhost:8000`

### Frontend Sunucusunu Başlatma

Yeni bir terminal açın:

```bash
cd frontend
npm start
```

Frontend: `http://localhost:1234`

## 📱 Kullanım

1. Tarayıcınızda `http://localhost:1234` adresini açın
2. Yeni bir hesap oluşturun veya giriş yapın
3. Chat odalarına katılın ve mesajlaşmaya başlayın

## 🔧 Geliştirme Komutları

**Backend:**
```bash
# Yeni migration oluşturma
python manage.py makemigrations

# Migration çalıştırma
python manage.py migrate

# Admin paneli
http://localhost:8000/admin
```

**Frontend:**
```bash
# Development server
npm start

# Production build
npm run build
```

## 📝 Notlar

- Redis varsayılan olarak `6380` portunda çalışıyor (ayarlanabilir)
- Database dosyası: `backend/db.sqlite3`
- Static dosyalar: `backend/static/`
- Development modunda `DEBUG=True` olmalı
