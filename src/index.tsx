import React from 'react';
import ReactDOM from 'react-dom/client';
import Workspace from './workspace/App';
import "./style.css";

document.addEventListener("keydown", (event) => {
  if (event.key === 's' && (navigator.platform.match("Mac") ? event.metaKey : event.ctrlKey)) {
    event.preventDefault();
  }
}, false);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Workspace />
  </React.StrictMode>
);
