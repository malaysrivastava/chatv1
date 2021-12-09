import React from 'react'
import { signInWithGoogle } from '../../service/firebase';
import AuthView from './auth-view'

const Auth=()=>{
    const a = "Auth-container";
    
    
    return(
        <AuthView {...{a,signInWithGoogle}}/>
    );
    
};

export default Auth;