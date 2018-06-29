import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAmCqWeYmvIymp6z8fbYZwd4G2ddPsGAp0",
  authDomain: "randome-fighter.firebaseapp.com",
  databaseURL: "https://randome-fighter.firebaseio.com",
  projectId: "randome-fighter",
  storageBucket: "randome-fighter.appspot.com",
  messagingSenderId: "1074364113897"
})

export const db = firebaseApp.database()