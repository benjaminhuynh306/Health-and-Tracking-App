import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ActivityTracker from './components/ActivityTracker';
import HealthMetrics from './components/HealthMetrics';
import Goals from './components/Goals';
import Navigation from './components/Navigation';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Health and Fitness Tracker</h1>
        </header>
        <Navigation />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/activity-tracker" element={<ActivityTracker />} />
          <Route path="/health-metrics" element={<HealthMetrics />} />
          <Route path="/goals" element={<Goals />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
