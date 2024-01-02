import React, { useEffect } from 'react';
import "./style.css";
import { filebase } from 'filesystem/base';
import { Directory } from 'filesystem/directory';
import { useMonaco } from '@monaco-editor/react';
import { SetEditor } from './CodeEditor';

const NoteAdd: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
  </svg>
  );
};

function UpateFilelist() {
  const list = document.getElementById("filelist")!;

  list.innerHTML = "";

  RendFileList(filebase.files[0] as Directory, list);
}

function RendFileList(dir: Directory, list: HTMLElement, space: number = 0) {
  for (const data of dir.files) {
    if (data.type === "data") {
      const e = document.createElement("p");
      const text = document.createElement("span");

      e.appendChild(text);

      list.appendChild(e);

      if (space > 0) text.style.marginLeft = (22 + 4 * space) + '%';

      e.onclick = async ()=>{
        SetEditor(await data.data.text())
      }

      text.innerHTML = data.name;
    } else {
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 13 14" fill="none">
      <g clipPath="url(#clip0_2_47)">
      <path d="M4.01375 5.32736L6.5 7.8082L8.98625 5.32736L9.75 6.09111L6.5 9.34111L3.25 6.09111L4.01375 5.32736Z" fill="white"/>
      </g>
      <defs>
      <clipPath id="clip0_2_47">
      <rect width="13" height="13" fill="white" transform="translate(0 0.674438)"/>
      </clipPath>
      </defs>
      </svg>`;

      const e = document.createElement("p");
      const text = document.createElement("span");

      text.style.marginLeft = (18 + 4 * space) + '%';

      e.appendChild(text);

      list.appendChild(e);

      text.innerHTML = svg + data.name;

      if (data.files.length > 0) {
        RendFileList(data, list, space+1);
      }
    }
  }
}

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
            if (e.target.files !== null) {
              filebase.setFolder(e.target.files);
              UpateFilelist();
            }
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
      <div className='file-list prevent-drag' id="filelist">
        <p>
          <span>test.json</span>
        </p>
        <p>
          <span>
            fuck.json</span>
        </p>
      </div>
    </section>
  );
}

export default FileSidebar;
