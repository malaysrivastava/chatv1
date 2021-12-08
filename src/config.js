import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyC0C4Tj0Vn3gdZpZOeNSeR7g9y0JT4kSvE",
    authDomain: "chat-v1-6dc71.firebaseapp.com",
    projectId: "chat-v1-6dc71",
    storageBucket: "chat-v1-6dc71.appspot.com",
    messagingSenderId: "938204485728",
    appId: "1:938204485728:web:c777abece2306ae71b4b05"
};


const fire = firebase.initializeApp(config);


firebase.firestore().settings(settings);



export default fire;