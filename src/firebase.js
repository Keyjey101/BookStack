
import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "awesome-book-store.firebaseapp.com",
    projectId: "awesome-book-store",
    storageBucket: "awesome-book-store.appspot.com",
    messagingSenderId: "422945911587",
    appId: process.env.APP_ID,
    measurementId: "G-NRNWTYVNK3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase