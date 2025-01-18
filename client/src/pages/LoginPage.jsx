import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const InputField = ({ id, label, type, placeholder, required }) => (
  <div className="mb-5">
    <label
      htmlFor={id}
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {label}
    </label>
    <input
      type={type}
      id={id}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={placeholder}
      required={required}
    />
  </div>
);

const LoginForm = () => (
  <form className="max-w-sm mx-auto">
    <InputField
      id="email"
      label="Your email"
      type="email"
      placeholder="name@flowbite.com"
      required
    />
    <InputField
      id="password"
      label="Your password"
      type="password"
      required
    />
    <div className="flex items-start mb-5">
      <div className="flex items-center h-5">
        <input
          id="remember"
          type="checkbox"
          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
          required
        />
      </div>
      <label
        htmlFor="remember"
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Remember me
      </label>
    </div>
    <button
      type="submit"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Submit
    </button>
  </form>
);

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <div className="container px-4 py-16 mx-auto h-screen">
        <LoginForm />
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
