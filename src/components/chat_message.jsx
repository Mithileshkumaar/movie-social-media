import React from 'react'

const chat_message = () => {
      return (
            <div className='message' style={{ display: 'flex', flexDirection: 'row-reverse', width: "700px", gap: "20px" }}>
                  <div className="messageInfo"  >

                        <p style={{ backgroundColor: 'grey', width: '30px', height: '30px', borderRadius: "20px" }} >img</p>
                        <span >just now</span>
                  </div>

                  <div className="messageContent">
                        <p>hello mame</p>
                  </div>


            </div>
      )
}

export default chat_message
