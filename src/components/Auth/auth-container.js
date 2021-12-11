import React,{useState,useEffect} from 'react'
import { signInWithGoogle } from '../../service/firebase';
import AuthView from './auth-view'
import firebase from '../../service/firebase';
import { useHistory } from 'react-router-dom';
import Page from '../../utils/Page'

const Auth=()=>{
    const a = "Auth-container";
    let history = useHistory();
    const [user, setUser] = useState(null);

    useEffect(() => {
      firebase.auth().onAuthStateChanged(user => {
        setUser(user);
      })
    }, [])

    if(user){
        history.replace('/');
    }

    return(<Page
      title="Login"
      >
        <AuthView {...{a,signInWithGoogle}}/>
        </Page>
    );
    
};

export default Auth;