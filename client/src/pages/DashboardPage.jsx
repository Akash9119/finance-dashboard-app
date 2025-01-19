import React from 'react';
import Sidebar from '../components/Sidebar';
import DashboardContent from '../components/DashboardContent';

const DashboardPage = () => {
  return (
    <div className="flex">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-4/5 p-4">
        <DashboardContent />
      </div>
    </div>
  );
};

export default DashboardPage;
