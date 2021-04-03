import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import PasswordValidation from '../PasswordValidation';
import $ from 'jquery';
import { Link, NavLink } from 'react-router-dom';

const RegisterForm = () => {
  //hook form start
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  // for valid
  const valid = (item, val_icn, inv_icn) => {
    let text = document.querySelector(`#${item}`);
    text.style.color = '#35EC8B';
    let valid_icon = document.querySelector(`#${item} .${val_icn}`);
    valid_icon.style.opacity = '1';

    let invalid_icon = document.querySelector(`#${item} .${inv_icn}`);
    invalid_icon.style.opacity = '0';
  };
  // for invalid
  const invalid = (item, val_icn, inv_icn) => {
    let text = document.getElementById(`${item}`);
    text.style.color = 'red';
    let valid_icon = document.querySelector(`#${item} .${val_icn}`);
    valid_icon.style.opacity = '0';

    let invalid_icon = document.querySelector(`#${item} .${inv_icn}`);
    invalid_icon.style.opacity = '1';

    // document.querySelector(`#${item}`).style.color = 'red';
  };
  //for password field
  const handleInputChange = (e) => {
    const pass_input = e.target.value;
    let pass_val_div = document.querySelector('.pass_validation');
    if (pass_input.length > 0) {
      pass_val_div.classList.add('pass_validation_add');
    } else {
      pass_val_div.classList.remove('pass_validation_add');
    }
    if (pass_input.match(/[A-Z]/) != null) {
      valid('capital', 'check_icn', 'times_icn');
    } else {
      invalid('capital', 'check_icn', 'times_icn');
    }
    if (pass_input.match(/[0-9]/) != null) {
      valid('num', 'check_icn', 'times_icn');
    } else {
      invalid('num', 'check_icn', 'times_icn');
    }

    if (pass_input.match(/[!@#$%^&*]/) != null) {
      valid('char', 'check_icn', 'times_icn');
    } else {
      invalid('char', 'check_icn', 'times_icn');
    }
    if (pass_input.length > 7) {
      valid('moreEight', 'check_icn', 'times_icn');
    } else {
      invalid('moreEight', 'check_icn', 'times_icn');
    }
  };

  useEffect(() => {
    var selector = '.gender_btn a';

    $(selector).on('click', function () {
      $(selector).removeClass('active');
      $(this).addClass('active');
    });

    // =============credit card active

    var selector_card = '.payment_btn a';

    $(selector_card).on('click', function () {
      $(selector_card).removeClass('active_card');
      $(this).addClass('active_card');
    });
  }, []);
  return (
    <>
      <div className='account_card'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='row'>
            <div className='col-md-12'>
              <div className='form_label'>
                <h5>Account</h5>
              </div>
            </div>
            <div className='col-md-12 py-2'>
              <div className='custom_form_group'>
                <div className='input-group custom_inp_group'>
                  <div className='input-group-prepend'>
                    <div className='input-group-text custom_grp_text'>
                      <p>
                        <i className='fas fa-user-alt'></i>
                      </p>
                    </div>
                  </div>
                  <input
                    type='text'
                    name='fullname'
                    ref={register({ required: true })}
                    className='form-control custom_control'
                    placeholder='Full Name'
                  ></input>
                </div>
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
                    ref={register({ required: true })}
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
                    ref={register({ required: true })}
                    onChange={handleInputChange}
                    className='form-control custom_control '
                    placeholder='Password'
                  ></input>
                </div>
              </div>
              <PasswordValidation />
            </div>
            <div className='col-md-12 py-2'>
              <div className='row'>
                <div className='col-md-7'>
                  <div className='form_label'>
                    <h5>Date of Birth</h5>
                  </div>
                  <div className='custom_date_inputs'>
                    <input
                      type='text'
                      name='date'
                      placeholder='DD'
                      ref={register({ required: true })}
                    ></input>
                    <input
                      type='text'
                      name='month'
                      placeholder='MM'
                      ref={register({ required: true })}
                    ></input>
                    <input
                      type='text'
                      name='year'
                      placeholder='YYYY'
                      ref={register({ required: true })}
                    ></input>
                  </div>
                </div>
                <div className='col-md-5'>
                  <div className='form_label'>
                    <h5>Gender</h5>
                  </div>
                  <div className='gender_btn'>
                    <a href='javascript:void(0)' ref={register} name='male'>
                      Male
                    </a>
                    <a href='javascript:void(0)' ref={register} name='female'>
                      Female
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-12 py-2'>
              <div className='form_label'>
                <h5>Payment Details</h5>
              </div>
              <div className='payment_btn'>
                <a
                  href='javascript:void(0)'
                  ref={register}
                  name='creditCard'
                  type='radio'
                >
                  <span className='mr-1'>
                    <i className='fab fa-cc-visa'></i>
                  </span>{' '}
                  Credit Card
                </a>
                <a
                  href='javascript:void(0)'
                  ref={register}
                  name='paypal'
                  type='radio'
                >
                  <span className='mr-1'>
                    <i className='fab fa-paypal'></i>
                  </span>{' '}
                  Paypal
                </a>
              </div>
            </div>
            <div className='col-md-12 py-2'>
              <div className='custom_form_group'>
                <div className='input-group custom_inp_group'>
                  <div className='input-group-prepend'>
                    <div className='input-group-text custom_grp_text'>
                      <p>
                        <i className='fas fa-credit-card'></i>
                      </p>
                    </div>
                  </div>
                  <input
                    type='text'
                    name='card_num'
                    ref={register}
                    className='form-control custom_control'
                    placeholder='Card Number'
                  ></input>
                </div>
              </div>
            </div>
            <div className='col-md-12 py-2'>
              <div className='row justify-content-center'>
                <div className='col-md-6'>
                  <div className='custom_form_group'>
                    <div className='input-group custom_inp_group'>
                      <div className='input-group-prepend'>
                        <div className='input-group-text custom_grp_text'>
                          <p>
                            <i className='fas fa-user-alt'></i>
                          </p>
                        </div>
                      </div>
                      <input
                        type='text'
                        name='card_cvc'
                        ref={register}
                        className='form-control custom_control'
                        placeholder='Card CVC'
                      ></input>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='row'>
                    <div className='form-group col-md-6 px-0'>
                      <select
                        id='inputState'
                        name='from'
                        ref={register}
                        className='form-control select_control'
                      >
                        <option selected>01 Jan</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className='form-group col-md-6 pl-0'>
                      <select
                        id='inputState'
                        name='to'
                        ref={register}
                        className='form-control select_control'
                      >
                        <option selected>01 Jan</option>
                        <option>...</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-12 py-2'>
              <div className='form_label'>
                <h5>Terms and conditions</h5>
              </div>
              <div className='custom-control custom-checkbox'>
                <input
                  type='checkbox'
                  name='check'
                  ref={register}
                  className='custom-control-input'
                  id='customCheck1'
                ></input>
                <label
                  className='custom-control-label custom_checkbox'
                  for='customCheck1'
                >
                  I accept the terms and conditions for signing up to this
                  service and hereby confirm I have read the privacy policy
                </label>
              </div>
            </div>
            <div className='col-md-12 py-2'>
              <div className='submit_button'>
                <button className='sbmt_btn'>Submit</button>
              </div>
            </div>

            <div className='col-md-12 py-2'>
              <div className='form_footer'>
                <p>
                  Already have an account?{' '}
                  <NavLink to='/login'>Click to login here.</NavLink>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
