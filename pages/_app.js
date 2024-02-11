import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import './global.css';

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
      <div
        key={router.pathname}
      >
        <Component {...pageProps} />
      </div>
  );
};

export default App;
