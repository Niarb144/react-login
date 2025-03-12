import React from "react";
import Inputs from "./Inputs";

function LoginForm(){
  return (
    <form className="form">
    <Inputs 
    type = "text"
    placeholder = "Username"
    />

    <Inputs
    type = "password"
    placeholder = "Password"
    />

    <button type="submit">Login</button>
    </form>
  );
}

function registerForm(){
  return (
    <form className="form">
    <Inputs 
    type = "text"
    placeholder = "Username"
    />

    <Inputs
    type = "password"
    placeholder = "Password"
    />

    <Inputs 
    type = "password"
    placeholder = "Confirm Password"
    />

    <button type="submit">Register</button>

    </form>
  );
}

// function Form() {
//   return (
    
//     loginForm(),
//     registerForm()
  
    
//   );
// }

export default {LoginForm, registerForm};
