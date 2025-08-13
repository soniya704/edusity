import React from 'react';
import './Campus.css';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.webp';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.avif';




export const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
        <img src={image1} alt='' />
        <img src={image2} alt='' />
        <img src={image3} alt='' />
        <img src={image4} alt='' />
        </div>
        <button className='btn dark-btn'>See more here <i class="fa-solid fa-arrow-right"></i></button>

    </div>
  )
}
