import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
      <Link href={'/'} 
      className='w-20 h-20 bg-dark text-light flex items-center justify-center rounded-full text-2xl logo_text'>AS</Link>
    </div>
  )
}

export default Logo