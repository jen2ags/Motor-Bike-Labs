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
         {/* stats */}
        <div className= 'tile is-child'>
        </div>
      </div>
    </section>
  );
}

export default SinglePage;
