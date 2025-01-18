import React, { useState } from "react";
import InputField from "../components/InputField";
import Sidebar from "../components/Sidebar";

const NomineeRegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    whatsappNumber: "",
    accountNumber: "",
    ifscCode: "",
    document: null,
    percentageShare: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-4/5 p-4">
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-bold text-blue-600 mb-6">Nominee Registration</h2>
          <form onSubmit={handleSubmit}>
            <InputField
              label="Nominee Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter nominee name"
            />
            <InputField
              label="Nominee Address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter nominee address"
            />
            <InputField
              label="Nominee Phone Number"
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter nominee phone number"
            />
            <InputField
              label="Nominee Whatsapp Number"
              type="text"
              name="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={handleChange}
              placeholder="Enter nominee Whatsapp number"
            />
            <InputField
              label="Nominee Account Number"
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              placeholder="Enter nominee account number"
            />
            <InputField
              label="Nominee IFSC Code"
              type="text"
              name="ifscCode"
              value={formData.ifscCode}
              onChange={handleChange}
              placeholder="Enter nominee IFSC code"
            />
            <InputField
              label="Percentage Share"
              type="number"
              name="percentageShare"
              value={formData.percentageShare}
              onChange={handleChange}
              placeholder="Enter percentage share"
            />
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Upload Document</label>
              <input
                type="file"
                name="document"
                onChange={handleChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NomineeRegistrationPage;