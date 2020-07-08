import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-banner">
      <h1>Page Not Found... 404</h1>
      <Link to="/">Return to the site</Link>
    </div>
  );
};

export default NotFound;
