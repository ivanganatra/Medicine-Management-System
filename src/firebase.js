import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyCjKEAPuLRgKI1rxE_poUR9grME_TBVGkQ",
  authDomain: "medeasy-73236.firebaseapp.com",
  projectId: "medeasy-73236",
  storageBucket: "medeasy-73236.appspot.com",
  messagingSenderId: "806814146557",
  appId: "1:806814146557:web:218413bb31b8aa18af0394",
  measurementId: "G-P7HG2FQH1C"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

export default db;