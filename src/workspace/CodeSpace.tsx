import React from 'react';
import "./style.css";
import CodeEditor from './CodeEditor';

const CodeSpace: React.FC = () => {
  return (
    <>
      <div className='code-background'>
        <div className='tab prevent-drag'>test.json <span>X</span></div>
      <div className='tab prevent-drag unselected'>fuck.json</div>
      </div>
      <CodeEditor></CodeEditor>
    </>
  );
}

export default CodeSpace;
