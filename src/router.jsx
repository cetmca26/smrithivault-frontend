import { Routes, Route } from 'react-router-dom';
import Landing from './pages/landing/landing';
import NotFound from './pages/notfound/Notfound';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      {/* Add more routes as needed */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
