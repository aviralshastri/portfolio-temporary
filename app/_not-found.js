'use client'
import React from 'react';
import Page from '@/components/page';
import Image from 'next/image';
import '@/pages/global.css';

export default function NotFound(){
  return ( 
    <Page>
      <div className="flex flex-col items-center justify-center h-screen">
        <Image src={'/404notfound.gif'} alt="404 Image" width={300} height={300} className="max-w-full h-auto" />
        <div className='mx-8 text-center'>
        <h1 className="text-4xl font-bold not-found"> Not Found</h1>
        <p className='text-right text-xs text-zinc-400'>Gif by 404 academy.</p>
        <p className="text-center text-2xl mt-8">Sorry, the page you're looking for does not exist.</p>
      </div>
      </div>
    </Page>
  )
}


