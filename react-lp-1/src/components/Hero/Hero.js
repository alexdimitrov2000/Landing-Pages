import React from 'react';
import './Hero.css'

const Hero = ({ imageSrc }) => {
  return (
    <div className='hero'>
      <img src={imageSrc} className='hero-image' alt='Travel Image' />
      <h1 className='hero-title'>Travel made simple.</h1>
    </div>
  )
}

export default Hero;