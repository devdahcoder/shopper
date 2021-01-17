import firebase from "firebase";
import "firebase/auth"
import "firebase/database"
import "firebase/storage"


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD1FiUYLSEX_mbsy_6ZtZ1bBW_O9dXWGOo",
    authDomain: "ecommerce-e6f7c.firebaseapp.com",
    projectId: "ecommerce-e6f7c",
    storageBucket: "ecommerce-e6f7c.appspot.com",
    messagingSenderId: "829662840470",
    appId: "1:829662840470:web:03ab82c7d207073d94a4b7"
  };

  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // var db = firebase.firestore();


  
  export default firebase