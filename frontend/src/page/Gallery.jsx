import React from 'react';
import './Gallery.css';


import img1 from '../img/6.avif';
import img2 from '../img/9.avif';
import img3 from '../img/7.avif';
import img4 from '../img/8.avif';


export default function Gallery() {
  return (
    <div className="gallery">
      <div className="img-box">
        <img src={img1} alt="Cafe Interior 1" />
      </div>
      <div className="img-box">
        <img src={img2} alt="Cafe Interior 2" />
      </div>
      <div className="img-box">
        <img src={img3} alt="Salad Dish" />
      </div>
      <div className="img-box">
        <img src={img4} alt="Platter Dish" />
      </div>
    </div>
  );
}
