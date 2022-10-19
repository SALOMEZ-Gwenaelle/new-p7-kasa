import React from 'react';
import starFull from '../assets/starFull.svg';
import starEmpty from '../assets/starEmpty.svg'

const Rating = ({rating}) => {
  const stars = []
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<img src={starFull} alt='starFull' key={i} />)
    } else {
      stars.push(<img src={starEmpty} alt='starEmpty' key={i} />)
    }
  }


  return (
    <span className='star'>
      {stars}
    </span>
  );
};

export default Rating;