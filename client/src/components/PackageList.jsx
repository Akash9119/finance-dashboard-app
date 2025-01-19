import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Button, Typography, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const PackageList = ({ packages, onRegister }) => {
  return (
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
              onClick={onRegister}
              sx={{ marginTop: 2 }}
            >
              Register for {pkg.package_name} - {pkg.package_type}
            </Button>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default PackageList;
