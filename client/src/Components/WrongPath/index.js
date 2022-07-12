import React from 'react'
import './style.css'

function wrongPath() {
  return (
    <div>
      <div className='wrongPath'>
        <div className='wrongPath-content'>
            <p className='wrongPath-content-paragraph'>Please Login to be able to see the content</p>
            <a href='/login' className='wrongPath-content-tag'><button>Login</button></a>
        </div>  
      </div>
    </div>
  )
}

export default wrongPath