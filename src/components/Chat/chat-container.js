import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import { auth } from '../../service/firebase';
import ChatView from './chat-view'
import Page from '../../utils/Page'
import firebase from '../../service/firebase';
import Moment from 'moment';



const Chat=({data})=>{
    let Pic = 'https://i.pinimg.com/564x/bd/cd/4e/bdcd4e097d609543724874b01aa91c76.jpg';
   
    const [room, setRoom] = useState([]);
    const [nickname, setNickname] = useState('');
    const [showLoading, setShowLoading] = useState(true);
    const history = useHistory();

    const [Contact,setContact] = useState([{uid:1,name:'Malay',dp:Pic,lstmsg:'no message',time:new Date().toLocaleString().split(",")[1],stats:1},
                                           {uid:2,name:'Vipasha',dp:Pic,lstmsg:'no message',time:new Date().toLocaleString().split(",")[1],stats:0},
                                           {uid:3,name:'ZXC',dp:Pic,lstmsg:'no messages',time:new Date().toLocaleString().split(",")[1],stats:1},
                                           {uid:4,name:'Malay',dp:Pic,lstmsg:'no message',time:new Date().toLocaleString().split(",")[1],stats:1}])
    
    return(<Page
        title={data.displayName.split(" ")[0]}
        >
        <ChatView {...{room,Contact,auth,data}}/>
        </Page>
    );
};

export default Chat;