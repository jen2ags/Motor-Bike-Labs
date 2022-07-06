import React from 'react'
import './style.css'
import Auth from '../../utils/auth';


function Header() {
    
  return (
    <div>
      <div className='logout'>
        <button onClick={Auth.logout}>logout</button>
      </div> 
    </div>
  )
}

export default Header