import React from "react";
import Login1 from "./Login1";
import { GoogleOAuthProvider } from '@react-oauth/google'
export default function App39() {
  const clientid =
    "1049551076553-s9khth194tnt3jor321b7kfkghrs7jcg.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientid}>
      <Login1 />
    </GoogleOAuthProvider>
  );
}