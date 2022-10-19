import React from 'react';

const Banner = ({ text, picture }) => {
  return (
    <div className='banner'>
      <h1 className='bannerTitle'>{text}</h1>
      <img className='bannerImage' src={picture} alt="banner" />
      <div className="darken-filter"></div>
    </div>
  );
};

export default Banner;