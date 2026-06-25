# Aditya's Portfolio

A personal portfolio built with React, Vite and Tailwind CSS showcasing projects, experience, skills and contact information.

## Features
- Fast development using Vite
- Responsive UI with Tailwind CSS
- Animated interactions via Framer Motion
- Typed hero text and count-up hooks

## Prerequisites
- Node.js 18+ and npm (or yarn)

## Install
1. Clone the repo
2. Install dependencies:

```bash
npm install
```

## Available scripts
- `npm run dev` — Start the dev server (Vite)
- `npm run build` — Build production assets
- `npm run preview` — Preview production build locally

These scripts use Vite (see `package.json`).

## Project structure (important files)
- `index.html` — App entry
- `src/main.jsx` — React entry
- `src/App.jsx` — Root app component
- `src/index.css` — Tailwind + global styles
- `src/components/` — UI components (Navbar, Hero, About, Projects, Skills, Experience, Education, Contact, Footer, ScrollProgress, Achievements, CodingProfiles)
- `src/data/resumeData.js` — Content used by components
- `src/hooks/` — Custom hooks (`useTypingEffect.js`, `useCountUp.js`)

## Notes on development
- The app is configured with Tailwind and PostCSS. Edit `tailwind.config.js` or `postcss.config.js` to change styles.
- Components read data from `src/data/resumeData.js`; update that file to change displayed content.

## Deployment
Build with `npm run build` and deploy the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages, etc.).

## Contributing
Feel free to open issues or PRs. For UI/content changes, update the components or `src/data/resumeData.js`.

## License
This project is provided as-is. Add a license file if you want to open-source it.
