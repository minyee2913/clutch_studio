import React from 'react';
import "./style.css";

const Toolbar: React.FC = () => {
  return (
    <nav className='topline'>
        <img src="../icon.png" alt="icon" className='icon prevent-drag'/>
        <div className='toolbar prevent-drag'>
            <span>FILE</span>
            <span>EDIT</span>
            <span>VIEW</span>
            <span>HELP</span>
        </div>
    </nav>
  );
}

export default Toolbar;
