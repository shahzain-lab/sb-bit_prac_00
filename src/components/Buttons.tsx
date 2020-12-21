import React from 'react';
import './button.css';

//interface
export interface BtnProps{
  onclick: () => void;
  bgColor: string;
  title: string;
}

export const Button: React.FC<BtnProps> =({bgColor,title, onclick })=> {
  return(
    <div className="main-div"> 
       <button
        className={`bg--${bgColor}`}
         onClick={onclick}
         >{title}</button>
    </div>
  )
}