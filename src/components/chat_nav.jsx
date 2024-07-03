import React, { useContext } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Chat_nav = () => {
      const { currentUser } = useContext(AuthContext)
      return (
            <div className='chat_nav' style={{ display: 'flex', gap: "20px" }}>
                  <span className='logo'>msm</span>
                  <div className='user'>
                        <img src={currentUser.photoURL} alt="" height={'20px'} width={"20px"} />
                        <span>{currentUser.displayName}</span>
                        <button onClick={() => { signOut(auth) }}>logout</button>
                  </div>
            </div>
      )
}

export default Chat_nav
