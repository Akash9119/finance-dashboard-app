import React, { useEffect, useState } from 'react';
import dummyData from '../assets/DummyData.json';

const DashboardContent = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    setData(dummyData);
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedData = data.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Investment Dashboard</h1>
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
            {selectedData.map((item, index) => (
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
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(index + 1)}
            className={`px-4 py-2 mx-1 ${currentPage === index + 1 ? 'bg-blue-700' : 'bg-blue-500'} text-white rounded`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <DashboardContent />
    </div>
  );
};

export default Dashboard;