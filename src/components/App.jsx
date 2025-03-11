import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date(2025, 2, 14).getHours();

console.log(currentTime);

// function renderConditionally(){
//   if(isLoggedIn === true){
//     return <h1>Hello</h1>
//   }
//   else {
//     return (
//     <Login />
//     );
//   }
// }

function App() {
  return (
    <div className="container">{
      isLoggedIn === true ? <h1>Hello</h1> : <Login />
      // currentTime > 12 ? <h1>Why are you still working</h1> : null
    }     
    </div>
  );
}

export default App;
