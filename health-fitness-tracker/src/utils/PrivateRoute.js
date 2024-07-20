import React from 'react'; // Import React library
import { Route, Navigate } from 'react-router-dom'; // Import necessary components from react-router-dom

// PrivateRoute component for protecting routes
const PrivateRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = true; // Replace this with your actual authentication logic

  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? (
          Component
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
