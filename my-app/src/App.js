//import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, updmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({ message: message, type: type });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggle = () => {
    if (mode === "light") {
      updmode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
      showalert("Dark Mode Enabled", "success");
    } else {
      updmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showalert("light Mode Enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          AboutText="About"
          mode={mode}
          toggle={toggle}
        />
        <Alert alert={alert} />
        <div className="container">
          <Switch>
          <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route path="/">
              <TextForm
                heading="Enter Text to analyze"
                mode={mode}
                showalert={showalert}
              />
            </Route>
            
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
