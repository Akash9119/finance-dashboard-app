import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SignUpForm from "../components/SignUpForm";

const SignUpPage = () => {
  return (
    <>
      <Navbar />
      <div className="container px-4 py-16 mx-auto h-screen">
        <SignUpForm />
      </div>
      <Footer />
    </>
  );
};

export default SignUpPage;
