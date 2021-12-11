import React,{useState,useEffect} from "react";
import firebase from "./service/firebase";
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {Auth} from './components/Auth'
import {Chat} from './components/Chat'
import SecureRoute from "./utils/secureRoute";
import {ChatBox} from './components/Chatbox'

const App=()=>{

    const [user, setUser] = useState(null);

    useEffect(() => {
      firebase.auth().onAuthStateChanged(user => {
        setUser(user);
      })
    }, [])
  return (

    <Router>
        {/* <Redirect to={{pathname:"/roomlist",state:{from:location}}}/> */}
        <Switch>
        
          <Route path="/login" component={Auth}/>
          <SecureRoute exact path="/" component={Chat} user={user}/>
          <Route path='/chat/:uId/' exact render={props=> <ChatBox {...props} user={user}/>}/>
        </Switch>
      </Router>
  );
};

export default App;
