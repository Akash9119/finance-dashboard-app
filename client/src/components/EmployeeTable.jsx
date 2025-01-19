import React, { useEffect, useState } from 'react';
import dummyEmployeeData from '../assets/DummyEmployeeData.json';
import Pagination from './Pagination';
import EmployeeTableRow from './EmployeeTableRow';

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
              <EmployeeTableRow key={index} item={item} />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        handlePageClick={handlePageClick}
      />
    </div>
  );
};

export default EmployeeTable;
