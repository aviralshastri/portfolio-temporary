import React, { useEffect } from 'react';
import Page from '@/components/page';
import cookie from 'js-cookie';

export default function ClearCookies() {
  useEffect(() => {
    cookie.set('submissionCount', 0, { expires: 1 }); // Expires in 1 day
  }, []);

  return (
    <Page>
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-2xl font-bold mb-4">Cookies Cleared!</p>
        <p className="text-center">
          The submission counter has been reset to zero. Users can now submit the form up to 3 times again today.
        </p>
      </div>
    </Page>
  );
}
