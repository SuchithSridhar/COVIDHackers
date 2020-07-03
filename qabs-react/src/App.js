import React from "react";
import "./App.css";
import Home from "./pages/home";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import LoginForm from "./components/loginForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
