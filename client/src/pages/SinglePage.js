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
        <div className='tile is-child box '>
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
          <div
            className='subtitle is-2 py-2 mx-4 
          '
            id='price'
          >
            price
          </div>

          {/*Add contact form*/}
          <form className='field my-6'>
            <h2 className='subtitle is-4'>Interested? Contact Us</h2>
            <div className='level mx-6 px-6 py-4 '>
              <div className='level-left'>
                <input
                  className='input level-item px-5'
                  placeholder='First Name'
                  id='first'
                ></input>
              </div>
              <div class='level-right'>
                <input
                  className='input level-item px-5 '
                  placeholder='Last Name'
                  id='last'
                ></input>
              </div>
            </div>

            <div className='level   mx-6 px-6 '>
              <div className='level-left'>
                <input
                  className='input level-item px-5'
                  placeholder='Email'
                  id='email'
                ></input>
              </div>
              <div class='level-right'>
                <input
                  className='input level-item px-5 '
                  placeholder='Phone (optional)'
                  id='phone'
                ></input>
              </div>
            </div>
            <div className='field my-4 mx-6 px-6'>
              <div className='control'>
                <textarea className='textarea is-small' id='text' placeholder="I'm interested in the ..."></textarea>
              </div>
            </div>
            <button className='button' id=''>Contact</button>
          </form>
          {/* add divider */}
        </div>
        <div className='tile is-child '>
          <h2 className='subtitle is-3'>Details</h2>
          <p className='' id='mileage'>
            mileage
          </p>
        </div>
      </div>
    </section>
  );
}

export default SinglePage;
