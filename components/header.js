import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg flex">
      <div className="container mx-auto flex items-center justify-between p-4">
        <button
          className="lg:hidden text-gray-800 focus:outline-none transition-transform duration-300 ease-in-out transform"
          onClick={toggleMenu}
        >
          <svg
            className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          <svg
            className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <nav
          className={`lg:flex lg:items-center ${
            isMenuOpen
              ? 'fixed top-0 right-0 h-screen w-64 bg-white z-50 overflow-y-auto transition-transform duration-300 ease-in-out transform'
              : 'hidden'
          }`}
        >
          <div className="lg:flex items-center">
            <Link href={'/'} passHref>
              <div
                className={`font-bold nav-item text-gray-800 cursor-pointer py-2 px-4 hover:bg-gray-200 ${
                  router.pathname === '/' ? 'active' : ''
                }`}
                onClick={() => {
                  toggleMenu();
                  if (router.pathname === '/') {
                    closeMenu();
                  }
                }}
              >
                HOME
              </div>
            </Link>
            <Link href={'/about'} passHref>
              <div
                className={`font-bold nav-item text-gray-800 cursor-pointer py-2 px-4 hover:bg-gray-200 ${
                  router.pathname === '/about' ? 'active' : ''
                }`}
                onClick={() => {
                  toggleMenu();
                  if (router.pathname === '/about') {
                    closeMenu();
                  }
                }}
              >
                ABOUT
              </div>
            </Link>
            <Link href={'/work'} passHref>
              <div
                className={`font-bold nav-item text-gray-800 cursor-pointer py-2 px-4 hover:bg-gray-200 ${
                  router.pathname === '/work' ? 'active' : ''
                }`}
                onClick={() => {
                  toggleMenu();
                  if (router.pathname === '/work') {
                    closeMenu();
                  }
                }}
              >
                WORK
              </div>
            </Link>
            <Link href={'/contact'} passHref>
              <div
                className={`font-bold nav-item text-gray-800 cursor-pointer py-2 px-4 hover:bg-gray-200 ${
                  router.pathname === '/contact' ? 'active' : ''
                }`}
                onClick={() => {
                  toggleMenu();
                  if (router.pathname === '/contact') {
                    closeMenu();
                  }
                }}
              >
                CONTACT
              </div>
            </Link>
          </div>
        </nav>

        <div className="lg:flex-shrink-0">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
        </div>
      </div>
    </header>
  );
};

export default Header;
