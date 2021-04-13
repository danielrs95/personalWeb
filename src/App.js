import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import LateralHeader from "./components/LateralHeader";
import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <Router>
      {/* <LateralHeader /> */}
      <Header />
      <Route path='/about' component={AboutScreen} />
      <Route path='/' component={HomeScreen} exact />
    </Router>
  );
};

export default App;
