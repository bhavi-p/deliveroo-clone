import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";
import { useEffect } from "react";
import Router from "next/router";
import Cookie from "js-cookie";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";


const firebaseConfig = {
    apiKey: "AIzaSyDkm97VBg-lGsqwbfAyATcuRn22PDPhSsY",
    authDomain: "goog-auth-5adb0.firebaseapp.com",
    projectId: "goog-auth-5adb0",
    storageBucket: "goog-auth-5adb0.appspot.com",
    messagingSenderId: "808254345195",
    appId: "1:808254345195:web:6e53ff5b0625454bbad3ae"
  };

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

let googleEmail = '';
let googleUID = '';
let googleDis = '';
export const signInWithGoogle = async () => {
  
    const res = await auth.signInWithPopup(provider)
    googleEmail = res.user.email;
    googleUID = res.user.uid;
    googleDis = res.user.displayName
    

    if (typeof window === "undefined") {
      return;
    }
  
    return new Promise((resolve, reject) => {
      console.log('EMAIL: ', googleEmail)
      console.log('UID ', res.user.uid)
      console.log('DISPLAY NAME ', res.user.displayName)
      axios
        .post(`${API_URL}/auth/local/register`, {username: googleDis, email: googleEmail, password: googleUID })
        // .post(`${API_URL}/api/google/login/`, {identifier: googleEmail, password: googleUID })
        // .post(`${API_URL}/api/auth/google/login/`, { googleAccess })
        .then((response) => {
          //set token response from Strapi for server validation
          Cookie.set("token", response.data.jwt);
  
          //resolve the promise to set loading to false in SignUp form
          resolve(response);
          //redirect back to home page for restaurance selection
          Router.push("/");
          console.log("Google Login Success")
        })
        .catch((error) => {
          //reject the promise and pass the error object back to the form
          // reject(error);
          console.log("Google Login Fail")
        });
    });
    
};

// export const googleLogin = (identifier, password) => {
//   //prevent function from being ran on the server
//   if (typeof window === "undefined") {
//     return;
//   }

//   return new Promise((resolve, reject) => {
//     axios
//       .post(`${API_URL}/auth/local/`, { identifier, password })
//       .then((res) => {
//         //set token response from Strapi for server validation
//         Cookie.set("token", res.data.jwt);

//         //resolve the promise to set loading to false in SignUp form
//         resolve(res);
//         //redirect back to home page for restaurance selection
//         Router.push("/");
//         console.log("Google Login")
//       })
//       .catch((error) => {
//         //reject the promise and pass the error object back to the form
//         reject(error);
//         console.log("Google Login: ", identifier)
//       });
//   });
// };



    