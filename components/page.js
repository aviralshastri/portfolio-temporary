import Footer from "./Footer";
import Header from "./header";
import { easeInOut, motion } from 'framer-motion';
import ProgressBar from "./progressBar";
import ScrollToTopButton from "./ScrollToTopButton";
import Head from 'next/head';

export default function Page({ children }) {
    return (
        <>
            <Head>
                <title>Portfolio Aviral Shastri</title>
                <meta name="description" content="Welcome to the portfolio of Aviral Shastri. Discover projects, skills, and contact information." />
                <meta name="keywords" content="Aviral Shastri, Portfolio, Web Developer, Projects, Skills" />
                <meta name="author" content="Aviral Shastri" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Portfolio Aviral Shastri" />
                <meta property="og:description" content="Welcome to the portfolio of Aviral Shastri. Discover projects, skills, and contact information." />
                <meta property="og:url" content="https://aviral-shastri-portfolio.vercel.app/" />
                <meta property="og:image" content="https://aviral-shastri-portfolio.vercel.app/me.jpg" />
                <meta name="twitter:title" content="Portfolio Aviral Shastri" />
                <meta name="twitter:description" content="Welcome to the portfolio of Aviral Shastri. Discover projects, skills, and contact information." />
                <meta name="twitter:image" content="https://aviral-shastri-portfolio.vercel.app/me.jpg" />
            </Head>
            <Header />
            <motion.main 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: easeInOut, delay: 0.2 }}
            >
                {children}
            </motion.main>
            <Footer />
            <ScrollToTopButton />
        </>
    );
}
