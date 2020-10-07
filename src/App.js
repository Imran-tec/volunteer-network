import React, { createContext, useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import Register from './component/Register/Register';
import OrderedTask from './component/OrderedTask/OrderedTask';
import AdminPanel from './component/AdminPanel/AdminPanel';
import LogIn from './component/LogIn/LogIn';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Admin from './component/Admin/Admin';
import NotFound from './component/Notfound/NotFound';
import Header from './component/Header/Header';
import Event from './component/Event/Event';


export const appContext = createContext();


function App() {
const [loggedInUser, setLoggedInUser] = useState({})

  return (
   <appContext.Provider value={[loggedInUser, setLoggedInUser]}>  
   
  
    <Router>  
      <Header></Header>
      <Switch>
       <Route path="/home">
     <Home></Home>
     </Route>
     <Route path="/createEvent"> <Event></Event></Route>
     <PrivateRoute path="/orderedTask"> <OrderedTask></OrderedTask> </PrivateRoute>
     <Route path="/admin"> <Admin></Admin></Route>
     <Route path="/login"> <LogIn></LogIn> </Route>
  <PrivateRoute path="/register/:id">
    <Register></Register>
</PrivateRoute>

<Route exact path="/">
        <Home></Home>
        </Route>
          <Route path="*"> <NotFound></NotFound> </Route>
      </Switch>
      </Router>
      

      </appContext.Provider>
    
  );
}

export default App;
