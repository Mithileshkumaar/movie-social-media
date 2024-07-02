import React from 'react'

const Chat_input = () => {
      return (
            <div className='chat_input' style={{ display: 'flex' }}>
                  <input type="text" name="" id="" placeholder='text here' />
                  <div className="send">
                        <img src="" alt="attach" />
                        <input type="file" name="" id="" style={{ display: 'none' }} />
                        <label htmlFor="file">
                              <img src="" alt="img" />
                        </label>
                        <button>send</button>
                  </div>
            </div>
      )
}

export default Chat_input
