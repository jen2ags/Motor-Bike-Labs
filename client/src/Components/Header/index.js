import React from 'react';
import './style.css';
import Auth from '../../utils/auth';
import '../../pages/SinglePage';
import { useQuery } from '@apollo/client';
import { MOTORCYCLE } from '../../utils/query';

// import WrongPath from '../../Components/WrongPath'
function Header() {
  const { data } = useQuery(MOTORCYCLE);

  const motorcycleData = data?.motorcycle || [];
  console.log(motorcycleData);

  return (
    <>
      {/*header and navbar*/}
      <header>
        <nav className='navbar' role='navigation' aria-label='main navigation'>
          <div className='navbar-brand'>
            <a className='navbar-item logo' href='/single'>
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
      <section className='hero is-large'>
        <div className='hero-body my-6'>
          <h1 className='title is-size-1  exhaust'>Exhaust your options</h1>
        </div>
      </section>
      {/*Tiles for motorcycle selection - section for image and section for stats*/}
      <section className='tile is-ancestor is-flex-wrap-wrap mx-2 my-2'>
        {motorcycleData &&
          motorcycleData.map((motorcycle) => (
            <div key={motorcycle._id} className='tile is-parent is-vertical'>
              <div className='tile is-child'>
                <article className='tile is-child'>
                  {/* image for motorcycle */}
                  <div className='card '>
                    <div className='card-image  has-text-centered' id='image'>
                      <figure className='image is-128x128 is-inline-block my-2'>
                        <img src={motorcycle.image} alt='Motorcycle' />
                      </figure>
                    </div>
                    <div className='card-content stats has-text-centered'>
                      <div id='price'>Price {motorcycle.price}</div>
                      <div id='mileage'>
                        Mileage:{' '}
                        <span className='span'>{motorcycle.mileage}</span>
                      </div>
                      <div id='make'>
                        Make: <span className='span'>{motorcycle.make}</span>
                      </div>
                      <div id='model'>
                        Model: <span className='span'>{motorcycle.model}</span>
                      </div>
                      <div id='year'>
                        Year: <span className='span'>{motorcycle.year}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          ))}
      </section>
      )
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
