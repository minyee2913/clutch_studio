import React from 'react';
import "./style.css";
import Toolbar from './Toolbar';
import FileSidebar from './FileSidebar';
import Codespace from './CodeSpace';

const App: React.FC = () => {
  return (
    <div style={
      {
        padding: "0px",
        margin: "0px",
      }
    }>
      <Toolbar></Toolbar>
      <FileSidebar></FileSidebar>
      <Codespace></Codespace>
    </div>
  );
}

export default App;
