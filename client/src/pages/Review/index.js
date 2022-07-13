import React, {useState} from 'react'
import { ADD_REVIEW } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import './style.css'


// the reason i created this component is to get access to the parent element data, which is the singlePage 
function ReviewsComponent(motorId) {
    console.log(motorId)
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
  
    // add review mutation call
    const [reviewBody, setBody] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [addReview, {error}] = useMutation(ADD_REVIEW);
  
    const handleChange = (event) => {
      // when we change the inputs, get the name and value to change the state to whatever it is set to
      if (event.target.value.length <= 280) {
        setBody(event.target.value);
        setCharacterCount(event.target.value.length);
      }
    };
  
      // submit form
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        await addReview({
          variables: { reviewBody, motorId},
        });
  
        // clear form value
        setBody('');
        setCharacterCount(0);
      } catch (e) {
        console.error(e);
      }
    };

    
  // check if user is logged in
  const loggedIn = Auth.loggedIn();

  return (
    <div>
      <p className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}>
        You have a limit of 280 characters and you at: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <div className='tile is-child box'>
        <h2 className='title is-3 has-text-centered'>Reviews</h2>
        <p className='subtitle has-text-centered my-3'>
          See what others think!
        </p>
        <div className='tile is-child box'>
          <div className='' id='user'>
            {' '} says:{' '} 
          </div>
        </div>
        {reviewsModel ? (
          <>
            <form className='reviews-model' onSubmit={handleFormSubmit}>
              {/* if looged in show the textarea */}
              {loggedIn ? (
                <div>
                  <textarea
                    value={reviewBody}
                    className='textarea my-2'
                    placeholder='Add your review'
                    onChange={handleChange}
                  ></textarea>
                </div>
              ) : (
                // if not logged it give them this error
                <p className='alert-review-login'>
                  Please login to be able to add a review{' '}
                </p>
              )}

              {loggedIn ? (
                  <button className='button my-2 reviews-button' type='submit'>
                    Add
                  </button>
                ) : null}
            </form>

            <div className='reviews-button-container'>
              {/* if looged in*/}
              {loggedIn ? (
                <></>
              ) : 
              <>
                {/* if user is not logged in */}
                <button
                  className='button my-2 reviews-button'
                  onClick={toggleReview}
                >
                  Close
                </button>

                <a href='/login' className='button-review-login'>
                  <button
                  className='button my-2 reviews-button'
                  type='click'
                  >
                  Login
                  </button>
                </a>
              </>
              } 
            </div>
          </>
        ) : (
          <div className='has-text-centered'>
            <button className='button my-3' onClick={toggleReview}>
              Add Review 
            </button>
          </div>
        )}
      </div>
    </div>
    )
  }
export default ReviewsComponent