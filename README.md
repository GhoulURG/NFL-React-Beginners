
# NFL Learning Hub

NFL Learning Hub is a beginner-friendly website about professional
American football. It introduces football rules, player positions,
and NFL teams.

The project was built with React, JavaScript, CSS, and Vite.

## Requirements

- Node.js and npm
- A code editor such as Visual Studio Code

## Getting Started

1. Clone this repository from GitHub:

   ```bash
   git clone YOUR_REPOSITORY_URL
   ```

2. Enter the project folder:

   ```bash
   cd NFL-React-Beginners
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed in the terminal.

## Available Commands

- `npm run dev` starts the development server.
- `npm run build` creates an optimized production build in `dist`.
- `npm run preview` serves the production build locally for testing.

## Project Structure

- `src/App.jsx` contains the main React component.
- `src/App.css` contains the page styling.
- `src/index.css` contains global styling.
- `src/data/nflTopics.js` exports the learning-topic data.
- `index.html` is the HTML entry point.
- `package.json` lists dependencies and scripts.

## Custom JavaScript Module

The `src/data/nflTopics.js` module exports an array of learning
topics. `App.jsx` imports the array and uses React to render
the topic cards dynamically.

## Production Build

Run `npm run build` to compile the project. Run `npm run preview`
to test the built website locally.

