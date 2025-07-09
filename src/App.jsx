import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './router';  // assuming the filename is router.jsx

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
