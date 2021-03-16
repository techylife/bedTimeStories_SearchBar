import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCj1xa9sJCq3g4uFsYypYpo617vXFjS3YE",
    authDomain: "bedtimes-9d05f.firebaseapp.com",
    projectId: "bedtimes-9d05f",
    storageBucket: "bedtimes-9d05f.appspot.com",
    messagingSenderId: "432316704762",
    appId: "1:432316704762:web:aad17cba588e5fd0916643",
    measurementId: "G-DJVW4EC6X6"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
