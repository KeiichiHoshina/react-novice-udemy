import React from "react";



// セクション3: Reactの基本操作 & セクション5: React Hooks
// import Sample from "./learning/sample";
// import Classname from "./learning/classname";
// import Message from "./learning/component";
// import Profile from "./learning/profile";
// import Member from "./learning/member";
// import Hooks from "./learning/hooks";

// function App() {
//   const myName = "名無し";
//   const myAge = 20;
//   const nameList = { name: "名無し", age: 20 }
//   return (
//     <>
//       <Sample />
//       <Classname />
//       <Message />
//       <Profile name={myName} age={myAge} />
//       <Profile {...nameList} />
//       <Member />
//       <Hooks />
//     </>
//   );
// }



// セクション6: React Router V6
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Page1 from "./pages2/page1";
// import Page2 from "./pages2/page2";
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Page1 />} />
//         <Route path="/page2" element={<Page2 />} />
//       </Routes>
//     </BrowserRouter>
//   )
// }

// セクション7: Todoアプリを開発する
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserIdOne, UserIdTwo } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserIdOne />} />
        <Route path="user-id-two" element={<UserIdTwo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
