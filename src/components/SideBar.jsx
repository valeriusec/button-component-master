import React, { useState } from "react";

const SideBar = () => {
  const [isActive, setIsActive] = useState(null);

  const handleClick = (index) => {
    setIsActive(index);
  }
  
  return (
    <div className="side-bar">
      <div className="side-bar-title">
        <span>
          <span>Dev</span>challenges.io
        </span>
      </div>
      <div className='nav-links'>
        <ul>
          <li
            className={isActive === 0 ? 'active' : ''}
            onClick={() => handleClick(0)}
          >Colors</li>
          <li
            className={isActive === 1 ? 'active' : ''}
            onClick={() => handleClick(1)}
          >Typography</li>
          <li
            className={isActive === 2 ? 'active' : ''}
            onClick={() => handleClick(2)}
          >Spaces</li>
          <li
            className={isActive === 3 ? 'active' : ''}
            onClick={() => handleClick(3)}
          >Buttons</li>
          <li
            className={isActive === 4 ? 'active' : ''}
            onClick={() => handleClick(4)}
          >Inputs</li>
          <li
            className={isActive === 5 ? 'active' : ''}
            onClick={() => handleClick(5)}
          >Grid</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
