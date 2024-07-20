import React from 'react'; // Import React library
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components from react-router-dom
import './App.css'; // Import CSS for the App component
import Login from './components/Login'; // Import the Login component
import Dashboard from './components/Dashboard'; // Import the Dashboard component
import ActivityTracker from './components/ActivityTracker'; // Import the Activity Tracker component
import HealthMetrics from './components/HealthMetrics'; // Import the Health Metrics component
import Goals from './components/Goals'; // Import the Goals component
import Navigation from './components/Navigation'; // Import the Navigation component

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Health and Fitness Tracker</h1>
        </header>
        <Navigation /> {/* Include the navigation component */}
        <Routes>
          {/* Define routes for different pages/components */}
          <Route path="/login" element={<Login />} /> {/* Route for the Login page */}
          <Route path="/" element={<Dashboard />} /> {/* Route for the Dashboard page */}
          <Route path="/activity-tracker" element={<ActivityTracker />} /> {/* Route for the Activity Tracker page */}
          <Route path="/health-metrics" element={<HealthMetrics />} /> {/* Route for the Health Metrics page */}
          <Route path="/goals" element={<Goals />} /> {/* Route for the Goals page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
