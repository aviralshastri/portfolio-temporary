'use client';

import React from 'react';
import Page from '@/components/page';
import '@/pages/global.css';

const ErrorPage = ({ statusCode }) => {
  return (
    <Page>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-2">{statusCode} - Error</h1>
        <p className="text-center">Something went wrong.</p>
      </div>
      
    </Page>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
