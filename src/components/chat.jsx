import React from 'react'
import Messages from './chat_messages'
import Input from './input'
const chat = () => {
      return (
            <div className='chat'>
                  <div className="chatInfo" style={{ display: 'flex', justifyContent: "space-between" }}>
                        <span>ram</span>
                        <div className='chatIcons'>
                              <img src="" alt="cam" />
                              <img src="" alt="add" />
                              <img src="" alt="more" />
                              <Messages />
                              <Input />
                        </div>
                  </div>
            </div>
      )
}

export default chat
