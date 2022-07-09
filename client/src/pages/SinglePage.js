import React from 'react';
import './singlePage.css';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { SINGLE_MOTORCYCLE } from '../../src/utils/query';
import Head from '../Components/Nav'
import Footer from '../../src/Components/Footer'
import Auth from '../../src/utils/auth';

// columns
function SinglePage() {
  // this useParams is to get the data by id
  const { id: sigleMotorcycleId } = useParams();
  const { loading, data } = useQuery(SINGLE_MOTORCYCLE, {
    variables: { id: sigleMotorcycleId }
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
      {singleM &&
      <section className='tile is-ancestor is-flex-wrap-wrap'>
        <div className='tile is-parent is-vertical'>
          <div className='tile is-child'>
            {/* main image */}
            <div className='card mx-6'>
              <div className='card-image  has-text-centered ' id='image'>
                <figure className='image is-inline-block px-3 py-3 my-3'>
                <img src={singleM.image} alt='Motorcycle'/>
                </figure>
              </div>
            </div>
          </div>
        </div>
        {/* stats */}
        <div className='tile is-parent is-vertical has-text-centered'>
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
      }
      
      {/* Details */}
      {singleM &&
      <section className='tile is-ancestor is-flex-wrap-wrap'>
        <div className='tile is-parent is-vertical'>
          <div className='tile is-child box'>
            {/* leave the words and populate data next to them */}
            <h2 className='subtitle'>Details</h2>
            <div className='level'>
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
                {singleM.year}
              </div>
              <div className='level-item' id='make'>
                {singleM.make}
              </div>
              <div className='level-item' id='model'>
                {singleM.model}
              </div>
              <div className='level-item' id='mileage'>
                {singleM.mileage}
              </div>
              <div className='level-item' id='stock'>
                Stock Number:
              </div>
            </div>
          </div>
        </div>
      </section>
    }
      {/* Reviews */}

      {/* footer */}
      <Footer />
    </>
  );
}

export default SinglePage;
