import React from 'react';
import './style.css';
import '../../pages/SinglePage';
import '../../pages/contactPage';
import { useQuery } from '@apollo/client';
import { MOTORCYCLE } from '../../utils/query';
import { Link } from 'react-router-dom';
import Head from '../Nav'
import Footer from '../Footer'

// import WrongPath from '../../Components/WrongPath'
function Header() {
  const { data } = useQuery(MOTORCYCLE);

  const motorcycleData = data?.motorcycle || [];
  console.log(motorcycleData);

  return (
    <>
      <Head />
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
            <Link to={`/single/${motorcycle._id}`}>
            <div key={motorcycle._id} className='tile is-parent is-vertical'>
              <div className='tile is-child '>
                <article className='tile is-child '>
                  {/* image for motorcycle */}
                  <div className='card px-6 py-6'>
                    <div className='card-image  has-text-centered' id='image'>
                      <figure className='image is-128x128 is-inline-block my-2'>
                        <img src={motorcycle.image_1} alt='Motorcycle' />
                      </figure>
                    </div>
                    <div className='card-content stats has-text-centered'>
                      <div id='price'>Price: {motorcycle.price}</div>
                      <div id='mileage'>
                        Mileage:{' '}{motorcycle.mileage}
                      </div>
                      <div id='make'>
                        Make:{' '} {motorcycle.make}
                      </div>
                      <div id='model'>
                        Model:{' '} {motorcycle.model}
                      </div>
                      <div id='year'>
                        Year:{' '} {motorcycle.year}
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            </Link>
          ))}
      </section>
      
      <Footer />
    </>
  );
}

export default Header;
