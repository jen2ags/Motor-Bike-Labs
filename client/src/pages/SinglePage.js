import React from 'react';
import './singlePage.css';
// columns
function SinglePage() {
  return (
    <section className='tile is-ancestor is-flex-wrap-wrap'>
      <div className='tile is-parent is-vertical'>
        <div className='tile is-child'>
          {/* main image */}
          <div className='card'>
            <div className='card-image  has-text-centered ' id='image'>
              <figure className='image is-inline-block  px-6 py-6'>
                <img
                  src='https://bulma.io/images/placeholders/480x800.png'
                  alt='Motorcycle'
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      {/* stats */}
      <div className='tile is-parent is-vertical has-text-centered'>
        <div className='tile is-child '>
            <h1 className='title is-3 my-4'>Quick Look</h1>
          <div className=' level px-6 py-6 mx-6 my-3'>
            <div className='level-item'>
              <div class='subtitle is-4' id='year'>
                year
              </div>
            </div>
            <div className='level-item'>
              <div className='subtitle is-4' id='make'>
                make
              </div>
            </div>
            <div className='level-item'>
              <div className='subtitle is-4' id='model'>
                model
              </div>
            </div>
          </div>
        </div>
        <div className='tile is-child '>
          <h1 className='subtitle is-3'>Details</h1>
          <p className='' id='mileage'>mileage</p>
        </div>
      </div>
    </section>
  );
}

export default SinglePage;
