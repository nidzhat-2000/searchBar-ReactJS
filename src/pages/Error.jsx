import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error-page section">
      <div className="error-container">
        <h1>Oooops! It's a dead end</h1>
        <Link to="/" className="btn btn-primary">
          Back to Home..
        </Link>
      </div>
    </div>
  );
};

export default Error;
