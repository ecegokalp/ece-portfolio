A modern, responsive portfolio website built with React and Vite.

**🌐 Live Demo:** [ecegokalp.github.io/ece-portfolio](https://ecegokalp.github.io/ece-portfolio/)

---

## 📋 About

Personal portfolio website showcasing my projects, skills, and experience as a Computer Engineering student. Features a clean, modern design with smooth animations and full responsiveness.

## Tech Stack

- **Frontend:** React 18, CSS3
- **Build Tool:** Vite
- **Deployment:** GitHub Pages


## Features

-  Fully responsive design
-  Interactive project showcase with modal previews
- Smooth animations and transitions
-  Downloadable CV/Resume
-  Contact information and social links
-  Clean, modern UI with gradient accents

##  Installation & Setup

### Prerequisites

- Node.js 18+ and npm

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/ecegokalp/ece-portfolio.git
   cd ece-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

## 🌐 Deployment

This project is deployed to GitHub Pages using the `gh-pages` package.

```bash
npm run build
npx gh-pages -d dist
```

## 📁 Project Structure

```
ece-portfolio/
│
├── public/                 # Static assets
│   ├── cv.pdf             # Resume/CV file
│   ├── profile.jpg        # Profile photo
│   └── projects/          # Project screenshots
│
├── src/
│   ├── components/        # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx           # Main app component
│   ├── index.css         # Global styles
│   └── main.jsx          # Entry point
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md





