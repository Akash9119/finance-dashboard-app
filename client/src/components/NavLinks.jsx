import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => (
  <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
    <li>
      <Link to="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">
        Home
      </Link>
    </li>
    <li>
      <Link to="/company" className="text-gray-900 dark:text-white hover:underline">
        Company
      </Link>
    </li>
    <li>
      <Link to="/team" className="text-gray-900 dark:text-white hover:underline">
        Team
      </Link>
    </li>
    <li>
      <Link to="/features" className="text-gray-900 dark:text-white hover:underline">
        Features
      </Link>
    </li>
  </ul>
);

export default NavLinks;
