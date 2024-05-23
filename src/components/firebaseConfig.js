import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadString } from 'firebase/storage';
import { getDatabase,update,get } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBGEwSl_Si6GNu8p8-MX6NNk8ext4kWRA4",
    authDomain: "crud1-b94c6.firebaseapp.com",
    databaseURL: "https://crud1-b94c6-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "crud1-b94c6",
    storageBucket: "crud1-b94c6.appspot.com",
    messagingSenderId: "721843363253",
    appId: "1:721843363253:web:893331b75b4f5f6f6e0dfc"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getDatabase(app);

export { app, auth, storage,db,firebaseConfig };
