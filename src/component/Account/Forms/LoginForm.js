import React from 'react';
import { NavLink } from 'react-router-dom';

const LoginForm = () => {
  return (
    <>
      <div className='login_card'>
        <form>
          <div className='row'>
            <div className='col-md-12'>
              <div className='form_label'>
                <h5>Login here</h5>
              </div>
            </div>
            <div className='col-md-12 py-2'>
              <div className='custom_form_group'>
                <div className='input-group custom_inp_group'>
                  <div className='input-group-prepend'>
                    <div className='input-group-text custom_grp_text'>
                      <p>
                        <i className='fas fa-envelope'></i>
                      </p>
                    </div>
                  </div>
                  <input
                    type='email'
                    name='email'
                    className='form-control custom_control'
                    placeholder='Email Address'
                  ></input>
                </div>
              </div>
            </div>
            <div className='col-md-12 py-2'>
              <div className='custom_form_group'>
                <div className='input-group custom_inp_group pass'>
                  <div className='input-group-prepend'>
                    <div className='input-group-text custom_grp_text'>
                      <p>
                        <i className='fas fa-key'></i>
                      </p>
                    </div>
                  </div>
                  <input
                    type='password'
                    name='pass'
                    className='form-control custom_control '
                    placeholder='Password'
                  ></input>
                </div>
              </div>
            </div>
            <div className='col-md-12 py-2'>
              <div className='submit_button'>
                <button className='sbmt_btn btn-block'>Login</button>
              </div>
            </div>

            <div className='col-md-12 py-2'>
              <div className='form_footer'>
                <p>
                  Don't have an account?{' '}
                  <NavLink to='/'>Click to register here.</NavLink>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
