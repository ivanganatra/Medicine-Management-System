import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCqpuOG7xV3ZINsIPpxg_NxcTbve5UbNJc",
    authDomain: "frosthack-a595f.firebaseapp.com",
    projectId: "frosthack-a595f",
    storageBucket: "frosthack-a595f.appspot.com",
    messagingSenderId: "809506513404",
    appId: "1:809506513404:web:34578526d7eba908c55279"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

export default db;