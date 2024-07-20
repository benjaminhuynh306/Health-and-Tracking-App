import React from 'react'; // Import React library
import { Link } from 'react-router-dom'; // Import Link component from React Router

// Navigation component
function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/activity-tracker">Activity Tracker</Link></li>
        <li><Link to="/health-metrics">Health Metrics</Link></li>
        <li><Link to="/goals">Goals</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
