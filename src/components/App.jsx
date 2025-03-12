import React from "react";
import forms from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? <forms.LoginForm /> : <forms.registerForm />}
    </div>
  );
}

export default App;
