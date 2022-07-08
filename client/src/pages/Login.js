import React, { useState } from 'react';
// import homepage component
import './loginPage.css';
// import useMutation from the apollo client. (this will allow us to use the mutations that we has as a middleware on the server side)
import { useMutation } from '@apollo/client';
// get LOGIN_USER mutation
import { LOGIN_USER } from '../utils/mutations';
// import auth to use the token
import Auth from '../utils/auth';
// bulma import
import 'bulma/css/bulma.css';

// Login component
function SignUp() {
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
      <section className='rows'>
        <div className='div-col'>
          <div className='formBx mx-3 my-3'>
            <h2 className='login-head title my-6 mx-2'>Login</h2>
            <form onSubmit={handleFormSubmit} className='field'>
              <div className='inputBx my-3 mx-4 '>
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

              <div className='inputBx my-3 mx-3'>
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

              <div className='inputBx mx-4 my-5 field is-grouped'>
                <button
                  className='user button'
                  type='submit'
                  value='Sign in'
                  id='submit'
                  name='submit'
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignUp;
