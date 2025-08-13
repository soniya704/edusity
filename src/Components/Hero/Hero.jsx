import React from 'react';
import './Hero.css';


const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
       <h1>We Ensure for better education for better world</h1>
       <p>Our cutting-edge curriculum design to empower students with the knowledge,
        skills, and experience, needed to excel in the dynamic world field of education
       </p>
       <button className='btn'>Explore more<i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  )
}

export default Hero