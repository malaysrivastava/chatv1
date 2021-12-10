import React from "react";
import { useHistory } from 'react-router-dom';

const ChatView=({a,data,auth})=>{

  let history = useHistory()
    return(
        <h1>sds</h1>
    );
};


// <div className="home">
//         <h1>Hello,{a} <span></span>{data.displayName}</h1>
//         <img src={data.photoURL} alt="" />
//         <button className="button signout" onClick={() => auth.signOut().then(history.replace('/'))}>Sign out</button>
//       </div>

export default ChatView;