import React, { useState } from 'react';
import PackageForm from '../components/PackageForm';
import Sidebar from '../components/Sidebar';

const PackagesPage = () => {
  const [formData, setFormData] = useState({
    package_name: '',
    package_details: '',
    investment_duration: '',
    investment_amount: '',
    package_type: '',
    package_category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/5">
        <Sidebar />
      </div>
      <div className="w-full md:w-4/5 p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Add New Package</h1>
        <PackageForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default PackagesPage;