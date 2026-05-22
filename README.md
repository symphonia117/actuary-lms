# Exam P LMS

## Project Overview
This project is a standalone, client-side Learning Management System (LMS) designed specifically to prepare students for the **SOA Exam P** (Probability). It features an exhaustive textbook, a flashcard engine, a standard quiz engine, a Prometric-style 3-Hour Mock Exam Simulator, and an advanced analytics dashboard.

**Key Characteristic:** The entire application is **static** and runs locally in the browser without a database or backend. All data (textbook chapters, questions, flashcards, state) is stored in JavaScript variables. 

## How to Run Locally
Because this project is entirely static, there are no build steps or dependencies required.
1. Clone the repository.
2. Open `index.html` in any modern web browser.

*(Note: Some features may require running a simple local server depending on your browser's CORS policies for local files. You can use tools like VS Code Live Server or Python's `python -m http.server` if needed).*

## Architecture & Data Flow

### 1. Core Files
- **`index.html`**: The single-page application (SPA) shell. It contains the UI templates (Dashboard, Textbook, Quiz, Flashcards, Mock Exam) and inline UI logic (tab switching, rendering). It uses semantic HTML (`<main>`) and handles initialization on `DOMContentLoaded`.
- **`styles.css`**: The main stylesheet. Uses a custom CSS variable design system (`--color-bg`, `--color-accent`, etc.) to ensure WCAG AAA accessibility contrast.
- **`shared.js`**: Contains the core global state logic. It initializes `window.appData`, tracks progress, handles local storage persistance (for scores and flashcard history), and calculates analytics.

### 2. Curriculum Data (`/data/`)
All content is strictly modularized into JS files that append data to `window.appData`.
- `core_init.js`: Initializes the empty `window.appData` object.
- `textbook.js`: Contains an 8-chapter master textbook covering the entire Exam P syllabus.
- `questions_1.js` - `questions_7.js`: Contains ~110 rigorous SOA-style multiple-choice questions.
- `flashcards.js`, `flashcards_advanced.js`: Contains spaced-repetition flashcards.

### 3. Third-Party Libraries (`/assets/`)
To ensure the app works 100% offline with zero external dependencies, all libraries are self-hosted:
- **MathJax**: Renders LaTeX syntax across the textbook and quizzes.
- **Lucide Icons**: SVG icons used in the UI.
- **Inter Font**: Primary typeface.

## Completed Features
1. **Textbook**: An exhaustive 8-chapter guide with LaTeX math rendering.
2. **Flashcard Engine**: Spaced repetition style cards with interactive flip animations.
3. **Standard Quiz Engine**: Allows targeted practice on specific topics with immediate feedback and step-by-step math explanations.
4. **3-Hour Mock Exam Simulator**: 
   - Randomly draws 30 unique questions.
   - 3-hour strict countdown timer.
   - 30-question Prometric-style grid navigation.
   - Explanations and correctness are hidden until final submission.
5. **Analytics Dashboard**: Parses previous quiz and mock exam scores to provide a topic-by-topic mastery breakdown.

## Performance & Optimization
The application has been heavily optimized for Lighthouse metrics and LiteSpeed web servers:
- **Zero Render-Blocking Scripts**: All curriculum JS files are loaded with `defer`.
- **Preloaded Assets**: The `inter.css` file is preloaded natively in the HTML head.
- **Server-Side Rules**: The `.htaccess` file enables `mod_expires` (1-month lifetimes for static assets) and `mod_deflate` (Brotli/Gzip compression).
- **SEO/A11y**: Features Open Graph tags, a meta description, a placeholder favicon, and semantic `<main>` landmarks.

## Third-Party Libraries & Licensing
This project is designed to run 100% offline and self-hosts all necessary assets. It includes the following open-source libraries:
- **Inter Font** - Licensed under the SIL Open Font License 1.1 (OFL)
- **MathJax** - Licensed under the Apache License 2.0
- **Lucide Icons** - Licensed under the ISC License
