import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
     
    apiKey: "AIzaSyC1WNYplULCOj-CHlDLn4ZeF9F2zDlJSEg",
    authDomain: "clone-d6041.firebaseapp.com",
    projectId: "clone-d6041",
    storageBucket: "clone-d6041.appspot.com",
    messagingSenderId: "1064817481219",
    appId: "1:1064817481219:web:de4923690f1de9e5a76036",
    measurementId: "G-01CDJZ0QF8"
   
})
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };