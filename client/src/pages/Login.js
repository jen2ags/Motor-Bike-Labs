import React, { useState } from 'react';
// import homepage component
import './signUp.css';
// import image from images folder

// import useMutation from the apollo client. (this will allow us to use the mutations that we has as a middleware on the server side)
import { useMutation } from '@apollo/client';
// get ADD_USER mutation
import {  LOGIN_USER } from '../utils/mutations';
// import auth to use the token
import Auth from '../utils/auth';
import SignUp from './SignUp';
// bulma import
import 'bulma/css/bulma.min.css';

// Login component
function Login() {
  // set a state that will let me see the signup component or the login component
  const [showLogin, setShowLogin] = useState(false);
  // update state to show the Login component instead of the signup
  function updateToggle() {
    if (showLogin === true) {
      setShowLogin(false);
    } else {
      setShowLogin(true);
    }
  }

  const [logins, userLogin] = useState({ email: '', password: '' });

  // get the addUser mutation from the useMutation apollo/client
  const [login] = useMutation(LOGIN_USER);
  // Update the state once the user enter new values
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    userLogin({ ...logins, [name]: value });
  };
  
  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await login({
        variables: { ...logins },
      });
  
      // as we can see on the mutation addUser, give us the token and User array as a response
      // save the token we got back from the data to localStorage
      Auth.login(data.login.token);
      // path the user to the homepage
      window.location.assign('/home');
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      {/*main column wrapper*/}
      <section className='rows columns is-mobile'>
        {/*left column*/}
        <div className='image-col login-background column is-9'></div>

        {/*right column*/}
        <div className='column is-3 login-half'>
          <div className='formBx'>
            <div className='formBx-heading mx-4'>
              <h2 onClick={updateToggle} className='signUp-head title my-6 mx-2 '>
                Login
              </h2>
            </div>
            <form onSubmit={handleFormSubmit} className='field'>
              <div className='inputBx my-3 mx-5 '>
                <label className='user label'>Email</label>
                <input
                  className='input'
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  onChange={handleInputChange}
                ></input>
              </div>

              <div className='inputBx my-3 mx-5'>
                <label className='user label'>Password</label>
                <input
                  className='input'
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                  onChange={handleInputChange}
                ></input>
              </div>

              <div className='inputBx mx-5 my-4 field is-grouped'>
                <button
                  type='submit'
                  value='Sign in'
                  id='submit'
                  name='submit'
                  className='user button sign'>
                  Login
                </button>
              </div>
            </form>

              <div className='inputBx user mx-5 my-4'>
                <p>
                  Don't have an account? <a href='/'>Sign up</a>
                </p>
              </div>

              <ul className='sci level px-6 mx-6 my-6'>
                <li className='sci-img level-item'>
                  <i className='fa-brands fa-instagram'></i>
                </li>
                <li className='sci-img level-item'>
                  <i className='fa-brands fa-facebook'></i>
                </li>
                <li className='sci-img level-item'>
                  <i className='fa-brands fa-snapchat'></i>
                </li>
              </ul>

            <div className='login-content-context'>
              {/* if user click on the loggin button, then it will change the state to true and render the login component */}
              {showLogin ? <SignUp /> : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
