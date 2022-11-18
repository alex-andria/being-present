import React from "react";
import { useState, useEffect } from "react";
import NavBar from "./Components/NavBar"
import LogInPage from "./Components/LogInPage";
import MainPage from "./Components/MainPage";
import {Routes, Route } from "react-router-dom";
import "./App.css";
// import Journal from "./Components/Journal";

function App() {
  // const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);
  const [isLoggedIn, userIsLoggedIn] = useState(false)

  useEffect(() => {
    //auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if (!user) return <LogInPage onLogin={setUser} />

  return (
    // <div className="App">
    //   <h1>Page Count: {count}</h1>
    // </div>
    <>
      <NavBar user={user} setUser={setUser}/>
      <main>
        <Routes>
          <Route path="/" element={<MainPage user={user} setUser={setUser}/>} />
        </Routes>
      </main>
    </>

    
  );
}

export default App;

// cursor parking lot
// -------------------
// |                 |
// |                 | 
// |                 |
// -------------------