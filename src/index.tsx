import React from 'react';
import ReactDOM from 'react-dom/client';
import Workspace from './workspace/App';
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Workspace />
  </React.StrictMode>
);
