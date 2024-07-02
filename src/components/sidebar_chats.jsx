import React from 'react';
import Chat_nav from '../components/chat_nav'
import Chat_search from '../components/chat_search'
import Chats from '../components/chats'

function Sidebar_chats() {
      return (
            <div>



                  <div className='chats'>
                        <div><Chat_nav /></div>
                        <div><Chat_search /></div>
                        <Chats />
                  </div>



            </div>

      );
}

export default Sidebar_chats;