This repository contains the source code for my personal website. It is built with Vite, React, and Tailwind CSS, and serves as my online homepage and portfolio. The live site is deployed via GitHub Pages and is available at JJJennings.github.io.
Technologies Used

    Vite – A fast modern build tool and development server (see vitejs.dev).

    React – A JavaScript library for building user interfaces (reactjs.org).

    Tailwind CSS – A utility-first CSS framework for rapid UI development (tailwindcss.com).

    TypeScript – Superset of JavaScript that adds static typing for robustness.

Installation

To set up this project locally, ensure you have Node.js (which includes npm) installed on your system. Then clone the repository and install the dependencies:

    git clone https://github.com/JJJennings/JJJennings.github.io.git
    cd JJJennings.github.io
    npm install

This will download the project and install all required packages.
Running Locally

After installing dependencies, start the development server:

    npm run dev

This will launch the Vite development server (often at http://localhost:5173 by default). You can then view the website in your browser and live-reload will be enabled for development convenience.
Building

To create an optimized production build of the site, run:

    npm run build

This will generate the static files for the website in the dist/ directory. The build includes minified assets and is ready for deployment.
Deployment

This site is configured to be deployed via GitHub Pages. To deploy the latest build to GitHub Pages, run the deploy script:

    npm run deploy

This command uses the gh-pages tool to publish the contents of the dist folder to GitHub Pages (by updating the appropriate branch). Once completed, the updated site will be live at JJJennings.github.io.
