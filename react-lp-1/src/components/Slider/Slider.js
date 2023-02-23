import React from 'react'
import { useInView } from 'react-intersection-observer';
import './Slider.css';

const Slider = ({ imageSrc, title, subtitle, isFlipped }) => {
  const {ref, inView} = useInView({
    threshold: 0.4,
  });

  const renderContent = () => {
    if (!isFlipped) {
      return <>
        <img src={imageSrc} alt='Travel image' className='slider-image' />
        <div className='slider-content'>
          <h1 className='slider-title'>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </>
    } else {
      return <>
        <div className='slider-content'>
          <h1 className='slider-title'>{title}</h1>
          <p>{subtitle}</p>
        </div>
        <img src={imageSrc} alt='Travel image' className='slider-image' />
      </>
    }
  }

  return (
    <div className={inView ? 'slider slider-zoomed' : 'slider'} ref={ref}>{renderContent()}</div>
  );
}

export default Slider;