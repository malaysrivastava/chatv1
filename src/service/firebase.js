import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC0C4Tj0Vn3gdZpZOeNSeR7g9y0JT4kSvE",
    authDomain: "chat-v1-6dc71.firebaseapp.com",
    projectId: "chat-v1-6dc71",
    storageBucket: "chat-v1-6dc71.appspot.com",
    messagingSenderId: "938204485728",
    appId: "1:938204485728:web:c777abece2306ae71b4b05",
    databaseURL: 'https://chat-v1-6dc71-default-rtdb.firebaseio.com/'
};


// Initialize Firebase 
const fire = firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default fire