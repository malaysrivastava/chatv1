import React,{useState,useEffect} from 'react'
import { signInWithGoogle } from '../../service/firebase';
import AuthView from './auth-view'
import firebase from '../../service/firebase';
import { useHistory } from 'react-router-dom';

const Auth=()=>{
    const a = "Auth-container";
    let history = useHistory();
    const [user, setUser] = useState(null);

    useEffect(() => {
      firebase.auth().onAuthStateChanged(user => {
        setUser(user);
      })
    }, [user])

    if(user){
        history.replace('/');
    }

    return(
        <AuthView {...{a,signInWithGoogle}}/>
    );
    
};

export default Auth;