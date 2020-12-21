import React from 'react';
import './button.css';

//interface
export interface BtnProps{
  onClick?: () => void;
  bgColor?: string;
  title?: string;
}

export const Button: React.FC<BtnProps> =({bgColor,title, onClick })=> {
  return(
    <div className="main-div"> 
       <button
        className={`bg--${bgColor}`}
        onClick={onClick}
         >{title}</button>
    </div>
  )
}