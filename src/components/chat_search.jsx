import React, { useContext, useState } from 'react';
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';

const ChatSearch = () => {
      const [username, setUsername] = useState('');
      const [user, setUser] = useState(null);
      const [err, setErr] = useState(false);
      const { currentUser } = useContext(AuthContext);

      const handleSearch = async () => {
            const q = query(collection(db, "users"), where("displayName", "==", username));
            try {
                  const querySnapshot = await getDocs(q);
                  querySnapshot.forEach((doc) => {
                        setUser(doc.data());
                  });
                  if (querySnapshot.empty) {
                        setErr(true);
                        setUser(null);
                  } else {
                        setErr(false);
                  }
            } catch (err) {
                  setErr(true);
            }
      };

      const handleKey = (e) => {
            if (e.code === "Enter") handleSearch();
      };

      const handleSelect = async () => {
            const combinedId = currentUser.uid > user.uid
                  ? currentUser.uid + user.uid
                  : user.uid + currentUser.uid;
            try {
                  const res = await getDoc(doc(db, "chats", combinedId));
                  if (!res.exists()) {
                        // Create chat
                        await setDoc(doc(db, "chats", combinedId), { messages: [] });

                        // Create user chats for the current user
                        await updateDoc(doc(db, "userChat", currentUser.uid), {
                              [combinedId + ".userInfo"]: {
                                    uid: user.uid,
                                    displayName: user.displayName,
                                    photoURL: user.photoURL
                              },
                              [combinedId + ".date"]: serverTimestamp()
                        });

                        // Create user chats for the selected user
                        await updateDoc(doc(db, "userChat", user.uid), {
                              [combinedId + ".userInfo"]: {
                                    uid: currentUser.uid,
                                    displayName: currentUser.displayName,
                                    photoURL: currentUser.photoURL
                              },
                              [combinedId + ".date"]: serverTimestamp()
                        });
                  }
            } catch (err) {
                  setErr(true);
            }
            setUser(null)
            setUsername("")
      };

      return (
            <div className='chat_search' style={{ display: 'flex', gap: "20px" }}>
                  <div className='searchForm'>
                        <input
                              type="text"
                              placeholder='search a user'
                              onKeyDown={handleKey}
                              onChange={(e) => setUsername(e.target.value)}
                              value={username}
                        />
                  </div>
                  {err && <span>user not found</span>}
                  {user && (
                        <div className='userChat' onClick={handleSelect}>
                              <img src={user.photoURL} alt="" height={"30px"} width={"30px"} />
                              <div className="userChatInfo">
                                    <span style={{ color: 'black' }}>{user.displayName}</span>
                              </div>
                        </div>
                  )}
            </div>
      );
}

export default ChatSearch;
