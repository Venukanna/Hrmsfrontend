// // index.js
// import React from 'react';
// import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
// import App from './App';
// import './index.css';

// // Use createRoot instead of ReactDOM.render
// const root = createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // <-- Correct import (without curly braces)
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);