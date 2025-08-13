import React from 'react';
import './About.css';
import aboutImg from '../../assets/aimg.jpg'
import icon from '../../assets/aicon.png'

export const About = ({setPlayState}) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={aboutImg} alt='' className='about-img' />
                <img src={icon} alt='' className='about-icon' onClick={() => {setPlayState(true)}} />
            </div>
            <div className="about-right">
                <h3>About University</h3>
                <h2>Nurturing Tommorrow's Learders Today</h2>
                <p>Embark on a transformative journey with our university's comperhensive education programs our cutting-edge curriculum is design to empowerstudents with the knowledge, skills, and experiences needed to excel in the dynamic field of education </p>
                <p>With a focus on a innovation hands-on learning and personalized
                mentorship our programs prepare aspiring educators to make meaningful
                 impact on classroom schools and comunities  </p>
                <p>Weather yoa aspire become a teacher, administrator, counsler, or educational leader our range of programs offers the perfact pathway to achieve your goal and unlock your full potential in shaping the future of education
                </p>
            </div>

        </div>
    )
}
