import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Dashboard from "./pages/DashboardPage";
import NotFound from "./pages/NotFound";
import ReportsPage from "./pages/ReportsPage";
import EmployeePage from "./pages/EmployeePage";
import PackagesPage from "./pages/PackagesPage";
// import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    // <AuthProvider>
      <Router>
        <main>
          <Routes>
            {/* Define your application routes here */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/employees" element={<EmployeePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/package" element={<PackagesPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    // </AuthProvider>
  );
};

export default App;
