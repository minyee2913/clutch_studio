import React from 'react';
import "./style.css";
import Toolbar from './Toolbar';
import FileSidebar from './FileSidebar';
import Codespace from './CodeSpace';
import ComponentSidebar from './ComponentSidebar';

const App: React.FC = () => {
  return (
    <>
      <Toolbar></Toolbar>
      <FileSidebar></FileSidebar>
      <Codespace></Codespace>
      <ComponentSidebar></ComponentSidebar>
    </>
  );
}

export default App;
