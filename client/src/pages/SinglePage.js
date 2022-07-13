import React from 'react';
import './singlePage.css';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { SINGLE_MOTORCYCLE } from '../../src/utils/query';
import Head from '../Components/Nav';
import Footer from '../Components/Footer';
import Review from '../../src/pages/Review'

// columns
function SinglePage() {
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
  

  return (
    <>
      <Head />
      {singleM && (
        <section className='tile is-ancestor is-flex-wrap-wrap  '>
          <div className='tile is-parent is-vertical '>
            <div className='tile is-child '>
              {/* main image */}
              <div className='card mx-6 my-6 px-6 py-6 border-tile'>
                <div className='card-image  has-text-centered ' id='image'>
                  <figure className='image is-is-inline-block my-6 py-6'>
                    <img src={singleM.image_1} alt='Motorcycle' />
                  </figure>
                  <div className='is-divider my-6'></div>
                  <figure className='image is-inline-block mx-3  px-3'>
                    <img src={singleM.image_2} alt='Motorcycle' />
                  </figure>
                  <figure className='image is-inline-block mx-3  px-2'>
                    <img src={singleM.image_3} alt='Motorcycle' />
                  </figure>
                </div>
              </div>
            </div>
          </div>
          {/* stats */}
          <div className='tile is-parent has-text-centered mx-4 my-6 px-4 is-flex-wrap-wrap '>
            <div className='tile is-child box is-flex-wrap-wrap border-tile'>
              <h1 className='subtitle is-3 my-4 single-title'>Quick Look</h1>
              <div className=' level px-6 py-6 mx-6 is-flex-wrap-wrap'>
                <div className='level-item'>
                  <div className='subtitle is-3 think-sub' id='year'>
                    {singleM.year}
                  </div>
                </div>
                <div className='level-item'>
                  <div className='subtitle is-3 think-sub' id='make'>
                    {singleM.make}
                  </div>
                </div>
                <div className='level-item'>
                  <div className='subtitle is-3 think-sub' id='model'>
                    {singleM.model}
                  </div>
                </div>
              </div>
              <div
                className='subtitle is-1 py-2 mx-4 my-5 think-sub'
                id='price'
              >
                {singleM.price}
              </div>
              <div className='is-divider mx-6 '></div>

              {/*Add contact form*/}
              <form className='field my-6'>
                <h2 className='subtitle is-4 single-title'>
                  Interested? Contact Us
                </h2>
                <div className='level mx-6 px-6 py-4 '>
                  <div className='level-left '>
                    <input
                      className='input level-item px-5 think-sub input-border '
                      placeholder='First Name'
                      id='first'
                    ></input>
                  </div>
                  <div className='level-right '>
                    <input
                      className='input level-item px-5 think-sub input-border '
                      placeholder='Last Name'
                      id='last'
                    ></input>
                  </div>
                </div>

                <div className='level   mx-6 px-6 '>
                  <div className='level-left '>
                    <input
                      className='input level-item px-5 think-sub input-border'
                      placeholder='Email'
                      id='email'
                    ></input>
                  </div>
                  <div className='level-right '>
                    <input
                      className='input level-item px-5 think-sub input-border'
                      placeholder='Phone (optional)'
                      id='phone'
                    ></input>
                  </div>
                </div>
                <div className='field my-4 mx-6 px-6 think-sub'>
                  <div className='control'>
                    <textarea
                      className='textarea is-small input-border'
                      id='text'
                      placeholder="I'm interested in the ..."
                    ></textarea>
                  </div>
                </div>
                <button className='button input-border' id=''>
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
        <section className='tile is-ancestor is-flex-wrap-wrap mx-2 py-3 m-4 '>
          {/* Reviews */}
          <div className='tile is-parent is-vertical mx-4 my-6 px-2 '>
            
            <Review motorId={singleM._id}/>
          </div>

          <div className='tile is-parent is-vertical mx-3 think-sub '>
            <div className='tile is-child box border-tile'>
              {/* leave the words and populate data next to them */}
              <h2 className='subtitle is-3 single-title'>Details:</h2>
              <div className=''>
                <div className='level-item detail-size' id='condition'>
                  <p className='detail-name px-2'>Condition:</p>
                  {singleM.condition}
                </div>
                <div className='level-item detail-size' id='primary'>
                  <p className='detail-name px-2'>Primary Color:</p>
                  {singleM.primaryColor}
                </div>
                <div className='level-item detail-size' id='category'>
                  <p className='detail-name px-2'>Category:</p>
                  {singleM.category}
                </div>

                <div className='level-item detail-size' id='type'>
                  <p className='detail-name px-2'>Type:</p>
                  {singleM.type}
                </div>
                <div className='level-item detail-size' id='location'>
                  <p className='detail-name px-2'>Location:</p>
                  {singleM.location}
                </div>

                <div className='level-item detail-size' id='year'>
                  <p className='detail-name px-2'>Year:</p> {singleM.year}
                </div>
                <div className='level-item detail-size' id='make'>
                  <p className='detail-name px-2'>Make:</p> {singleM.make}
                </div>
                <div className='level-item detail-size' id='model'>
                  <p className='detail-name px-2'>Model:</p> {singleM.model}
                </div>
                <div className='level-item detail-size' id='mileage'>
                  <p className='detail-name px-2'>Mileage:</p> {singleM.mileage}
                </div>
                <div className='level-item detail-size' id='stock'>
                  <p className='detail-name px-2'>Stock:</p>
                  {singleM.stockNum}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* footer */}
      <Footer />
    </>
  );
}

export default SinglePage;
