<<<<<<< HEAD
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
=======
import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  // Populate your firebase configuration data here.
  apiKey: "AIzaSyBv6kpBoe10a592j2LvlZ0RggHLVojPi-U",
  authDomain: "randomfighter-12.firebaseapp.com",
  databaseURL: "https://randomfighter-12.firebaseio.com",
  projectId: "randomfighter-12",
  storageBucket: "randomfighter-12.appspot.com",
  messagingSenderId: "511871249695"
})

  // Initialize Firebase


// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database()
>>>>>>> 9a4a92c87139bedfca47affa29e0e5f3a8d2180a
