import React from 'react'
import {animate, motion} from 'framer-motion'
import Typewriter from 'typewriter-effect';

const TextAbout = ({text,className}) => {

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
    <div className='w-full mx-auto py-2 flex items-center self-center justify-between overflow-hidden '>
    <motion.h1 className={`inline-block w-full text-dark text-2xl`}
      variants={scentence}
      initial='initial'
      animate='animate'
      >
      <div className='font-bold about mb:text-center text-4xl mb-8 text-white'><h1>About Me</h1></div>

        <div className={`${className} inline-block mb-2 homeText`}>
        {text}</div>
    </motion.h1>
    
    </div>
  )
}

export default TextAbout