import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='border-t-2 border-dark'>
            <Layout className='py-4 md:py-8  flex flex-col md:flex-row items-center justify-between'>
                <span className='mb-2 md:mb-0'>{new Date().getFullYear()} © All Rights Reserved</span>
                <span className='mb-2 md:mb-0'>Built By Aviral Shastri</span>
                <Link href="/contact" className='text-blue-500 sayhelloText'>Say Hello 👋!</Link>
            </Layout>
        </footer>
    )
}

export default Footer
