import React from 'react';

const Table = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-blue-100">
          <tr>
            <th className="px-4 py-2 border-b text-center">Full Name</th>
            <th className="px-4 py-2 border-b border-l text-center">Invested Amount</th>
            <th className="px-4 py-2 border-b text-center">Investment Date</th>
            <th className="px-4 py-2 border-b text-center">Nominee</th>
            <th className="px-4 py-2 border-b text-center">Scheme Name</th>
            <th className="px-4 py-2 border-b text-center">Maturity Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-blue-50">
              <td className="px-4 py-2 border-b text-center">{item.full_name}</td>
              <td className="px-4 py-2 border-b border-l text-center">{item.invested_amount}</td>
              <td className="px-4 py-2 border-b text-center">{item.investment_date}</td>
              <td className="px-4 py-2 border-b text-center">{item.nominee}</td>
              <td className="px-4 py-2 border-b text-center">{item.scheme_name}</td>
              <td className="px-4 py-2 border-b text-center">{item.maturity_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
