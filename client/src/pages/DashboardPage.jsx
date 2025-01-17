import React from 'react';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard.jsx';

const DashboardPage = () => {
  return (
    <div className="flex">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-4/5 p-4">
        <Dashboard />
      </div>
    </div>
  );
};

export default DashboardPage;