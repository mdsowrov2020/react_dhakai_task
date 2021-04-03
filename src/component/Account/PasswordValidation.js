import React from 'react';

const PasswordValidation = () => {
  return (
    <>
      <div className='pass_validation'>
        <p id='capital' className='capital'>
          Contains Capital Letter
          <span className='check_icn'>
            <i class='fas fa-check-circle'></i>
          </span>
          <span className='times_icn'>
            <i class='fas fa-times-circle'></i>
          </span>
        </p>
        <p id='char'>
          Contains Special Char{' '}
          <span className='check_icn'>
            <i class='fas fa-check-circle'></i>
          </span>
          <span className='times_icn'>
            <i class='fas fa-times-circle'></i>
          </span>
        </p>
        <p id='num'>
          Contains Number{' '}
          <span className='check_icn'>
            <i class='fas fa-check-circle'></i>
          </span>
          <span className='times_icn'>
            <i class='fas fa-times-circle'></i>
          </span>
        </p>
        <p id='moreEight'>
          At least 8 Character{' '}
          <span className='check_icn'>
            <i class='fas fa-check-circle'></i>
          </span>
          <span className='times_icn'>
            <i class='fas fa-times-circle'></i>
          </span>
        </p>
      </div>
    </>
  );
};

export default PasswordValidation;
