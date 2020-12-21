import React from 'react';
///css
import './button.css';
///interface
export interface BtnBackProps{
    title?: string;
    bgColor?: string;
}

export const ButtonBack:React.FC<BtnBackProps> =({bgColor,title})=> {
    return(
        <div>
            <button 
              className={`bg--${bgColor}`}
            >
                {title}
            </button>
        </div>
    )
}