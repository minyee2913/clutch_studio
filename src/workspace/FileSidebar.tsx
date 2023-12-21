import React from 'react';
import "./style.css";

const NoteAdd: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
    <g clip-path="url(#clip0_2_33)">
      <path d="M9.33335 1.33334H4.00002C3.26669 1.33334 2.67335 1.93334 2.67335 2.66668L2.66669 13.3333C2.66669 14.0667 3.26002 14.6667 3.99335 14.6667H12C12.7334 14.6667 13.3334 14.0667 13.3334 13.3333V5.33334L9.33335 1.33334ZM10.6667 10.6667H8.66669V12.6667H7.33335V10.6667H5.33335V9.33334H7.33335V7.33334H8.66669V9.33334H10.6667V10.6667ZM8.66669 6.00001V2.33334L12.3334 6.00001H8.66669Z" fill="white"/>
    </g>
    <defs>
      <clipPath id="clip0_2_33">
        <rect width="16" height="16" fill="white"/>
      </clipPath>
    </defs>
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
        <div className='button-light clickable prevent-drag'>
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
