import React from 'react'

const chat_nav = () => {
      return (
            <div className='chat_nav' style={{ display: 'flex', gap: "20px" }}>
                  <span className='logo'>msm</span>
                  <div className='user'>
                        <img src="" alt="" />
                        <span>mithi mame</span>
                        <button>logout</button>
                  </div>
            </div>
      )
}

export default chat_nav
