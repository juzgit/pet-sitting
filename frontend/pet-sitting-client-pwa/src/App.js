import React from "react";
import { Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import ClientLogin from "./components/Login";

function App() {
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="sign-up-page" element={<SignUp />} />
        <Route path="client-login-page" element={<ClientLogin />} />
      </Routes>
    </div>
    
  );
}

export default App;
