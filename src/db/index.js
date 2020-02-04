import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyDpcpxhDZQzb10p_sQE-NtZGU9_K0ZHEII',
  authDomain: 'testfirebase-8c00b.firebaseapp.com',
  databaseURL: 'https://testfirebase-8c00b.firebaseio.com',
  projectId: 'testfirebase-8c00b',
  storageBucket: 'testfirebase-8c00b.appspot.com',
  messagingSenderId: '1046661226011',
  appId: '1:1046661226011:web:3c70a1c026092f5d3c62be',
  measurementId: 'G-EJQV4CZHLW',
});

const db = firebase.firestore();

export default db;
