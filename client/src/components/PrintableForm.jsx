import React from "react";

const PrintableForm = ({ data }) => {
  return (
    <div className="printable-form mt-6">
      <h3 className="text-lg font-bold mb-4">Customer Registration Form Data</h3>
      <table className="w-full border-collapse border border-black">
        <tbody>
          <tr>
            <th className="w-1/3 border border-black p-2">Customer Name</th>
            <td className="w-2/3 border border-black p-2">{data.customerName}</td>
          </tr>
          <tr>
            <th className="w-1/3 border border-black p-2">Phone Number</th>
            <td className="w-2/3 border border-black p-2">{data.phoneNumber}</td>
          </tr>
          <tr>
            <th className="w-1/3 border border-black p-2">Email</th>
            <td className="w-2/3 border border-black p-2">{data.email}</td>
          </tr>
          <tr>
            <th className="w-1/3 border border-black p-2">Whatsapp Number</th>
            <td className="w-2/3 border border-black p-2">{data.whatsappNumber}</td>
          </tr>
          <tr>
            <th className="w-1/3 border border-black p-2">Address</th>
            <td className="w-2/3 border border-black p-2">{data.address}</td>
          </tr>
          <tr>
            <th className="w-1/3 border border-black p-2">Aadhar Card</th>
            <td className="w-2/3 border border-black p-2">{data.aadharCard}</td>
          </tr>
          <tr>
            <th className="w-1/3 border border-black p-2">PAN Card</th>
            <td className="w-2/3 border border-black p-2">{data.panCard}</td>
          </tr>
          <tr>
            <th className="w-1/3 border border-black p-2">Bank Account</th>
            <td className="w-2/3 border border-black p-2">{data.bankAccount}</td>
          </tr>
          <tr>
            <th className="w-1/3 border border-black p-2">Bank Account Name</th>
            <td className="w-2/3 border border-black p-2">{data.bankAccountName}</td>
          </tr>
          <tr>
            <th className="w-1/3 border border-black p-2">IFSC Code</th>
            <td className="w-2/3 border border-black p-2">{data.ifscCode}</td>
          </tr>
          <tr>
            <th className="w-1/3 border border-black p-2">Scheme</th>
            <td className="w-2/3 border border-black p-2">{data.scheme}</td>
          </tr>
          <tr>
            <th className="w-1/3 border border-black p-2">Investment Amount</th>
            <td className="w-2/3 border border-black p-2">{data.investmentAmount}</td>
          </tr>
          <tr>
            <th className="w-1/3 border border-black p-2">Payment Method</th>
            <td className="w-2/3 border border-black p-2">{data.paymentMethod}</td>
          </tr>
          <tr>
            <th className="w-1/3 border border-black p-2">Document</th>
            <td className="w-2/3 border border-black p-2">
              {data.document ? (
                <a
                  href={URL.createObjectURL(data.document)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Document
                </a>
              ) : (
                "No document uploaded"
              )}
            </td>
          </tr>
        </tbody>
      </table>

      {data.nominees && (
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-4">Nominee Details</h3>
          {data.nominees.map((nominee, index) => (
            <table key={index} className="w-full border-collapse border border-black mt-4">
              <tbody>
                <tr>
                  <th className="w-1/3 border border-black p-2">Nominee {index + 1} Name</th>
                  <td className="w-2/3 border border-black p-2">{nominee.name}</td>
                </tr>
                <tr>
                  <th className="w-1/3 border border-black p-2">Nominee {index + 1} Address</th>
                  <td className="w-2/3 border border-black p-2">{nominee.address}</td>
                </tr>
                <tr>
                  <th className="w-1/3 border border-black p-2">Nominee {index + 1} Phone Number</th>
                  <td className="w-2/3 border border-black p-2">{nominee.phoneNumber}</td>
                </tr>
                <tr>
                  <th className="w-1/3 border border-black p-2">Nominee {index + 1} Whatsapp Number</th>
                  <td className="w-2/3 border border-black p-2">{nominee.whatsappNumber}</td>
                </tr>
                <tr>
                  <th className="w-1/3 border border-black p-2">Nominee {index + 1} Account Number</th>
                  <td className="w-2/3 border border-black p-2">{nominee.accountNumber}</td>
                </tr>
                <tr>
                  <th className="w-1/3 border border-black p-2">Nominee {index + 1} IFSC Code</th>
                  <td className="w-2/3 border border-black p-2">{nominee.ifscCode}</td>
                </tr>
                <tr>
                  <th className="w-1/3 border border-black p-2">Nominee {index + 1} Percentage Share</th>
                  <td className="w-2/3 border border-black p-2">{nominee.percentageShare}</td>
                </tr>
                <tr>
                  <th className="w-1/3 border border-black p-2">Nominee {index + 1} Document</th>
                  <td className="w-2/3 border border-black p-2">{nominee.document ? "Uploaded" : "Not Uploaded"}</td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      )}
    </div>
  );
};

export default PrintableForm;
