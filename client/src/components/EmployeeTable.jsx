import React, { useEffect, useState } from 'react';
import dummyEmployeeData from '../assets/DummyEmployeeData.json';

const EmployeeTable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    setData(dummyEmployeeData);
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
      <h1 className="text-2xl font-bold mb-4 text-center">Employee List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-blue-100">
            <tr>
              <th className="px-4 py-2 border-b text-center">User Name</th>
              <th className="px-4 py-2 border-b border-l text-center">Email Address</th>
              <th className="px-4 py-2 border-b text-center">Age</th>
              <th className="px-4 py-2 border-b text-center">Gender</th>
              <th className="px-4 py-2 border-b text-center">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {selectedData.map((item, index) => (
              <tr key={index} className="hover:bg-blue-50">
                <td className="px-4 py-2 border-b text-center">{item.user_name}</td>
                <td className="px-4 py-2 border-b border-l text-center">{item.email_address}</td>
                <td className="px-4 py-2 border-b text-center">{item.age}</td>
                <td className="px-4 py-2 border-b text-center">{item.gender}</td>
                <td className="px-4 py-2 border-b text-center">{item.phone_number}</td>
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

export default EmployeeTable;
