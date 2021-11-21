import { initializeApp } from "firebase/app";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDtiH8-Fk5qSGtQlimXXp8u8AikYV-X1zo",
  authDomain: "mulinkedin-clone.firebaseapp.com",
  projectId: "mulinkedin-clone",
  storageBucket: "mulinkedin-clone.appspot.com",
  messagingSenderId: "360476699605",
  appId: "1:360476699605:web:ba361ddd21f9ca7e572b5c",
};
const FirebaseApp = initializeApp(firebaseConfig);
const db = FirebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;
