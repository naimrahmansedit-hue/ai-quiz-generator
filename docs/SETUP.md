# Setup — AI Quiz Generator

## What you need
- Node.js 18 or newer
- A MongoDB Atlas account (free)
- A Google Gemini API key (free)

## Backend
```bash
cd backend
npm install
cp .env.example .env
# fill in MONGODB_URI, GEMINI_API_KEY and JWT_SECRET in .env
npm run dev
```
Backend runs on http://localhost:5000 — check http://localhost:5000/api/health

## Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on http://localhost:5173
