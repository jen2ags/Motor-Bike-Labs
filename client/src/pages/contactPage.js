import React from 'react';
import Head from '../Components/Nav';
import Footer from '../Components/Footer';
//import Auth from '../../src/utils/auth';
import './contactPage.css';
function ContactPage() {
  return (
    <>
      <Head />
      {
        <section className='tile is-ancestor mx-6  has-text-centered is-flex-wrap-wrap contact-tile '>
          <div className='tile is-parent has-text-centered mx-6 my-6 px-4 is-6 parent-contact '>
            <div className='tile is-child box column contact-box border-tile'>
              <h1 className='title is-3 my-6 contact-title'>Contact Us</h1>
              {/*Add contact form*/}
              <form className='field contact-field my-6'>
                <h2 className='subtitle is-4 my-6 contact-sub'>Selling your motorcycle?</h2>
                <div className='level  level-field '>
                  <div className='level-item is-flex-wrap-wrap'>
                    <div className='level-item mx-1'>
                      <input
                        className='input level-item level-input input-border '
                        placeholder='First Name'
                        id='first'
                      ></input>
                    </div>
                    <div className='level-item  is-flex-wrap-wrap'>
                      <input
                        className='input level-item level-input input-border'
                        placeholder='Last Name'
                        id='last'
                      ></input>
                    </div>
                  </div>
                </div>

                <div className='level level-field '>
                  <div className='level-item is-flex-wrap-wrap'>
                    <div className='level-item mx-1 '>
                      <input
                        className='input level-item level-input input-border'
                        placeholder='Email'
                        id='email'
                      ></input>
                    </div>
                    <div className='level-item is-flex-wrap-wrap'>
                      <input
                        className='input level-item  level-input input-border'
                        placeholder='Phone (optional)'
                        id='phone'
                      ></input>
                    </div>
                  </div>
                </div>
                <div className='field my-4  px-6'>
                  <div className='control'>
                    <textarea
                      className='textarea is-small level-field input-border'
                      id='text'
                      placeholder="I'm interested in selling ..."
                    ></textarea>
                  </div>
                </div>
                <button className='button input-border' id=''>
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
