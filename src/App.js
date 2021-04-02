import React from "react";
import Header from "./components/Header";
import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <div>
      <Header />
      <HomeScreen />
      <AboutScreen />
    </div>
  );
};

export default App;
