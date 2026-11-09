# AI Quiz Generator & Smart Study Assistant

**Course:** CSE 4104 — Software Development III
**Section:** 7E
**Team:** CSE4104-7E-T03
**University:** Northern University of Business and Technology, Khulna
**GitHub:** https://github.com/naimrahmansedit-hue?tab=repositories

## Project Description

AI Quiz Generator & Smart Study Assistant is an AI-powered web application
that helps students revise their own study material.

A student uploads a PDF file or study notes. The system reads the
material and automatically generates a short summary and a set of
multiple-choice questions (MCQs) from it. The student answers the
questions, gets a score immediately, and can track learning progress
and weak areas over time.

The problem it solves: students study from many PDFs, slides, and
handouts, but they have no easy way to test themselves on that exact
material. Making summaries and practice questions by hand takes a
long time, so most students only re-read their notes. This system
turns passive re-reading into active, measurable practice.

## Team Information

| No. | Name | Student ID | Role |
|-----|------|------------|------|
| 01 | Naimur Rahman Chayon | 11230321368 | Team Leader |
| 02 | Ajijur Rahman Shamim | 11230321366 | Member |
| 03 | Farjana Sultana | 11230321362 | Member |
| 04 | GM Riyad Rahman | 11230321578 | Member |

## Proposed Features

- **Authentication system** — Student registration and login
- **PDF and note upload** — Upload PDF files or paste study notes
- **AI summary generation** — Short, readable summary of the uploaded material
- **AI MCQ generation** — Multiple-choice questions generated from the same material
- **Quiz answering and scoring** — Answer online and see the score immediately
- **Result review** — Review past quizzes and see which questions were wrong
- **Progress dashboard** — Total quizzes, average score, and progress over time
- **Weak-area report** — Topics with low scores are highlighted for revision
- **Quiz history** — All summaries and quizzes are saved for later

## Technology Stack

| Component | Technology |
|-----------|------------|
| Frontend | React.js |
| Backend | Node.js + Express.js |
| Database | MongoDB (MongoDB Atlas) |
| AI Integration | Google Gemini API |
| PDF Processing | PDF.js (frontend) / pdf-parse (backend) |
| Deployment | Vercel (frontend) / Render (backend) |
| Development Tools | VS Code, GitHub |

## Project Structure (Initial)

```
ai-quiz-generator/
├── frontend/          # React.js app
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── package.json
├── backend/           # Node.js + Express.js API
│   ├── src/
│   │   ├── routes/
│   │   ├── models/
│   │   └── server.js
│   └── package.json
├── docs/              # Proposal and planning documents
└── README.md
```

## How to Run (Development)

> Setup instructions will be added as the project is developed.

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install frontend and backend dependencies:
   ```bash
   cd frontend && npm install
   cd ../backend && npm install
   ```
3. Add your Google Gemini API key in the backend `.env` file:
   ```
   GEMINI_API_KEY=your-api-key-here
   MONGODB_URI=your-mongodb-connection-string
   ```
4. Start the backend and frontend servers.

## Initial Project Planning

| Phase | Weeks | Work |
|-------|-------|------|
| Planning & Design | Week 1–2 | Proposal, requirements, UI and database design |
| Setup & Auth | Week 3–4 | GitHub repo, React + Node.js setup, login system |
| Upload & Summary | Week 5–6 | PDF upload, text extraction, Gemini summary |
| Quiz Generation | Week 7–8 | Gemini MCQ generation, quiz answering, scoring |
| Dashboard & Progress | Week 9–10 | Progress dashboard, weak-area report, history |
| Testing & Final | Week 11–12 | Testing, bug fixing, documentation, final demo |

## Expected Outcome

- A working web application that turns study notes and PDFs into
  summaries and MCQ quizzes.
- Faster, less manual revision for students, with immediate quiz scores.
- A clear record of learning progress that helps students find and
  improve their weak areas.
