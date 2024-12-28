import React, { useState } from "react";
import "./../styles/App.css";
import LoginForm from "./Loginform";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="App">
      <h1>{isLoggedIn ? "Welcome Back!" : "Please Log In"}</h1>
      <LoginForm isLoggedIn={isLoggedIn} onLogin={handleLogin} />
    </div>
  );
};

export default App;
