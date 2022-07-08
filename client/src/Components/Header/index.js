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
              <h1 className='title navbar-item is-2'>Motor Bike Labs</h1>
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
      <section className='hero is-large '>
        <div className='hero-body my-6'>
          <h1 className='title is-size-1  exhaust'>Exhaust your options</h1>
        </div>
      </section>

      {/*Tiles for motorcycle selection - section for image and section for stats*/}
      <section className='tile is-ancestor box is-flex-wrap-wrap mx-1 my-2'>
        <div className='tile is-parent is-vertical'>
          <div className='tile is-child'>
            <article className='tile is-child is-2'>
              {/* image for motorcycle */}
              <div className='card'>
                <div className='card-image  has-text-centered' id='image'>
                  <figure className='image is-128x128 is-inline-block'>
                    <img
                      src='https://bulma.io/images/placeholders/128x128.png'
                      alt='Motorcycle'
                    />
                  </figure>
                </div>
                <div className='card-content stats has-text-centered'>
                  <div className='' id='price'>
                    {/*{price}*/}
                  </div>
                  <div className='' id='mileage'>
                    miles
                  </div>
                  <div className='' id='make'>
                    make
                  </div>
                  <div className='' id='model'>
                    model
                  </div>
                </div>
              </div>
            </article>
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
