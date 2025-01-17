import React from 'react';
import EmployeeTable from '../components/EmployeeTable';
import Sidebar from '../components/Sidebar';

const EmployeePage = () => {
  return (
    <div className="flex">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-4/5 p-4">
        <EmployeeTable />
      </div>
    </div>
  );
};

export default EmployeePage;