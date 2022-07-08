import React from 'react';
import './style.css';
import Auth from '../../utils/auth';
// import WrongPath from '../../Components/WrongPath'

function Header() {
  return (
    <>
      {/*header and navbar*/}
      <header>
        <nav className='navbar' role='navigation' aria-label='main navigation'>
          <div className='navbar-brand'>
            <a className='navbar-item logo' href='/'>
              <h1 className='title'>Motor Bike Labs</h1>
            </a>
          </div>

          <div className='navbar-end'>
            <a className='navbar-item' href='#Home'>
              Home
            </a>
            <a className='navbar-item' href='#Reviews'>
              Reviews
            </a>
            <a className='navbar-item' href='#Contact'>
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

      {/* hero section, ****add carousel****/}
      <section className='hero is-medium my-6'>
        <div className='hero-body'>
          <div className='title'>Exhaust your options</div>
        </div>
      </section>

      {/*Tiles for motorcycle selection - section for image and section for stats*/}
      <section className='tile is-ancestor'>
        <div className='tile is-parent'>
          <div className='tile is-child box'>
            {/* image for motorcycle */}
            <div className tile is-child container>
              <figure className='image is-128x128'>
                <img
                  src='https://bulma.io/images/placeholders/128x128.png'
                  alt='Motorcycle'
                />
              </figure>
            <div className= 'container stats'>

            </div>
            </div>
          </div>
        </div>
      </section>

      <footer className='footer'>
        <div className='content has-text-centered is-small'>
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
