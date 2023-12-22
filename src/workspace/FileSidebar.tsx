import React from 'react';
import "./style.css";

const NoteAdd: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
  </svg>
  );
};

const FileSidebar: React.FC = () => {
  return (
    <section className='file-sidebar'>
      <div className='button-set'>
        <div className='button-dark clickable prevent-drag'>
          프로젝트 생성
        </div>
        <input type='file' ref={node=>{
          if (node) {
            node.webkitdirectory = true;
            (node as any).directory = true;
          }
        }} style={
          {
            width: '0px'
          }
        } onChange={
          (e)=>{
            const file = document.querySelector("input[type=file]") as any;

            console.log(file.name);
          }
        }></input>
        <div className='button-light clickable prevent-drag' onClick={
          ()=>{
            const file = document.querySelector("input[type=file]");

            (file as any).click();
          }
        }>
          열기
        </div>
      </div>
      <span className='header-title prevent-drag'>▪EDITOR</span>
      <NoteAdd></NoteAdd>
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

export default FileSidebar;
