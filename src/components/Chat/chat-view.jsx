import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Item from '@mui/material/Grid';
import Grid from '@mui/material/Grid'
import { TextField } from "@mui/material";
import { useHistory } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp';

const ChatView=({Contact,auth})=>{
 
   const data = {
    "uid": "MY320tpfTCToFbISszcAY4M1KrG2",
    "displayName": "MALAY SRIVASTAVA 191352",
    "photoURL": "https://lh3.googleusercontent.com/a-/AOh14Ggz4o5hZCCr5Ge9HRn9DVl5p9p-zP-SeT_YMmrKhw=s96-c",
    "email": "191352@juitsolan.in",
    "emailVerified": true,
    "phoneNumber": null,
    "isAnonymous": false,
    "tenantId": null,
    "providerData": [
        {
            "uid": "117039177153668769720",
            "displayName": "MALAY SRIVASTAVA 191352",
            "photoURL": "https://lh3.googleusercontent.com/a-/AOh14Ggz4o5hZCCr5Ge9HRn9DVl5p9p-zP-SeT_YMmrKhw=s96-c",
            "email": "191352@juitsolan.in",
            "phoneNumber": null,
            "providerId": "google.com"
        }
    ],
    "apiKey": "AIzaSyC0C4Tj0Vn3gdZpZOeNSeR7g9y0JT4kSvE",
    "appName": "[DEFAULT]",
    "authDomain": "chat-v1-6dc71.firebaseapp.com",
    "stsTokenManager": {
        "apiKey": "AIzaSyC0C4Tj0Vn3gdZpZOeNSeR7g9y0JT4kSvE",
        "refreshToken": "AFxQ4_oEPvdgGCaMyo5MGFSrqMxzXnfyfLbcQHsmiGR3Of0n9jzttlEc9t_9m3Y2UdQvZqW6scM8YtYUtbUqokcSarafy4NOz7We5n3hXW-3fETY7YPwQvDVeypxOax-uumgAbRJ8fA4Z4AyAnPlCbwR9_nW7NKU4kFGfYS-SkmYlQCQZbeoy7IQbvg_cKFAe9Msptcj6bwevSfjuc5L1M8EI4bMEumTyKdvOkV6yUEql3GnnPaDzIZWVfV_ZL7LQSj3I976oLk367qyo3hs62Txz7Ztm1Wio74_HryhpDlHGOFgCKodv0PzvPhCbVws9UMsABdQUbWbZbwbm0r5ll6chMjY5pyWtNehLOxlks7eWDIJgZhtUHVpmtwO3pgpFI-YewZ8SkE4n_T3Vjf6ralltS9WU4AnaN7HrJnRuL1SK4b5GBPJiN4",
        "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ3OTg5ZTU4ZWU1ODM4OTgzZDhhNDQwNWRlOTVkYTllZTZmNWVlYjgiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTUFMQVkgU1JJVkFTVEFWQSAxOTEzNTIiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2d6NG81aFpDQ3I1R2U5SFJuOURWbDVwOXAtelAtU2VUX1lNbXJLaHc9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY2hhdC12MS02ZGM3MSIsImF1ZCI6ImNoYXQtdjEtNmRjNzEiLCJhdXRoX3RpbWUiOjE2MzkxMjkzMDYsInVzZXJfaWQiOiJNWTMyMHRwZlRDVG9GYklTc3pjQVk0TTFLckcyIiwic3ViIjoiTVkzMjB0cGZUQ1RvRmJJU3N6Y0FZNE0xS3JHMiIsImlhdCI6MTYzOTE0NjAxOSwiZXhwIjoxNjM5MTQ5NjE5LCJlbWFpbCI6IjE5MTM1MkBqdWl0c29sYW4uaW4iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNzAzOTE3NzE1MzY2ODc2OTcyMCJdLCJlbWFpbCI6WyIxOTEzNTJAanVpdHNvbGFuLmluIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.aLUD8WhH7_6yPqlILq6xEzJGmGTH0py8gVv3ZUe5ukIEQvolwn0JU3OsSFBinlM9nPJ6piW12ifWR2eyLhM8U-K42OiQs4XVXqWvBW_DXnav_WRBzzGAfnvZWIRcXsd0a0lgv0UOHN6Gnk72nrjqQmptusXMGtAspcgKw4vhLkQI6tdIkAZPPdW4pgpDTGrU9w9m1a7JIbH1u5vxH1yLRxOO_FfAcrCob2SvZjYYAHbG2ySfc3t_F8eVKs47juOmdzaUdvn81pJQujGGeUaVeEjb_e03KFb2aPuHnx1Q-Jn6M5rUVHkZYAeQ7uA5QzlgCBi52KuRWHrfqIexB4fcQw",
        "expirationTime": 1639149619936
    },
    "redirectEventId": null,
    "lastLoginAt": "1639129306121",
    "createdAt": "1639051811269",
    "multiFactor": {
        "enrolledFactors": []
    }
}
    
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
                    <Grid className="logs-card" item xs={12} key={index} margin={1}>
                      <b style={data.stats?{ 'color':'green'} : { 'color':'red',}}>●</b>
                      
                     <img src={'https://i.pinimg.com/564x/bd/cd/4e/bdcd4e097d609543724874b01aa91c76.jpg'} alt="hehe"/>
                      <h5>{data.name}
                      <h7>{data.lstmsg}</h7>
                      </h5>
                      
                      <small>{data.time}</small>
                    </Grid>
                  )
                })}
              </Grid>
            </Grid>
          </Grid>
          <Grid className="mess" item xs={8}>
          <Grid container>
              <Grid className="info" item xs={12}>
                <Item>dsfsdfsdfsdf</Item>
              </Grid>
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