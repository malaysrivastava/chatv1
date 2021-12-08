import React from "react";
import { BrowserRouter as Router,Switch,Route,Redirect,useHistory } from "react-router-dom";
import Login from './components/Login'
import RoomList from './components/RoomList'
import AddRoom from './components/AddRoom'
import ChatRoom from './components/ChatRoom'
import SecureRoute from "./components/secureRoute";


const App=()=>{

  let location = useHistory();

  return (
    <Router>
        {/* <Redirect to={{pathname:"/roomlist",state:{from:location}}}/> */}
        <Switch>
          <Route exact path="/login">
            <Login/>
          </Route>
          <SecureRoute path='/roomlist' component={RoomList}>
            <RoomList/>
          </SecureRoute>
          <SecureRoute path = "/addroom" component={AddRoom}>
             <AddRoom/>
          </SecureRoute>
          <SecureRoute path="/chatroom/:room" component={ChatRoom}>
            <ChatRoom/>
          </SecureRoute>
        </Switch>
      </Router>
  );
};

export default App;
