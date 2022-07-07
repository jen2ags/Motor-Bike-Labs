import React, {useState} from 'react'
// import homepage component
import './loginPage.css';
// import image from images folder
import undraw from '../images/undraw_nakamoto_-2-iv6.svg';
// import useMutation from the apollo client. (this will allow us to use the mutations that we has as a middleware on the server side)
import { useMutation } from '@apollo/client';
// get ADD_USER mutation
import { ADD_USER } from '../utils/mutations';
// import auth to use the token
import Auth from '../utils/auth';
import Login from './Login'
// bulma import
import 'bulma/css/bulma.css';


// Login component
function SignUp() {
  // set a state that will let me see the signup component or the login component
  const [showLogin, setShowLogin] = useState(false);
  // update state to show the Login component instead of the signup 
  function updateToggle(){
    if(showLogin===true){
      setShowLogin(false)
    }
    else{
      setShowLogin(true)
    }
  }

  // state to handle user input 
  const [signup, userSignUp] = useState({ username: '', email: '', password: '' });

  // get the addUser mutation from the useMutation apollo/client, this will give us access to create a user 
  const [ addUser ] = useMutation(ADD_USER);

  // Update the state once the user enter new values 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    userSignUp({ ...signup, [name]: value });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...signup }
      });

      // as we can see on the mutation addUser, give us the token and User array as a response 
      // save the token we got back from the data to localStorage
      Auth.login(data.addUser.token);
      // path the user to the homepage
      window.location.assign('/home');

    } catch (e) {
      console.error(e);
    }
  };


  return (
    <>
      <section className="rows">
        <div className="image-col imgBx">
          <img src={undraw} alt="" />
          <div className="context">
            <h1>Hello and welcome to our platfrom</h1>
            <div className="context-container">
              <p>our goal is to make things easy for you to succeed.</p>
            </div>   
          </div>
        </div>
        <div className="div-col">
          <div className="formBx" >
            <div className='formBx-heading'>
              <h2>Sign Up</h2>
              <h2 onClick={updateToggle}>Login</h2>
            </div>
            <form onSubmit={handleFormSubmit}>
              <div className="inputBx">
                <span>Username</span>
                <input type="text" name="username" id="username" placeholder='Your username' onChange={handleInputChange}/>
              </div>

              <div className="inputBx">
                <span>email</span>
                <input  type="email" name="email" id="email" placeholder='email' onChange={handleInputChange}></input>
              </div>

              <div className="inputBx">
                <span>Password</span>
                <input  type="password" name="password" id="password" placeholder='******' onChange={handleInputChange}></input>
              </div>

              <div className="remember">
                <input type="checkbox" /> 
                <label htmlFor=''>Remember Me</label>
              </div>

              <div className="inputBx">
                <input type="submit" value="Sign in" id="submit" name="submit" />
              </div>

              <div className="inputBx">
                <p>Don't have an account? <a href="/">Sign up</a></p>
              </div>

            </form>

            <ul className="sci">
              <li className="sci-img"><i className="fa-brands fa-instagram"></i></li>
              <li className="sci-img"><i className="fa-brands fa-facebook"></i></li>
              <li className="sci-img"><i className="fa-brands fa-snapchat"></i></li>
            </ul>

            <div className='login-content-context'>
              {/* if user click on the loggin button, then it will change the state to true and render the login component */}
              {showLogin ? (
                <Login />
                ):null
              }
            </div>  
          </div>
        </div>
      </section>
    </>
  )
}

export default SignUp 