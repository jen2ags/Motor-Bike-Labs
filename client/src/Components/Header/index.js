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

      {/* hero section, ****add carousel****/}
      <section class='hero is-medium my-6'>
        <div class='hero-body'>
          <div class='title'>Exhaust your options</div>
        </div>
      </section>

      {/*Tiles for motorcycle selection - section for image and section for stats*/}
      <section class='tile is-ancestor'>
        <div class='tile is-parent'>
          <div class='tile is-child box'>
            {/* image for motorcycle */}
            <div class tile is-child container>
              <figure class='image is-128x128'>
                <img
                  src='https://bulma.io/images/placeholders/128x128.png'
                  alt='Motorcycle'
                />
              </figure>
            <div class= 'container'>
              
            </div>
            </div>
          </div>
        </div>
      </section>

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
