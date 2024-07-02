// register.js
import React, { useState } from 'react';
import { auth, storage, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

function Reg() {
      const [err, setErr] = useState(false);

      const handleSubmit = async (e) => {
            e.preventDefault();
            const displayName = e.target[0].value;
            const email = e.target[1].value;
            const password = e.target[2].value;
            const file = e.target[3].files[0];

            try {
                  const res = await createUserWithEmailAndPassword(auth, email, password);

                  const storageRef = ref(storage, `profilePictures/${res.user.uid}`);
                  const uploadTask = uploadBytesResumable(storageRef, file);

                  uploadTask.on(
                        'state_changed',
                        (snapshot) => {
                              // Progress monitoring (optional)
                        },
                        (error) => {
                              // Handle unsuccessful uploads
                              setErr(true);
                              console.error("Upload failed:", error);
                        },
                        async () => {
                              try {
                                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                                    await updateProfile(res.user, {
                                          displayName,
                                          photoURL: downloadURL
                                    });
                                    await setDoc(doc(db, "users", res.user.uid), {
                                          uid: res.user.uid,
                                          displayName,
                                          email,
                                          photoURL: downloadURL
                                    });
                              } catch (error) {
                                    setErr(true);
                                    console.error("Error updating profile or setting Firestore document:", error);
                              }
                        }
                  );
            } catch (err) {
                  setErr(true);
                  console.error("Registration failed:", err);
            }
      };

      return (
            <div>
                  <h2>Register</h2>
                  <div>
                        <form onSubmit={handleSubmit}>
                              <input type="text" placeholder='Display Name' required />
                              <input type="email" placeholder='Email' required />
                              <input type="password" placeholder='Password' required />
                              <input type="file" placeholder='Upload Photo' />
                              <button type="submit">Sign Up</button>
                              {err && <span>Something went wrong</span>}
                        </form>
                  </div>
            </div>
      );
}

export default Reg;
