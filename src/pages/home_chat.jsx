import React from 'react';
import './chat.css'
import Sidebar_chats from '../components/sidebar_chats'
import Chat from '../components/chat'
function Home_Chat() {
      return (
            <div>
                  <h1>chat room</h1>

                  <div className='content'>
                        <div>

                              <Sidebar_chats></Sidebar_chats></div>

                        <div><div className='chatroom'><Chat></Chat></div></div>


                  </div>
            </div>

      );
}

export default Home_Chat;