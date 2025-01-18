import React from "react";
import { Link } from "react-router-dom";

const ContactInfo = () => (
  <div className="flex items-center space-x-6 rtl:space-x-reverse">
    <a href="tel:5541251234" className="text-sm text-gray-500 dark:text-white hover:underline">
      +91 999 1122 3344
    </a>
    <Link to="/login" className="text-sm text-blue-600 dark:text-blue-500 hover:underline">
      Login
    </Link>
  </div>
);

export default ContactInfo;
