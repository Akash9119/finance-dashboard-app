import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashboardContent from './DashboardContent';

const Dashboard = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={DashboardContent} />
      </Switch>
    </Router>
  );
};

export default Dashboard;