import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signinwithgoogle } from "../action/index";
import { auth, db, provider } from "../FirebaseCode";

const SignIn = () => {
  const myuser = useSelector((state) => state.signin);
  const dispatch = useDispatch();
  // console.log(myuser.state)
  
  

  const login = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
          dispatch(signinwithgoogle(result.user));
            db.collection("users").doc(result.user.uid).set({
                username: result.user.displayName,
                profile: result.user.photoURL,
                email: result.user.email
              }).then(() => {
                  console.log("Document successfully written!");
              }).catch((error) => {
                console.log("Error writing document: ", error);
            })

          }).catch((error) => alert(error.message));
  };
  return (
    <div className="signin">
      <Button color="primary" onClick={login}>
        SignIn
      </Button>
    </div>
  );
};

export default SignIn;
