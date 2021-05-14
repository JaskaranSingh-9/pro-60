import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDWvlqP9o8NbwH7wV0-xHzk78NcDpFqzzA",
    authDomain: "school-attendence-app-7f295.firebaseapp.com",
    databaseURL: "https://school-attendence-app-7f295-default-rtdb.firebaseio.com",
    projectId: "school-attendence-app-7f295",
    storageBucket: "school-attendence-app-7f295.appspot.com",
    messagingSenderId: "608971493755",
    appId: "1:608971493755:web:c8da8a5d2dee77738aedde"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database();