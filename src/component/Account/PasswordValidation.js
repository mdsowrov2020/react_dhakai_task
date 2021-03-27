import React from 'react';

const PasswordValidation = () => {
  return (
    <>
      <div className='pass_validation'>
        <p id='capital' className='capital'>
          Contains Capital Letter{' '}
          <span className='check_icn'>
            <i className='fas fa-check'></i>
          </span>
        </p>
        <p id='char'>Contains Special Char</p>
        <p id='num'>Contains Number</p>
        <p id='moreEight'>At least 8 Character</p>
      </div>
    </>
  );
};

export default PasswordValidation;
