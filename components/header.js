
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.Module.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      closeMenu();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={`bg-white shadow-lg sticky top-0 ${isMenuOpen ? 'z-50' : ''}`}>
      <div className="container mx-auto flex items-center justify-between px-2 ">
        <button
          className="lg:hidden text-gray-800 focus:outline-none transition-transform duration-300 ease-in-out transform"
          onClick={toggleMenu}
        >
          <div className={styles.container}>
            <div className={`hamburger-container ${isMenuOpen ? 'change' : ''}`}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </button>

        <nav
          className={`lg:flex lg:items-center ${
            isMenuOpen
              ? 'fixed top-0 right-0 h-screen w-64 bg-white z-50 overflow-y-auto transition-transform duration-300 ease-in-out transform translate-x-0'
              : 'hidden lg:block'
          }`}
        >
          <div className="lg:flex items-center">
            <Link href={'#'} passHref>
              <div
                onClick={closeMenu}
                className={'font-bold nav-item text-gray-800 cursor-pointer py-1 px-4 '}
              >
                HOME
              </div>
            </Link>
            <Link href={'#about'} passHref>
              <div
                onClick={closeMenu}
                className={'font-bold nav-item text-gray-800 cursor-pointer py-1 px-4 '}
              >
                ABOUT
              </div>
            </Link>
            <Link href={'#work'} passHref>
              <div
                onClick={closeMenu}
                className={'font-bold nav-item text-gray-800 cursor-pointer py-1 px-4 '}
              >
                WORK
              </div>
            </Link>
            <Link href={'#contact'} passHref>
              <div
                onClick={closeMenu}
                className={'font-bold nav-item text-gray-800 cursor-pointer py-1 px-4 '}
              >
                CONTACT
              </div>
            </Link>
          </div>
        </nav>

        <div className="lg:flex-shrink-0">
          <Image src="/logo.png" alt="Logo" width={70} height={70} className='logo' />
        </div>
      </div>
    </header>
  );
};

export default Header;
