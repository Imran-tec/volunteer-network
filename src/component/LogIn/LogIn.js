import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { appContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './LogIn.css'



const LogIn = () => {
  
  
    const history = useHistory();
const location = useLocation();
const { from } = location.state || { from: { pathname: "/" } };
   

if(firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
   const [loggedInUser, setLoggedInUser] = useContext(appContext);


    const gooleSignIn = () => {
      
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(result => {
            const {displayName,email} = result.user;
           const logginUser = {
             name:displayName,
             email:email
           }
           setLoggedInUser(logginUser)
           history.replace(from);
            console.log(result)
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    return (
        <div className="signInBtn">
            <h4>Login with</h4>
            <button  onClick={gooleSignIn}> Continue with Google </button>
        </div>
    );
};

export default LogIn;