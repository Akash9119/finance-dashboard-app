import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import ContactInfo from "./ContactInfo";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Logo />
          <ContactInfo />
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <NavLinks />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
