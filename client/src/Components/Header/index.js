import React from 'react';
import './style.css';
import Auth from '../../utils/auth';
// import WrongPath from '../../Components/WrongPath'

function Header() {
  return (
    <>
      {/*header and navbar*/}
      <header>
        <nav class='navbar' role='navigation' aria-label='main navigation'>
          <div class='navbar-brand'>
            <a class='navbar-item logo' href='/'>
              <h1 class='title'>Motor Bike Labs</h1>
            </a>
          </div>

          <div class='navbar-end'>
            <a class='navbar-item' href='#Home'>
              Home
            </a>
            <a class='navbar-item' href='#Reviews'>
              Reviews
            </a>
            <a class='navbar-item' href='#Contact'>
              Contact
            </a>
            <a class='navbar-item' href='#Account'>
              Account
            </a>

            <a class='navbar-item' href='#Logout' onClick={Auth.logout}>
              Logout
            </a>
          </div>
        </nav>
      </header>

      <footer class='footer'>
        <div class='content has-text-centered is-small'>
          <p>
          &copy; 2022 | Built with &#128420; by Jugurta Maouchi, Jennifer
          Jennings, and Cheryl Cruz
          </p>
        </div>
      </footer>
    </>
  );
}

export default Header;
