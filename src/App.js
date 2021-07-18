import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ResumeScreen from "./screens/ResumeScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <Route path='/' component={HomeScreen} exact />
      <Route path='/resume' component={ResumeScreen} exact />
    </Router>
  );
};

export default App;
