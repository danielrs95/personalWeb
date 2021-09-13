import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ExperienceScreen from './screens/ExperienceScreen';
import PortfolioScreen from './screens/PortfolioScreen';
import Modal from './components/Modal';

const App = () => {
  return (
    <Router>
      <Header />
      <Modal />
      <Route path='/' component={HomeScreen} exact />
      <Route path='/experience' component={ExperienceScreen} exact />
      <Route path='/portfolio' component={PortfolioScreen} exact />
    </Router>
  );
};

export default App;
