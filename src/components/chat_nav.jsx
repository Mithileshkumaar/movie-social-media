import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
const chat_nav = () => {
      return (
            <div className='chat_nav' style={{ display: 'flex', gap: "20px" }}>
                  <span className='logo'>msm</span>
                  <div className='user'>
                        <img src="" alt="" />
                        <span>mithi mame</span>
                        <button onClick={() => { signOut(auth) }}>logout</button>
                  </div>
            </div>
      )
}

export default chat_nav
