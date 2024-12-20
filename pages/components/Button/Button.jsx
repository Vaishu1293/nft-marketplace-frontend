import React from 'react';

import Style from './Button.module.css';

const Button = ({btnText, handleClick}) => {
  return (
    <div className={Style.box}>
      <button className={Style.button} onClick={() => handleClick()}>
        {btnText}
      </button>
    </div>
  );
};

export default Button
