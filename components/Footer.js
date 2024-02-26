import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='border-t-2 border-dark bg-black'>
            <Layout className='py-4 md:py-8  flex flex-col md:flex-row items-center justify-between text-white'>
                <span className='mb-2 md:mb-0 text-white'>{new Date().getFullYear()} © All Rights Reserved</span>
                <span className='mb-2 md:mb-0 text-white'>Built By Aviral Shastri</span>
            </Layout>
        </footer>
    )
}

export default Footer
