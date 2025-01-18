import React from 'react';
import EmployeeTable from '../components/EmployeeTable';
import Sidebar from '../components/Sidebar';

const EmployeePage = () => {
  return (
    <div className="flex">
      <SidebarWrapper />
      <MainContent />
    </div>
  );
};

const SidebarWrapper = () => (
  <div className="w-1/5">
    <Sidebar />
  </div>
);

const MainContent = () => (
  <div className="w-4/5 p-4">
    <EmployeeTable />
  </div>
);

export default EmployeePage;