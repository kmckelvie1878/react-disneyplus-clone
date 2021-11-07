import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAIVLJch5XDLSwKsvw2-NAO7TNo0z4EHwQ",
    authDomain: "react-disneyplus-clone-d545d.firebaseapp.com",
    projectId: "react-disneyplus-clone-d545d",
    storageBucket: "react-disneyplus-clone-d545d.appspot.com",
    messagingSenderId: "931884352989",
    appId: "1:931884352989:web:8347ae1d2c6a91f6cd6234",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
