import firebase from 'firebase'

// Setup Firebase
const config = {
  apiKey: 'AIzaSyDU4gmlItRcuZXAnu8rogyHq2QA-Yv5LvA',
  authDomain: 'test-vue-21d56.firebaseapp.com',
  databaseURL: 'https://test-vue-21d56.firebaseio.com',
  projectId: 'test-vue-21d56',
  storageBucket: 'test-vue-21d56.appspot.com',
  messagingSenderId: '978957331343'
}
const homeContent = firebase.initializeApp(config)

export const db = homeContent.database();
