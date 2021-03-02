import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDRGa313xCvqICNHY-kTmJwTyikmbZPfIY",
    authDomain: "crown-fire-auth.firebaseapp.com",
    projectId: "crown-fire-auth",
    storageBucket: "crown-fire-auth.appspot.com",
    messagingSenderId: "29664471890",
    appId: "1:29664471890:web:0532d59631cee66267a88b",
    measurementId: "G-W6FHLXR2DG"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider
  provider.setCustomParameters({ prompt: 'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  firebase.auth()
    .getRedirectResult()
    .then((result) => {
        if(result.credential) {
            // let credential = result.credential;
            // const authToken = credential.accessToken;
        }
    }).catch((error) => {
        console.log(error);
    })

    export default firebase;