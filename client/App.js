import React from 'react';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';

import Navbar from './components/Navbar';
import Routes from './Routes';

const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
