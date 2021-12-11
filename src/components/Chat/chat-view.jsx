import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom'
import Grid from '@mui/material/Grid'
import { TextField } from "@mui/material";
import { useHistory } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp';
import { ChatBox } from "../Chatbox";

const ChatView=({Contact,auth,data})=>{
 
  let history = useHistory();

    return(
      <React.Fragment>
      <CssBaseline />
      <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '100vh' }}
        >
        <Box sx={{ bgcolor: '#25282D', height: '100vh' , mt: 0 , width: '100%'}}>
        <Grid container className="capp">
          <Grid className="list" item xs={4}>
            <Grid container>
              <Grid className="info" item xs={12}>
              <img src={data.photoURL} alt="" />
              <h1>{data.displayName}</h1>
              <LogoutIcon className="signout" onClick={() => auth.signOut().then(history.replace('/login'))}/>
              <GroupsSharpIcon className="signout"/>
              </Grid>
              <Grid item xs={12}>
              <TextField
                  id="filled-search"
                  placeholder="Search your Contacts"
                  type="search"
                  fullWidth
                  variant="filled"
                />
              </Grid>
              <Grid container className="logs">
                {Contact.map((data,index)=>{
                  return(
                    <Link style={{'text-decoration':'none','width':'100%'}} to={`/chat/${data.uid}`}>
                    <Grid className="logs-card" item xs={12} key={index} margin={1}>
                      <b style={data.stats?{ 'color':'green'} : { 'color':'red',}}>●</b>
                      
                     <img src={data.dp} alt="hehe"/>
                      <h5>{data.name}
                      <h7>{data.lstmsg}</h7>
                      </h5>
                      
                      <small>{data.time}</small>
                    </Grid>
                    </Link>
                  )
                })}
              </Grid>
            </Grid>
          </Grid>
          <Grid className="mess" item xs={8}>
          <Grid container>
              {/* <ChatBox/> */}
            </Grid>
          </Grid>

        </Grid>
        </Box>
      </Grid>
    </React.Fragment>
    );
};


// <div className="home">
//         <h1>Hello,{a} <span></span>{data.displayName}</h1>
//         <img src={data.photoURL} alt="" />
//         <button className="button signout" onClick={() => auth.signOut().then(history.replace('/'))}>Sign out</button>
//       </div>

export default ChatView;