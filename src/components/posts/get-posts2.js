/*import firebase from 'firebase'

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
*/
console.log('blort')
var authors = ['1', '590'],
  currentAuthor = '1',
  posts = null,
  apiURL = 'http://100creek.local/wp-json/wp/v2/posts/?_embed&author=',
  excerptFilter = '[&#8230;]';

var xhr = new XMLHttpRequest();
var self = this;
xhr.open('GET', apiURL + currentAuthor);
xhr.onload = function () {
  posts = JSON.parse(xhr.responseText);
  console.log(posts[0].link);
}
console.log('blarg');
xhr.send();

export var GetPosts = posts;
