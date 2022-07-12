import React from 'react';
import Auth from '../../utils/auth';

function Head() {
  return (
    <div>
      {/*header and navbar*/}
      <header>
        <nav className='navbar' role='navigation' aria-label='main navigation'>
          <div className='navbar-brand'>
            <a className='navbar-item logo' href='/home'>
              <h1 className='title navbar-item is-2'>Motor Bike Labs</h1>
            </a>
          </div>

          <div className='navbar-end'>
            <a className='navbar-item' href='/home'>
              Home
            </a>

            <a className='navbar-item' href='/Contact'>
              Contact
            </a>
            <a className='navbar-item' href='#Account'>
              Account
            </a>

            <a className='navbar-item' href='#Logout' onClick={Auth.logout}>
              Logout
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Head;
