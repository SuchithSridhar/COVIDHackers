import React from "react";
import "./App.css";
import Home from "./pages/home";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import LoginForm from "./components/loginForm";
import Appointment from "./pages/appointment";
import Queue from "./pages/queue";
import Mdets from "./pages/mdets";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/appointment" component={Appointment} />
          <Route path="/queue" component={Queue} />
          <Route path="/mdets" component={Mdets} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
