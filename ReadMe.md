<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>To-Do List App</title>
</head>

<body>
  <h1>To-Do List App</h1>
  <p>This is a simple To-Do List application built using React, Zustand for state management, TypeScript for type checking, Vite for fast development, and SASS for styling. The project has a well-defined structure with organized folders to keep the codebase clean and maintainable.</p>

  <h2>Stack Used</h2>
  <ul>
    <li>React: A JavaScript library for building user interfaces.</li>
    <li>Zustand: A state management library for React.</li>
    <li>TypeScript: A statically typed superset of JavaScript.</li>
    <li>Vite: A fast build tool and development server.</li>
    <li>SASS: A CSS preprocessor that adds powerful features to CSS.</li>
  </ul>

  <h2>Project Structure</h2>
  <pre>
  public/
    ├── vite.svg
    └── ...
src/
├── assets/
│ └── ... (images, fonts, etc.)
├── data/
│ └── store folder
├── helpers.ts
├── views/
│ ├── App 
    └── index.tsx
│ ├── components/
│ │ └── ... (individual component files)
│ └── styles/
│ └── ... (SASS files)
└── index.tsx

  </pre>

  <ul>
    <li><strong>public</strong>: This directory contains the <code>index.html</code> file, which is the entry point of the application. It may also contain other static assets if needed.</li>
    <li><strong>src</strong>: The main source code of the application resides here.</li>
    <ul>
      <li><strong>assets</strong>: This directory is used for storing various assets like images, fonts, etc.</li>
      <li><strong>data</strong>: The <code>store.ts</code> file in this directory is responsible for managing the application's state using Zustand.</li>
      <li><strong>helpers.ts</strong>: This file contains helper functions or utility functions used throughout the application.</li>
      <li><strong>views</strong>: This directory contains all the views (or pages) of the application.</li>
      <ul>
        <li><strong>App.tsx</strong>: The main component of the application that acts as the root component and renders other components.</li>
        <li><strong>components</strong>: This directory contains reusable and smaller components used across different views.</li>
        <li><strong>styles</strong>: The SASS files are stored here to manage the styling of the components and views.</li>
      </ul>
      <li><strong>index.tsx</strong>: The entry point of the application, where the React app is mounted to the DOM.</li>
    </ul>
  </ul>

  <h2>Getting Started</h2>
  <ol>
    <li>Make sure you have Node.js and npm (or yarn) installed on your machine.</li>
    <li>Clone this repository.</li>
    <pre><code>git clone &lt;repository-url&gt;</code></pre>
    <li>Navigate to the project directory.</li>
    <pre><code>cd to-do-list-app</code></pre>
    <li>Install dependencies.</li>
    <pre><code>npm install</code></pre>
    <li>Start the development server.</li>
    <pre><code>npm run dev</code></pre>
    <li>The application will be accessible at <a href="http://localhost:3000/">http://localhost:3000/</a>.</li>
  </ol>

  <h2>Building for Production</h2>
  <p>To create a production build, use the following command:</p>
  <pre><code>npm run build</code></pre>
  <p>Vite will build your project into the <code>dist</code> directory, ready for deployment.</p>

  <h2>Contributing</h2>
  <p>If you'd like to contribute to this project, feel free to create a pull request. Make sure to follow the guidelines and maintain the coding standards.</p>

  <h2>License</h2>
  <p>This project is licensed under the MIT License. See the <code>LICENSE</code> file for more details.</p>

  <h2>Acknowledgments</h2>
  <ul>
    <li>Thanks to the React community for providing great libraries and tools.</li>
    <li>Thanks to Zustand for state management in a simple and efficient way.</li>
    <li>Thanks to the creators of TypeScript, Vite, and SASS for enhancing the development experience.</li>
  </ul>

  <hr>
  <p>Happy coding! If you have any questions or feedback, please don't hesitate to contact us.</p>
</body>

</html>
