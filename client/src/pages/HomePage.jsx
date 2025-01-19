import React, { useEffect, useState } from "react";
import { Typography, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import packageData from "../assets/DummyPackageDetails.json";
import PackageList from "../components/PackageList";

const HomePage = () => {
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    setPackages(packageData);
  }, []);

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <>
      <Navbar />
      <Container>
        <Box textAlign="center" my={4}>
          <Typography variant="h3" gutterBottom>
            Welcome to FinancePro
          </Typography>
          <Typography variant="subtitle1">
            Manage your finances effortlessly with our powerful, user-friendly tools.
          </Typography>
        </Box>
        <Box my={4}>
          <Typography variant="h5" gutterBottom>
            Why Choose FinancePro?
          </Typography>
          <Typography variant="body1" paragraph>
            FinancePro is your ultimate solution for managing personal and business finances. Track expenses, generate
            insightful reports, and make informed financial decisions with ease.
          </Typography>
        </Box>
        <PackageList packages={packages} onRegister={handleRegister} />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
