import React from 'react';
import LandingPage from './components/LandingPage';

import Navbar from './components/Navbar';
import Routes from './Routes';

const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Routes />
    </div>
  );
};

export default App;
