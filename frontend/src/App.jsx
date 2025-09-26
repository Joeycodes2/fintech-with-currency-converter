import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Security from './components/Security';
import CTA from './components/CTA';
import Footer from './components/Footer';
import GetStarted from './components/GetStarted';
import LoginPage from './components/LoginPage';
import Help from './components/Help';





// A new component to represent the Homepage layout
const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Features />
        <Security />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/features" element={<Features />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/help" element={<Help />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
