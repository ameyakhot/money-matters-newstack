import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/money-matters-newstack/" element={<LandingPage />} />
      </Routes>   
    </Router>
  );
}

export default App;