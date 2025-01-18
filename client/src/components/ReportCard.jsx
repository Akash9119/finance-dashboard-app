import React from 'react';

const ReportCard = ({ title, value }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
      <h2 className="text-xl font-bold text-blue-700">{title}</h2>
      <p className="text-3xl text-blue-900">{value}</p>
    </div>
  );
};

export default ReportCard;
