import React from "react";
import Header from "./components/Header";
import LateralHeader from "./components/LateralHeader";
import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <div>
      {/* <LateralHeader /> */}
      <Header />
      <HomeScreen />
      <AboutScreen />
    </div>
  );
};

export default App;
