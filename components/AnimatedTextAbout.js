import React from 'react'
import {animate, motion} from 'framer-motion'
import Typewriter from 'typewriter-effect';

const AnimatedTextAbout = ({text,className}) => {

  const words = text.toString().split(" ");
const scentence={
  initial:{
    opacity:0,
  },
  animate:{
    opacity:1,
    transition:{
      delay:0.5
    }
  }
}

const word={
  initial:{
    opacity:0,
    y:50
  },
  animate:{
    opacity:1,
    y:0,
    transition:{
      delay:1
    }
  }
}

  return (
    <div className='w-full mx-auto py-2 flex items-center self-center justify-between  text-center overflow-hidden '>
    <motion.h1 className={`inline-block w-full text-dark text-2xl ${className}`}
      variants={scentence}
      initial='initial'
      animate='animate'
      >
      <div className='font-bold about text-4xl mb-8'><h1>About Me</h1></div>
      
      {
        words.map((word,index)=>
        <motion.span key={word+'-'+index} className='inline-block mb-2 homeText text-balance' variants={word} initial='initial' animate='animate'>
          {word}&nbsp;</motion.span>)}
    </motion.h1>
    
    </div>
  )
}

export default AnimatedTextAbout