import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCzXFUOwkyqQ_4jVzb0y_21z4Ekx_6w7Ts",
  authDomain: "codetriperealtime.firebaseapp.com",
  databaseURL: "https://codetriperealtime-default-rtdb.firebaseio.com",
  projectId: "codetriperealtime",
  storageBucket: "codetriperealtime.appspot.com",
  messagingSenderId: "1024612420556",
  appId: "1:1024612420556:web:633beb33c675944932eb69",
  measurementId: "G-BQPKYPV3VK"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

  
export default firebase