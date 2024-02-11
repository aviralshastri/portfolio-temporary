'use client'

import React from 'react'
import Styles from './ProgressBar.module.css'
import {motion,useScroll,useSpring} from 'framer-motion'

const ProgressBar=()=>{
    const {scrollYProgress}=useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
      });
    return(
        <motion.div className={Styles.progressbar}  style={{ scaleX:scaleX}} />
    )
}

export default ProgressBar;