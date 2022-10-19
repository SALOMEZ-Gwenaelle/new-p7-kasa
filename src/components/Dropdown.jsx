import React, { useState } from 'react';
import chevron from '../assets/vector.svg'

const Dropdown = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  let newContent;
  (typeof content === 'string') ? newContent = [content] : newContent = content; // ternaire testant le type de "content". Si on récupère une string: on la met dans un tableau, si on a déjà un tableau, on le garde tel quel

  return (
    <div className='dropdown'>
      <div className="dropdownHeader" onClick={() => isExpanded ? setIsExpanded(false) : setIsExpanded(true)}>
        <span className='dropdownTitle'>{title}</span>
        <img alt="" src={chevron} className={isExpanded ? 'chevron chevronOpened' : 'chevron'} />
      </div>
      <div className={isExpanded ? 'dropdownContent dropdownOpened' : 'dropdownContent dropdownClosed'}>
        {
          newContent.map(item => (
            <p className='dropdownText' key={item}>{item}</p>
          ))
        }
      </div>
    </div>
  );
};

export default Dropdown;