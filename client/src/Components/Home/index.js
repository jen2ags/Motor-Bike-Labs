import React from 'react'
import './style.css';
import Auth from '../../utils/auth';
import Header from '../../Components/Header'
import WrongPath from '../../Components/WrongPath'

function Home() {

  const loggedIn = Auth.loggedIn();
    
  return (
    <>
      {loggedIn ? (
        <Header />
        ):
        <WrongPath />
        } 
    </>
  )
}

export default Home