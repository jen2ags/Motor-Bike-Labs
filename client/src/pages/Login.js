import React, {useState} from 'react'
// import homepage component
import '../Components/Home/style.css';
// import useMutation from the apollo client. (this will allow us to use the mutations that we has as a middleware on the server side)
import { useMutation } from '@apollo/client';
// get LOGIN_USER mutation
import { LOGIN_USER } from '../utils/mutations';
// import auth to use the token
import Auth from '../utils/auth';


// Login component
function SignUp() {
  const [logins, userLogin] = useState({ email: '', password: '' });

  // get the addUser mutation from the useMutation apollo/client
  const [ login ] = useMutation(LOGIN_USER);
  // Update the state once the user enter new values 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    userLogin({ ...logins, [name]: value });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await login({
        variables: { ...logins}
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
      <section className="rows">
        <div className="div-col">
          <div className="formBx" >
            <h2>Login</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="inputBx">
                <span>email</span>
                <input  type="email" name="email" id="email" placeholder='email' onChange={handleInputChange}></input>
              </div>

              <div className="inputBx">
                <span>Password</span>
                <input  type="password" name="password" id="password" placeholder='******' onChange={handleInputChange}></input>
              </div>

              <div className="inputBx">
                <input type="submit" value="Sign in" id="submit" name="submit" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignUp 