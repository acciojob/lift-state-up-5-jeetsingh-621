import React, { useState } from "react";
import "./../styles/App.css";
import LoginForm from "./Loginform";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <h1>Parent Component</h1>
      <LoginForm isLoggedIn={isLoggedIn} onLogin={handleLogin} />
    </div>
  );
};

export default App;
