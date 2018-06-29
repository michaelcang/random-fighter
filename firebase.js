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
