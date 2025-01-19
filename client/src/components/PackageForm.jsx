import React from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import FormField from './FormField';

const PackageForm = ({ formData, handleChange, handleSubmit }) => {
  const navigate = useNavigate(); // Updated hook

  const onSubmit = (e) => {
    handleSubmit(e);
    navigate('/success'); // Updated redirect
  };

  return (
    <form onSubmit={onSubmit} className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
      <FormField
        label="Package Name"
        type="text"
        name="package_name"
        value={formData.package_name}
        handleChange={handleChange}
      />
      <FormField
        label="Package Details"
        type="textarea"
        name="package_details"
        value={formData.package_details}
        handleChange={handleChange}
      />
      <FormField
        label="Investment Duration"
        type="text"
        name="investment_duration"
        value={formData.investment_duration}
        handleChange={handleChange}
      />
      <FormField
        label="Investment Amount"
        type="text"
        name="investment_amount"
        value={formData.investment_amount}
        handleChange={handleChange}
      />
      <FormField
        label="Package Type"
        type="text"
        name="package_type"
        value={formData.package_type}
        handleChange={handleChange}
      />
      <FormField
        label="Package Category"
        type="text"
        name="package_category"
        value={formData.package_category}
        handleChange={handleChange}
      />
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
  );
};

export default PackageForm;
