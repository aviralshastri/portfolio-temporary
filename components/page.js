import Footer from "./Footer";
import Header from "./header";
import { easeInOut, motion } from 'framer-motion';
import ProgressBar from "./progressBar";

export default function Page({ children }) {
    
    return (
        <>
            <Header />
            <ProgressBar/>
            <motion.main initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: easeInOut, delay: 0.2 }}>
                {children}
                <Footer />
            </motion.main>
        </>
    )
}