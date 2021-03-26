import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCBL4IL15oEzDMGuN-w6cgsa5N78v-Wa2c",
    authDomain: "crown-cloth-db-2c1f2.firebaseapp.com",
    projectId: "crown-cloth-db-2c1f2",
    storageBucket: "crown-cloth-db-2c1f2.appspot.com",
    messagingSenderId: "683862835634",
    appId: "1:683862835634:web:5c5e20776dd06d44cce4ab",
    measurementId: "G-1S6QQB7NBQ"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try { 
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      };
    };

    return userRef;

  }

  export default firebase;