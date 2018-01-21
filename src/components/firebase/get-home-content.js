import firebase from 'firebase'

// Setup Firebase
let config = {
  apiKey: 'AIzaSyDU4gmlItRcuZXAnu8rogyHq2QA-Yv5LvA',
  authDomain: 'test-vue-21d56.firebaseapp.com',
  databaseURL: 'https://test-vue-21d56.firebaseio.com',
  projectId: 'test-vue-21d56',
  storageBucket: 'test-vue-21d56.appspot.com',
  messagingSenderId: '978957331343'
}
let homeContent = firebase.initializeApp(config)
let db = homeContent.database()
let headingsRef = db.ref('stuff')

export default {
  firebase: {
    headings: headingsRef
  }
}
