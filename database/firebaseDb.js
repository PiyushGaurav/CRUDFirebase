// database/firebaseDb.js
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyCKvFQfOTWj90GCoDQvqHboYZwrjVK4e3Q',
  authDomain: 'crud-65d56.firebaseapp.com',
  projectId: 'crud-65d56',
  storageBucket: 'crud-65d56.appspot.com',
  messagingSenderId: '654444939753',
  appId: '1:654444939753:web:5566a98e0f165b83f52378',
  measurementId: 'G-EWT60T4639',
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;
