import React from 'react'; // Import React library
import ReactDOM from 'react-dom'; // Import ReactDOM for rendering
import './index.css'; // Import global CSS styles
import App from './App'; // Import the main App component

// Render the App component into the root div in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
