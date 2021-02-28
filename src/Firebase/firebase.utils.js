import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBMcuv1kqLBMI6_P07aJfOgecOaaqgbo8k",
  authDomain: "crown-db-c3cbc.firebaseapp.com",
  projectId: "crown-db-c3cbc",
  storageBucket: "crown-db-c3cbc.appspot.com",
  messagingSenderId: "855945538697",
  appId: "1:855945538697:web:8286de9deeadb745942a58",
};


firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});


export const signInWithGoogle = () => auth.signInWithRedirect(provider).then(result => {
  console.log(result.user);
});

export default firebase;