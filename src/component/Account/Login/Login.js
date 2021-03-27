import React from 'react';
import LoginForm from '../Forms/LoginForm';

const Login = () => {
  return (
    <>
      <section className='py-5'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-5'>
              <LoginForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
