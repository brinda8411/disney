
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCJ0XXTOTlq79Jvbv0R_idn4BcsdEf60FU",
    authDomain: "disney-hotstar-clone-b8e52.firebaseapp.com",
    projectId: "disney-hotstar-clone-b8e52",
    storageBucket: "disney-hotstar-clone-b8e52.appspot.com",
    messagingSenderId: "610040053077",
    appId: "1:610040053077:web:372ae6da16433b37e703dc",
    measurementId: "G-0RFKVD3LTE"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();
  export {auth,provider,storage};
  export default db;

