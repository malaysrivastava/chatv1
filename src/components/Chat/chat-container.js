import React,{useState} from 'react'
import { auth } from '../../service/firebase';
import ChatView from './chat-view'



const Chat=()=>{
    const PP = 'https://i.pinimg.com/564x/bd/cd/4e/bdcd4e097d609543724874b01aa91c76.jpg';
    
   
    
    const [Contact,setContact] = useState([{name:'Malay',dp:PP,lstmsg:'no message',time:new Date().toLocaleString().split(",")[1],stats:1},
                                           {name:'Vipasha',dp:PP,lstmsg:'no message',time:new Date().toLocaleString().split(",")[1],stats:0},
                                           {name:'ZXC',dp:PP,lstmsg:'no messages',time:new Date().toLocaleString().split(",")[1],stats:1},{name:'Malay',dp:PP,lstmsg:'no message',time:new Date().toLocaleString().split(",")[1],stats:1},
                                           {name:'Vipasha',dp:PP,lstmsg:'no message',time:new Date().toLocaleString().split(",")[1],stats:0},
                                           {name:'ZXC',dp:PP,lstmsg:'no messages',time:new Date().toLocaleString().split(",")[1],stats:1},{name:'Malay',dp:PP,lstmsg:'no message',time:new Date().toLocaleString().split(",")[1],stats:1},
                                           {name:'Vipasha',dp:PP,lstmsg:'no message',time:new Date().toLocaleString().split(",")[1],stats:0},
                                           {name:'ZXC',dp:PP,lstmsg:'no messages',time:new Date().toLocaleString().split(",")[1],stats:1}])
    
    return(
        <ChatView {...{Contact,auth}}/>
    );
};

export default Chat;