import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
function Login() {
      const [err, setErr] = useState(false);
      const navigate = useNavigate()
      const handleSubmit = async (e) => {
            e.preventDefault();

            const email = e.target[0].value;
            const password = e.target[1].value;


            try {
                  await signInWithEmailAndPassword(auth, email, password)
                  navigate('/chat')
            } catch (err) {
                  setErr(true);
                  console.error("Registration failed:", err);
            }
      };
      return (
            <div>
                  login
                  <div>
                        <form action="" onSubmit={handleSubmit}>

                              <input type="email" name="name" id="" placeholder='email' />
                              <input type="password" name="name" id="" placeholder='pass' />
                              <button>sign in</button>
                              {err && <span>Something went wrong</span>}

                        </form>

                  </div>
            </div>
      );
}

export default Login;