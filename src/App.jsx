
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './router';  // assuming the filename is router.jsx
import { Loader } from './pages/loading/Loader';
import './index.css'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (e.g. API call or startup process)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : <>
    <Router>
      <AppRoutes />
    </Router>
    <div className="min-h-screen bg-white dark:bg-gray-900">

    </div>
    </>;
}

export default App;