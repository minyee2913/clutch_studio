import React from 'react';
import "./style.css";

const ComponentSidebar: React.FC = () => {
  return (
    <section className='panel-sidebar'>
      <div className='button-set'>
        <div className='button-light clickable prevent-drag' style={
          {
            width: '120px',
            marginLeft: '30%'
          }
        }>
          패널 추가
        </div>
      </div>
      <span className='header-title prevent-drag'>▪PANELS</span>
      <div className='file-list prevent-drag'>
        <p>
          <span>test.json</span>
        </p>
        <p>
          <span>fuck.json</span>
        </p>
      </div>
    </section>
  );
}

export default ComponentSidebar;
