import React,{useState,useEffect} from "react";
import ChatBoxView from "./chatbox-view";
import Page from '../../utils/Page'

const ChatBox=(props,{data})=>{

    const [uID,setId] = useState('')

    useEffect(() => {
        setId(props.match.params.uId)
    }, [props])
    return(
        <ChatBoxView id={uID}/>
    )
}

export default ChatBox;