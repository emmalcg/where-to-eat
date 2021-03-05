import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCA1f7cApXRFMIq0J9ti3bfXqbZjYTz7bA",
    authDomain: "where-to-eat-b6e61.firebaseapp.com",
    projectId: "where-to-eat-b6e61",
    storageBucket: "where-to-eat-b6e61.appspot.com",
    messagingSenderId: "619379540482",
    appId: "1:619379540482:web:6efcdf73619aa95aa61d1b",
    measurementId: "G-EXYFVS90CJ"
};


  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase; 