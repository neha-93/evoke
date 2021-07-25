import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAn8aJYhqQMF9ifGFm8fMw5O-WY0NMPuzo",
  authDomain: "evoke-db.firebaseapp.com",
  projectId: "evoke-db",
  storageBucket: "evoke-db.appspot.com",
  messagingSenderId: "1063941606404",
  appId: "1:1063941606404:web:a80b30d42fd8a9782cb951",
  measurementId: "G-FTMEL8E5WQ",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();
  
  if(!snapshot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user',error.message);
    }
  }
  return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

