import React, { useRef, useState } from "react";
import InputField from "../components/InputField";
import Nominee from "../components/Nominee";
import Sidebar from "../components/Sidebar";
import TermsAndConditions from "../components/TermsAndConditions";
import PrintableForm from "../components/PrintableForm"; // Import the new component

const CustomerRegistration = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    phoneNumber: "",
    email: "",
    whatsappNumber: "",
    address: "",
    aadharCard: "",
    panCard: "",
    bankAccount: "",
    bankAccountName: "",
    ifscCode: "",
    scheme: "",
    investmentAmount: "",
    paymentMethod: "",
    document: null,
    nominees: [
      {
        name: "",
        address: "",
        phoneNumber: "",
        whatsappNumber: "",
        accountNumber: "",
        ifscCode: "",
        document: null,
        percentageShare: "",
      },
      {
        name: "",
        address: "",
        phoneNumber: "",
        whatsappNumber: "",
        accountNumber: "",
        ifscCode: "",
        document: null,
        percentageShare: "",
      },
    ],
  });

  const [showNominee, setShowNominee] = useState(false);
  const [showSecondNominee, setShowSecondNominee] = useState(false);
  const [submittedData, setSubmittedData] = useState(null); // To store the submitted data
  const termsRef = useRef();

  // Handle input changes
  const handleChange = (e, index = null) => {
    const { name, value, files } = e.target;
    if (index !== null) {
      const updatedNominees = [...formData.nominees];
      updatedNominees[index][name] = files ? files[0] : value;
      setFormData({ ...formData, nominees: updatedNominees });
    } else {
      setFormData({ ...formData, [name]: files ? files[0] : value });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredData = {
      ...formData,
      nominees: formData.nominees.filter(nominee => Object.values(nominee).some(value => value))
    };
    setSubmittedData(filteredData); // Store the filtered data
    console.log("Submitted Data:", filteredData);
  };

  // Print form data and Terms & Conditions component
  const printForm = () => {
    const printWindow = window.open("", "", "width=800,height=600");
    printWindow.document.write("<html><head><title>Form Data</title>");
    printWindow.document.write("<style>");
    printWindow.document.write(`
      body { font-family: Arial, sans-serif; }
      .printable-form { margin: 20px; }
      .printable-form h3 { font-size: 1.5em; margin-bottom: 10px; }
      .printable-form .section { margin-bottom: 20px; }
      .printable-form .section h4 { font-size: 1.2em; margin-bottom: 10px; }
      .printable-form .section div { margin-bottom: 5px; }
      .printable-form .section div span { font-weight: bold; }
      table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
      table, th, td { border: 1px solid black; }
      th, td { padding: 8px; text-align: left; }
      th { background-color: #f2f2f2; }
    `);
    printWindow.document.write("</style>");
    printWindow.document.write("</head><body>");
    printWindow.document.write("<div id='printableForm'></div>");
    printWindow.document.write("</body></html>");
    printWindow.document.close();

    printWindow.onload = () => {
      const printableFormContainer = printWindow.document.getElementById('printableForm');
      const formContent = document.getElementById('printableFormContent').innerHTML;
      const filteredContent = formContent.replace(/<div class="section">.*?<div class="section">/gs, '');
      printableFormContainer.innerHTML = filteredContent;
      printWindow.print();
    };
  };

  return (
    <div className="flex">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-4/5 p-4">
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-bold text-blue-600 mb-6">
            Customer Registration
          </h2>
          {/* Wrapper for the printable content */}
          <div>
            <form onSubmit={handleSubmit}>
              <InputField
                label="Customer Name"
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                placeholder="Enter customer name"
              />
              <InputField
                label="Phone Number"
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
              <InputField
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
              <InputField
                label="Whatsapp Number"
                type="text"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
                placeholder="Enter Whatsapp number"
              />
              <InputField
                label="Address"
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
              />
              <InputField
                label="Aadhar Card Number"
                type="text"
                name="aadharCard"
                value={formData.aadharCard}
                onChange={handleChange}
                placeholder="Enter Aadhar card number"
              />
              <InputField
                label="PAN Card Number"
                type="text"
                name="panCard"
                value={formData.panCard}
                onChange={handleChange}
                placeholder="Enter PAN card number"
              />
              <InputField
                label="Bank Account Number"
                type="text"
                name="bankAccount"
                value={formData.bankAccount}
                onChange={handleChange}
                placeholder="Enter bank account number"
              />
              <InputField
                label="Name in Bank Account"
                type="text"
                name="bankAccountName"
                value={formData.bankAccountName}
                onChange={handleChange}
                placeholder="Enter name in bank account"
              />
              <InputField
                label="IFSC Code"
                type="text"
                name="ifscCode"
                value={formData.ifscCode}
                onChange={handleChange}
                placeholder="Enter IFSC code"
              />
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Scheme
                </label>
                <select
                  name="scheme"
                  value={formData.scheme}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="">Select Scheme</option>
                  <option value="Scheme 1">Scheme 1</option>
                  <option value="Scheme 2">Scheme 2</option>
                </select>
              </div>
              <InputField
                label="Investment Amount"
                type="number"
                name="investmentAmount"
                value={formData.investmentAmount}
                onChange={handleChange}
                placeholder="Enter investment amount"
              />
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Payment Method
                </label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option value="">Select Payment Method</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="Net Banking">Net Banking</option>
                  <option value="UPI">UPI</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Upload Document
                </label>
                <input
                  type="file"
                  name="document"
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Add Nominee
                </label>
                <input
                  type="checkbox"
                  name="addNominee"
                  checked={showNominee}
                  onChange={() => setShowNominee(!showNominee)}
                  className="mr-2 leading-tight"
                />
              </div>
              {showNominee && (
                <Nominee
                  nominee={formData.nominees[0]}
                  index={0}
                  handleChange={handleChange}
                />
              )}
              {showNominee && !showSecondNominee && (
                <button
                  type="button"
                  onClick={() => setShowSecondNominee(true)}
                  className="mt-4 mr-4 px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600"
                >
                  Add Nominee 2
                </button>
              )}
              {showSecondNominee && (
                <Nominee
                  nominee={formData.nominees[1]}
                  index={1}
                  handleChange={handleChange}
                />
              )}
              <button
                type="submit"
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600"
              >
                Register
              </button>
            </form>
          </div>
          {submittedData && (
            <div className="mt-6">
              <button
                onClick={printForm}
                className="mt-4 px-6 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600"
              >
                Print Form
              </button>
              <div id="printableFormContent" className="hidden">
                <div className="printable-form">
                  <PrintableForm data={submittedData} />
                  <div className="section">
                    <TermsAndConditions />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerRegistration;
