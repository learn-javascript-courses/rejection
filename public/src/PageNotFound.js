import React from 'react';
import { Link } from 'react-router'

const PageNotFound = ({error = '404! - Page not found.'}) => (
  <div>
  <h2>{error}</h2>
  <Link to="/">Back to Home</Link>
  </div>
);

export default PageNotFound;
