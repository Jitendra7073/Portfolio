# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository structure

Two independent Node projects, no root package.json or shared tooling:

- `backend/` — Express + MongoDB (Mongoose) API, deployed to Render at `https://portfolio-backend-bnkc.onrender.com`
- `frontend/` — Create React App (react-scripts 5), the portfolio site itself

Each has its own `package.json`, `node_modules`, and `.env`/`.gitignore`. Run commands from inside the respective directory.

## Commands

Backend (`cd backend`):
- `node index.js` — run the server (no `start`/`dev` script defined in package.json; there's also no lint or test script)
- Requires a `.env` with `MONGO_URI`, `PORT` (defaults to 5000), `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `EMAIL_USER`, `EMAIL_PASS`

Frontend (`cd frontend`):
- `npm start` — dev server (CRA, port 3000)
- `npm run build` — production build
- `npm test` — CRA/Jest test runner (only default CRA test scaffolding exists, e.g. `App.test.js`)

## Architecture

### Backend (`backend/`)
Plain Express app (`index.js`) wiring two route groups onto a Mongoose connection:
- `config/Database.js` connects to Mongo on import (`connectDB()` runs at module load) and exits the process on failure.
- `routes/messageRoutes.js` mounted at `/api/messages` — public flow for the "Programmer Thoughts" discussion board: submit a message + email → OTP sent via `utils/sendOTP.js` (nodemailer/Gmail) → OTP verified → message flagged `isApproved` (currently by an unauthenticated `/approve-message` route) → visible in the public feed, plus a like endpoint keyed by client-supplied `userId`.
- `routes/adminRoutes.js` mounted at `/admin` — admin login checks `email`/`password` against `ADMIN_EMAIL`/`ADMIN_PASSWORD` env vars (password hashed at process start with `bcrypt.hashSync`), issues a JWT (1-minute expiry, hardcoded secret in the route file), and gates `/messages`, `/approve/:id`, `/delete/:id` behind a `verifyToken` middleware that reads `Authorization: Bearer <token>`.
- `models/UserSuggestion.js` is the single Mongoose model backing the discussion board (`user`, `email`, `text`, `otp`, `isVerified`, `isApproved`, `likes`, `likedBy`). `models/admin.js` defines an `Admin` schema but is unused — admin credentials come from env vars, not the DB.

There is no shared "root" server entrypoint; `index.js` is the only process.

### Frontend (`frontend/src/`)
Standard CRA structure with routing in `App.js` (`react-router-dom`):
- `/` → `pages/Home.jsx` (composes the `Home_components/*` sections: Hero, About, Skills, Education, Projects, Works)
- `/Programmer_throughts` → `pages/Thoughts.jsx` (the discussion board UI, built from `Throughts_components/*`; `post.jsx` drives the submit → OTP → verify → like flow against `/api/messages/*`)
- `/connect` → `pages/Contact.jsx`
- `/admin/login`, `/admin/messages` → `components/admin/*`, gated client-side by a JWT kept in `localStorage` and auto-cleared via a `setTimeout` on token expiry in `App.js`
- `*` → `pages/Error.jsx`
- `components/Common_components/` holds cross-page UI (`Header`, `Footer`, `ScrollToTop`, `TextPressure`)

The API base URL (`https://portfolio-backend-bnkc.onrender.com`) is hardcoded separately in each of `AdminLogin.jsx`, `AdminMessages.jsx`, and `post.jsx` rather than centralized — when changing backend URLs or adding a new caller, update all three.
