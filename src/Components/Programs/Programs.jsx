import React from 'react';
import './Programs.css';
import img1 from '../../assets/img1.avif';
import img2 from '../../assets/img2.webp';
import img3 from '../../assets/img3.jpg';
import icon1 from '../../assets/icon1.webp';
import icon2 from '../../assets/icon2.webp';
import icon3 from '../../assets/icon3.webp'





export const Programs = () => {
    return (
        <div className='programs'>
            <div className="program">
                <img src={img1} alt='' />
                <div className="caption">
                    <img src={icon1} alt='' />
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={img2} alt='' />
                <div className="caption">
                    <img src={icon2} alt='' />
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={img3} alt='' />
                <div className="caption">
                    <img src={icon3} alt='' />
                    <p>Graduation Degree</p>
                </div>
            </div>
        </div>
    )
}
