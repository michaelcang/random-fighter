import firebase from 'firebase'

// Initialize Firebase
var config = {
  databaseURL: 'https://random-killer.firebaseio.com',
  projectId: 'random-killer'
}

firebase.initializeApp(config)

export const db = firebase.database()
