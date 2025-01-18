import React from "react";
import InputField from "./InputField";

const Nominee = ({ nominee, index, handleChange }) => (
  <div className="border-t border-gray-300 pt-4">
    <h3 className="text-md font-bold text-blue-500">Nominee {index + 1}</h3>
    <InputField
      label="Nominee Name"
      type="text"
      name="name"
      value={nominee.name}
      onChange={(e) => handleChange(e, index)}
      placeholder="Enter nominee name"
    />
    <InputField
      label="Nominee Address"
      type="text"
      name="address"
      value={nominee.address}
      onChange={(e) => handleChange(e, index)}
      placeholder="Enter nominee address"
    />
    <InputField
      label="Nominee Phone Number"
      type="text"
      name="phoneNumber"
      value={nominee.phoneNumber}
      onChange={(e) => handleChange(e, index)}
      placeholder="Enter nominee phone number"
    />
    <InputField
      label="Nominee Whatsapp Number"
      type="text"
      name="whatsappNumber"
      value={nominee.whatsappNumber}
      onChange={(e) => handleChange(e, index)}
      placeholder="Enter nominee Whatsapp number"
    />
    <InputField
      label="Nominee Account Number"
      type="text"
      name="accountNumber"
      value={nominee.accountNumber}
      onChange={(e) => handleChange(e, index)}
      placeholder="Enter nominee account number"
    />
    <InputField
      label="Nominee IFSC Code"
      type="text"
      name="ifscCode"
      value={nominee.ifscCode}
      onChange={(e) => handleChange(e, index)}
      placeholder="Enter nominee IFSC code"
    />
    <InputField
      label="Percentage Share"
      type="number"
      name="percentageShare"
      value={nominee.percentageShare}
      onChange={(e) => handleChange(e, index)}
      placeholder="Enter percentage share"
    />
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">Upload Nominee Document</label>
      <input
        type="file"
        name="document"
        onChange={(e) => handleChange(e, index)}
        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      />
    </div>
  </div>
);

export default Nominee;
