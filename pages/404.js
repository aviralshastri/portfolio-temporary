// pages/404.js
import React from 'react';
import Page from '@/components/page';

const NotFound = () => {
  return (
    <Page>
      <div>
        <h1 className='text-dark'>404 - Not Found</h1>
        <p>Sorry, the page you're looking for does not exist.</p>
      </div>
    </Page>
  );
};

export default NotFound;
