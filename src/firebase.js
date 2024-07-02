// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
      apiKey: "AIzaSyAKak-CgCis-Omv2l5DDGD_ng0k8TKOOYY",
      authDomain: "movie-social-media-135ab.firebaseapp.com",
      projectId: "movie-social-media-135ab",
      storageBucket: "movie-social-media-135ab.appspot.com",
      messagingSenderId: "701173540345",
      appId: "1:701173540345:web:130e98d6598069ab49c928",
      measurementId: "G-W4SB114896"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
