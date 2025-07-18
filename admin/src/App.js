import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import MenuManager from './pages/MenuManager';
import Offers from './pages/Offers';
import Login from './pages/Login';
import BookedTable from './pages/BookedTable';

function AppWrapper() {
  const location = useLocation();


  const noSidebarRoutes = ['/', '/login'];

  const hideSidebar = noSidebarRoutes.includes(location.pathname);

  return (
    <div className="flex h-screen">
      {!hideSidebar && <Sidebar />}
      <div className="flex-1 bg-gray-100">
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/menu" element={<MenuManager />} />
            <Route path="/Booking" element={<BookedTable />} />

            <Route path="/offers" element={<Offers />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
