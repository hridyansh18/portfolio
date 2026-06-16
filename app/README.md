# Hridyansh Chaudhary — Portfolio

A single-page portfolio built with **React 19 + Tailwind** on the frontend
and **FastAPI + MongoDB** on the backend. Includes a contact form (persisted
to MongoDB) and a server-generated downloadable CV PDF (ReportLab).

## 1. Project Structure

```
app/
├── backend/
│   ├── server.py            FastAPI app, /api routes, CV PDF builder
│   ├── requirements.txt
│   ├── .env.example
│   └── tests/
│       └── test_portfolio_api.py
│
├── frontend/
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── .env.example
│   ├── public/index.html
│   └── src/
│       ├── App.js
│       ├── index.js
│       ├── index.css
│       ├── lib/api.js
│       ├── pages/Portfolio.jsx
│       └── components/portfolio/
│           ├── Nav.jsx
│           ├── Hero.jsx
│           ├── About.jsx
│           ├── Skills.jsx
│           ├── Projects.jsx
│           ├── Experience.jsx
│           ├── Contact.jsx
│           └── Footer.jsx
│
├── design_guidelines.json
└── memory/PRD.md
```

## 2. Backend Setup

```bash
cd backend
cp .env.example .env        # adjust MONGO_URL / DB_NAME if needed
pip install -r requirements.txt
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

Make sure MongoDB is running locally (or update `MONGO_URL` in `.env` to
point at your instance).

### Endpoints
- `GET  /api/`          → health check
- `POST /api/contact`   → save a contact message
- `GET  /api/contact`   → list saved messages
- `GET  /api/cv`        → download the generated CV as PDF

## 3. Frontend Setup

```bash
cd frontend
cp .env.example .env         # set REACT_APP_BACKEND_URL
yarn install                 # or npm install
yarn start                    # or npm start
```

The frontend expects `REACT_APP_BACKEND_URL` to point at the FastAPI server
(e.g. `http://localhost:8001`); all API calls are made to
`${REACT_APP_BACKEND_URL}/api/...`.

## 4. Running Tests

```bash
cd backend
pytest tests/test_portfolio_api.py -v
```

> The `test_create_and_list_contact_message` test requires a reachable
> MongoDB instance.

## 5. Design Tokens

See `design_guidelines.json` for the full color/typography/effects spec
(tactical-dark theme, `#E63946` crimson accent, Outfit + JetBrains Mono).

## 6. Content

Update personal details (name, contact info, projects, education, NCC
record) in:
- `frontend/src/components/portfolio/*.jsx` — site content
- `backend/server.py` → `_build_cv_pdf()` — CV PDF content
