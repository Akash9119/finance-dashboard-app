import React, { useEffect, useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Button, Typography, Container, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import packageData from "../assets/DummyPackageDetails.json"; // Import package data

const HomePage = () => {
  const navigate = useNavigate();
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    setPackages(packageData); // Set package data from JSON
  }, []);

  const handleRegister = () => {
    navigate("/register"); // Redirects to the registration page
  };

  return (
    <>
    <Navbar />
    <Container>
      {/* Header Section */}
      <Box textAlign="center" my={4}>
        <Typography variant="h3" gutterBottom>
          Welcome to FinancePro
        </Typography>
        <Typography variant="subtitle1">
          Manage your finances effortlessly with our powerful, user-friendly tools.
        </Typography>
      </Box>

      {/* Information Section */}
      <Box my={4}>
        <Typography variant="h5" gutterBottom>
          Why Choose FinancePro?
        </Typography>
        <Typography variant="body1" paragraph>
          FinancePro is your ultimate solution for managing personal and business finances. Track expenses, generate
          insightful reports, and make informed financial decisions with ease.
        </Typography>
      </Box>

      {/* Packages Section */}
      <Box my={4}>
        <Typography variant="h5" gutterBottom>
          Available Packages
        </Typography>
        {packages.map((pkg, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}-content`}>
              <Typography variant="h6">{pkg.package_name} - {pkg.package_type}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" paragraph>
                {pkg.package_details}
              </Typography>
              <Typography variant="subtitle2">Category: {pkg.package_category}</Typography>
              <Typography variant="subtitle2">Investment Duration: {pkg.investment_duration} years</Typography>
              <Typography variant="subtitle2">Investment Amount: {pkg.investment_amount}</Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={handleRegister}
                sx={{ marginTop: 2 }}
              >
                Register for {pkg.package_name} - {pkg.package_type}
              </Button>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
    <Footer />
    </>
  );
};

export default HomePage;
