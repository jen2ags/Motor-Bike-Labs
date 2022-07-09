import React from 'react';
import './singlePage.css';
// columns
function SinglePage() {
  return (
    <>
      <section className='tile is-ancestor is-flex-wrap-wrap'>
        <div className='tile is-parent is-vertical'>
          <div className='tile is-child'>
            {/* main image */}
            <div className='card mx-6'>
              <div className='card-image  has-text-centered ' id='image'>
                <figure className='image '>
                  <img
                    src='https://bulma.io/images/placeholders/480x600.png'
                    alt='Motorcycle'
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
        {/* stats */}
        <div className='tile is-parent is-vertical has-text-centered mx-3'>
          <div className='tile is-child box '>
            <h1 className='title is-3 my-4'>Quick Look</h1>
            {/* Don't put the word year make and model,
           this is acting as a placeholder, only have the data populate only for this section
           */}
            <div className=' level px-6 py-6 mx-6 my-3'>
              <div className='level-item'>
                <div class='subtitle is-4' id='year'>
                  Year
                </div>
              </div>
              <div className='level-item'>
                <div className='subtitle is-4' id='make'>
                  Make
                </div>
              </div>
              <div className='level-item'>
                <div className='subtitle is-4' id='model'>
                  Model
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
                  <textarea
                    className='textarea is-small'
                    id='text'
                    placeholder="I'm interested in the ..."
                  ></textarea>
                </div>
              </div>
              <button className='button' id=''>
                Contact
              </button>
            </form>
            {/* add divider */}
          </div>
        </div>
      </section>
      {/* Details */}
      <section className='tile is-ancestor is-flex-wrap-wrap'>
        {/* Reviews */}
        <div className='tile is-parent is-vertical mx-3'>
          <div className='tile is-child box'>
            <h2 className='title is-3 has-text-centered'>Reviews</h2>
            <p className='subtitle has-text-centered my-3'>See what others think!</p>
            <div className='tile is-child box'>
              <div className='' id='user'>{/* username here */} says: </div>
            </div>
          </div>
        </div>

        <div className='tile is-parent is-vertical mx-3'>
          <div className='tile is-child box'>
            {/* leave the words and populate data next to them */}
            <h2 className='subtitle'>Details</h2>
            <div className=''>
              <div className='level-item' id='condition'>
                Condition:
              </div>
              <div className='level-item' id='primary'>
                Primary Color:
              </div>
              <div className='level-item' id='category'>
                Category:
              </div>
              <div className='level-item' id='type'>
                Type:
              </div>
              <div className='level-item' id='location'>
                Location:
              </div>
              <div className='level-item' id='year'>
                Year:
              </div>
              <div className='level-item' id='make'>
                Make:
              </div>
              <div className='level-item' id='model'>
                Model:
              </div>
              <div className='level-item' id='mileage'>
                Mileage:
              </div>
              <div className='level-item' id='stock'>
                Stock Number:
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SinglePage;
