import React from 'react';

const EmployeeTableRow = ({ item }) => {
  return (
    <tr className="hover:bg-blue-50">
      <td className="px-4 py-2 border-b text-center">{item.user_name}</td>
      <td className="px-4 py-2 border-b border-l text-center">{item.email_address}</td>
      <td className="px-4 py-2 border-b text-center">{item.age}</td>
      <td className="px-4 py-2 border-b text-center">{item.gender}</td>
      <td className="px-4 py-2 border-b text-center">{item.phone_number}</td>
    </tr>
  );
};

export default EmployeeTableRow;
