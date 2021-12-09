import React from 'react'
import { auth } from '../../service/firebase';
import ChatView from './chat-view'


const Chat=({chat})=>{

    console.log('hello')
    const a = "chat-container";
    
    return(
        <ChatView {...{a,chat,auth}}/>
    );
};

export default Chat;