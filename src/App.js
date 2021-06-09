import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Email from "./componets/Email";
import Header from "./componets/Header";
import MailDetail from "./componets/MailDetail";
import Sidebar from "./componets/Sidebar";
import { useSelector, useDispatch } from "react-redux";
// import { signinwithgoogle } from "../action/index";
import Form from "./componets/Form";
import SignIn from "./componets/SignIn"
import { set } from "react-hook-form";

function App() {

  const myState = useSelector((state) => state.formhandle);

  const myuser = useSelector((state) => state.signin);
  const [isSignin, setisSignin] = useState(myuser.state)

  console.log(myuser)
  useEffect(() => {
    setisSignin(myuser.state)
  })

  return (
    <div classNameName="app">
    {
      isSignin.user === null ? (<SignIn/>)
       : (
         <>
        <Header />
      <div className="app_body">
        <Router>
          <Sidebar />
          <Switch>

            <Route path="/mail"> <MailDetail /> </Route>
            <Route path="/"> <Email /> </Route>

          </Switch>

          {myState && <Form/>}
        </Router>
      </div>
      </>
         )
    }
      
    </div>
  
  );
}

export default App;
