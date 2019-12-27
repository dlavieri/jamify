import React from 'react';
import './love-btn.css';


const loveSong = (e) => {
    e.stopPropagation();
    e.target.classList.toggle("__loved-active");
}

const LoveBtn = () => {
    return (
        <div onClick={loveSong} className="__lovebtn"></div>
    )
}

export default LoveBtn;