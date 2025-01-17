import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import dummyData from '../assets/DummyData.json';

const ReportsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dummyData);
  }, []);

  const totalRegistries = data.length;
  const investmentThisMonth = data.filter(item => new Date(item.investment_date).getMonth() === new Date().getMonth()).reduce((sum, item) => sum + item.invested_amount, 0);
  const totalAmountInvested = data.reduce((sum, item) => sum + item.invested_amount, 0);

  return (
    <div className="flex">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-4/5 p-4">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">Reports</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
            <h2 className="text-xl font-bold text-blue-700">Total Registries</h2>
            <p className="text-3xl text-blue-900">{totalRegistries}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
            <h2 className="text-xl font-bold text-blue-700">Investment This Month</h2>
            <p className="text-3xl text-blue-900">${investmentThisMonth.toFixed(2)}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
            <h2 className="text-xl font-bold text-blue-700">Total Amount Invested</h2>
            <p className="text-3xl text-blue-900">${totalAmountInvested.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;