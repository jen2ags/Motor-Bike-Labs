import React, { useState } from 'react';
// import homepage component
import './login.css';
// import useMutation from the apollo client. (this will allow us to use the mutations that we has as a middleware on the server side)
import { useMutation } from '@apollo/client';
// get LOGIN_USER mutation
import { ADD_USER} from '../utils/mutations';
// import auth to use the token
import Auth from '../utils/auth';
// bulma import
import 'bulma/css/bulma.css';

// Login component
function SignUp() {
  // state to handle user input
  const [signup, userSignUp] = useState({
    username: '',
    email: '',
    password: '',
  });

  // get the addUser mutation from the useMutation apollo/client, this will give us access to create a user
  const [addUser] = useMutation(ADD_USER);

  // Update the state once the user enter new values
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    userSignUp({ ...signup, [name]: value });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...signup },
      });

      // as we can see on the mutation addUser, give us the token and User array as a response
      // save the token we got back from the data to localStorage
      Auth.login(data.addUser.token);
      // path the user to the homepage
      window.location.assign('/');
    } catch (e) {
      console.error(e);
    }
  };

  // create columns left and right to host image and login/signup information


  return (
    <>
      <section className='rows'>
        <div className='div-col'>
          <div className='formBx mx-3 my-3'>
            <div className='signUp-head title my-5 mx-2t'>
              <a href='/'><i className="fa-solid fa-angles-left"></i></a>
            </div> 
            <form onSubmit={handleFormSubmit} className='field'>
              <div className='inputBx my-3 mx-4'>
                <label className='user label'>Username</label>
                <input
                  className='input'
                  type='text'
                  name='username'
                  id='username'
                  placeholder='Username'
                  onChange={handleInputChange} />
              </div>


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

              <div className='remember user mx-5 my-3'>
                <input type='checkbox' />
                <label htmlFor=''> Remember Me</label>
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
