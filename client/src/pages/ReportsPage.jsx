import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import dummyData from '../assets/DummyData.json';
import ReportCard from '../components/ReportCard';

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
          <ReportCard title="Total Registries" value={totalRegistries} />
          <ReportCard title="Investment This Month" value={`$${investmentThisMonth.toFixed(2)}`} />
          <ReportCard title="Total Amount Invested" value={`$${totalAmountInvested.toFixed(2)}`} />
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;