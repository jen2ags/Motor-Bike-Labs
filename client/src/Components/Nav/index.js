import React from 'react';
import Auth from '../../utils/auth';

function Head() {
    // check if user is logged in
    const loggedIn = Auth.loggedIn();

  return (
    <div>
      {/*header and navbar*/}
      <header>
        <nav className='navbar ' role='navigation' aria-label='main navigation'>
          <div className='navbar-brand'>
            <a className='navbar-item logo' href='/home'>
              <h1 className='title main-title navbar-item is-2'>Motor Bike Labs</h1>
            </a>
          </div>

          <div className='navbar-end'>
            <a className='navbar-item nav-center' href='/home'>
              Home
            </a>

            <a className='navbar-item nav-center' href='/Contact'>
              Contact
            </a>
            <a className='navbar-item nav-center' href='#Account'>
              Account
            </a>

            <a className='navbar-item nav-center' href='#Logout' onClick={Auth.logout}>
              Logout
            </a>
            
            <a className='navbar-item' href='/login' onClick={Auth.logout}>
              Login
            </a>
            
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Head;
