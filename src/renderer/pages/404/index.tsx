// src/renderer/components/NotFound.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>404 - Not Found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <Link to={'/'}>
        back
      </Link>
  </div>
);

export default NotFound;
