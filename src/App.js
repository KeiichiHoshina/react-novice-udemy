import React from "react";
import Sample from "./learning/sample";
import Classname from "./learning/classname";
import Message from "./learning/component";
import Profile from "./learning/profile";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { UserIdOne, UserIdTwo } from "./pages";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<UserIdOne />} />
//         <Route path="user-id-two" element={<UserIdTwo />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }



// Learning
function App() {
  const myName = "名無し";
  const myAge = 20;

  const nameList = { name: "名無し", age: 20 }

  return (
    <>
      <Sample />
      <Classname />
      <Message />
      <Profile name={myName} age={myAge} />
      <Profile {...nameList} />
    </>
  );
}

export default App;
