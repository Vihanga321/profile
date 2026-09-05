# Vihanga Appuhamy — Portfolio

Personal portfolio website built with React + Vite.

## Run in VS Code

Clone the repository:

```bash
git clone https://github.com/Vihanga321/profile.git
cd profile
```

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

## Project structure

```text
profile/
├── src/
│   ├── data/
│   │   └── portfolio.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```

Most portfolio text and project information can be edited in:

```text
src/data/portfolio.js
```

## Build

```bash
npm run build
```

## Deploy with Vercel

1. Sign in to Vercel with GitHub.
2. Import the `Vihanga321/profile` repository.
3. Vercel should detect Vite automatically.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

Future pushes to the main branch can automatically redeploy the website.

## Current pages

- Home
- About
- Projects
- Project case-study routes
- Cybersecurity
- Experience
- Resume
- Contact
