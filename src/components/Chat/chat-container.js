import React,{useState} from 'react'
import { auth } from '../../service/firebase';
import ChatView from './chat-view'
import Page from '../../utils/Page'



const Chat=({data})=>{
    let Pic = 'https://i.pinimg.com/564x/bd/cd/4e/bdcd4e097d609543724874b01aa91c76.jpg';
    
   console.log(data)
    
    const [Contact,setContact] = useState([{uid:1,name:'Malay',dp:Pic,lstmsg:'no message',time:new Date().toLocaleString().split(",")[1],stats:1},
                                           {uid:2,name:'Vipasha',dp:Pic,lstmsg:'no message',time:new Date().toLocaleString().split(",")[1],stats:0},
                                           {uid:3,name:'ZXC',dp:Pic,lstmsg:'no messages',time:new Date().toLocaleString().split(",")[1],stats:1},
                                           {uid:4,name:'Malay',dp:Pic,lstmsg:'no message',time:new Date().toLocaleString().split(",")[1],stats:1}])
    
    return(<Page
        title={data.displayName.split(" ")[0]}
        >
        <ChatView {...{Contact,auth,data}}/>
        </Page>
    );
};

export default Chat;