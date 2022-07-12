import React from 'react';
import Head from '../Components/Nav';
import Footer from '../../src/Components/Footer';
//import Auth from '../../src/utils/auth';
import './contactPage.css';
function ContactPage() {
  return (
    <>
      <Head />
      {
        <section className='tile is-ancestor mx-6  has-text-centered is-flex-wrap-wrap contact-tile '>
          <div className='tile is-parent has-text-centered mx-6 my-6 px-4 is-6 '>
            <div className='tile is-child box '>
              <h1 className='title is-3 my-6 contact-title'>Contact Us</h1>
              {/*Add contact form*/}
              <form className='field  my-6'>
                <h2 className='subtitle is-4 my-6 contact-sub'>Selling your motorcycle?</h2>
                <div className='level   px-6'>
                  <div className='level-item is-flex-wrap-wrap'>
                    <div className='level-item mx-4 '>
                      <input
                        className='input level-item '
                        placeholder='First Name'
                        id='first'
                      ></input>
                    </div>
                    <div className='level-item is-flex-wrap-wrap '>
                      <input
                        className='input level-item  '
                        placeholder='Last Name'
                        id='last'
                      ></input>
                    </div>
                  </div>
                </div>

                <div className='level  px-6'>
                  <div className='level-item is-flex-wrap-wrap'>
                    <div className='level-item  mx-4'>
                      <input
                        className='input level-item '
                        placeholder='Email'
                        id='email'
                      ></input>
                    </div>
                    <div className='level-item is-flex-wrap-wrap'>
                      <input
                        className='input level-item  '
                        placeholder='Phone (optional)'
                        id='phone'
                      ></input>
                    </div>
                  </div>
                </div>
                <div className='field my-4  px-6'>
                  <div className='control'>
                    <textarea
                      className='textarea is-small  '
                      id='text'
                      placeholder="I'm interested in selling ..."
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
