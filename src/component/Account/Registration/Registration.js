import React from 'react';
import RegisterForm from '../Forms/RegisterForm';

const Registration = () => {
  return (
    <>
      <section className='py-5'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              <RegisterForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
