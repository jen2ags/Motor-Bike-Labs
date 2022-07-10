import React, { useState } from 'react';
import './singlePage.css';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { SINGLE_MOTORCYCLE } from '../../src/utils/query';
import Head from '../Components/Nav';
import Footer from '../../src/Components/Footer';
import Auth from '../../src/utils/auth';
import { KnownFragmentNamesRule } from 'graphql';

// columns
function SinglePage() {
  // set a state that will handle, displaying the reviews model or hide it
  const [reviewsModel, addReviewModel] = useState(false);
  // update the state
  function toggleReview() {
    if (reviewsModel === true) {
      addReviewModel(false);
    } else {
      addReviewModel(true);
    }
  }

  // this useParams is to get the data by id
  const { id: sigleMotorcycleId } = useParams();
  const { loading, data } = useQuery(SINGLE_MOTORCYCLE, {
    variables: { id: sigleMotorcycleId },
  });
  const singleM = data?.sigleMotorcycle || {};
  console.log(singleM);

  if (loading) {
    return <div>Loading...</div>;
  }

  // this will be used once a user want to add a review
  const loggedIn = Auth.loggedIn();

  return (
    <>
      <Head />
      {singleM && (
        <section className='tile is-ancestor is-flex-wrap-wrap'>
          <div className='tile is-parent is-vertical'>
            <div className='tile is-child'>
              {/* main image */}
              <div className='card mx-6'>
                <div className='card-image  has-text-centered ' id='image'>
                  <figure className='image is-inline-block px-3 py-3 my-3'>
                    <img src={singleM.image} alt='Motorcycle' />
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
                  <div className='subtitle is-4' id='year'>
                    {singleM.year}
                  </div>
                </div>
                <div className='level-item'>
                  <div className='subtitle is-4' id='make'>
                    {singleM.make}
                  </div>
                </div>
                <div className='level-item'>
                  <div className='subtitle is-4' id='model'>
                    {singleM.model}
                  </div>
                </div>
              </div>
              <div
                className='subtitle is-2 py-2 mx-4 
          '
                id='price'
              >
                {singleM.price}
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
                  <div className='level-right'>
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
                  <div className='level-right'>
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
      )}

      {/* Details */}
      {singleM && (
        <section className='tile is-ancestor is-flex-wrap-wrap'>
          {/* Reviews */}
          <div className='tile is-parent is-vertical mx-3'>
            <div className='tile is-child box'>
              <h2 className='title is-3 has-text-centered'>Reviews</h2>
              <p className='subtitle has-text-centered my-3'>
                See what others think!
              </p>
              <div className='tile is-child box'>
                <div className='' id='user'>
                  {/* username here */} says:{' '}
                </div>
              </div>
              {reviewsModel ? (
                <div className='reviews-model'>
                  {/* if looged in show the textarea */}
                  {loggedIn ? (
                    <div>
                      <textarea
                        className='textarea my-2'
                        placeholder='Add your review'
                      ></textarea>
                    </div>
                  ) : (
                    // if not logged it give them this error
                    <p className='alert-review-login'>
                      Please login to be able to add a review{' '}
                    </p>
                  )}
                  <div className='reviews-button-container'>
                    {/* if looged in show the add button*/}
                    {loggedIn ? (
                      <button className='button my-2 reviews-button'>
                        Add
                      </button>
                    ) : null}
                    <button
                      className='button my-2 reviews-button'
                      onClick={toggleReview}
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <button className='button my-2' onClick={toggleReview}>
                  Add Review
                </button>
              )}
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
                  <p className='detail-name px-1'>Primary Color:</p>
                </div>
                <div className='level-item' id='category'>
                  <p className='detail-name px-1'>Category:</p>
                </div>

                <div className='level-item' id='type'>
                  <p className='detail-name px-1'>Type:</p>
                </div>
                <div className='level-item' id='location'>
                  <p className='detail-name px-1'>Location:</p>
                </div>

                <div className='level-item' id='year'>
                  <p className='detail-name px-1'>Year:</p> {singleM.year}
                </div>
                <div className='level-item' id='make'>
                  <p className='detail-name px-1'>Make:</p> {singleM.make}
                </div>
                <div className='level-item' id='model'>
                  <p className='detail-name px-1'>Model:</p> {singleM.model}
                </div>
                <div className='level-item' id='mileage'>
                  <p className='detail-name px-1'>Mileage:</p> {singleM.mileage}
                </div>
                <div className='level-item' id='stock'>
                  <p className='detail-name px-1'>Stock:</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* Reviews */}

      {/* footer */}
      <Footer />
    </>
  );
}

export default SinglePage;
