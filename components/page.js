import Footer from "./Footer";
import Header from "./header";
import { easeIn, easeInOut, easeOut, motion } from 'framer-motion';
export default function Page({ children }) {

    return (
        <div>
            <Header />
            <motion.main initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: easeInOut, delay: 0.2 }}>
                {children}
                <Footer />
            </motion.main>
        </div>
    )
}