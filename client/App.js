import React from 'react';
import Footer from './components/Footer';

import Navbar from './components/Navbar';
import Routes from './Routes';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
