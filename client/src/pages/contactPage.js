import React from 'react';
import Head from '../Components/Nav';
import Footer from '../Components/Footer';
//import Auth from '../../src/utils/auth';

function ContactPage() {
  return (
    <>
      <Head />
      {
        <section className='tile is-ancestor is-flex-wrap-wrap  '>
          <div className='tile is-parent has-text-centered mx-4 my-6 px-4'>
            <div className='tile is-child box '>
              <h1 className='title is-3 my-4'>Contact Us</h1>
              {/*Add contact form*/}
              <form className='field my-6'>
                <h2 className='subtitle is-4'>Selling your motorcycle?</h2>
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
            </div>
          </div>
        </section>
      }
      {/* footer */}
      <Footer />
    </>
  );
}

export default ContactPage;
