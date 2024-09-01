'use client';

import { ContextData } from '@/store';
import Link from 'next/link';
import { useContext, useEffect, useRef, useState } from 'react';

export default function Header() {
  const { toggleMenu, isMenuOpen } = useContext(ContextData);
  const [headerScroll, setHeaderScroll] = useState(false);

  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const position = window.scrollY;
        setHeaderScroll(position > 50);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className='mobil-all'>
        <header className='mobil'>
          <nav className={`mobil-navbar ${headerScroll ? 'navbar-bg' : ''}`}>
            <div className='menu-toggle' onClick={toggleMenu}>
              <div className='menu-icon'>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
              </div>
            </div>
            <a href='#' className='helloworld'>
              ANASAYFA
            </a>
          </nav>
        </header>
        <div className={`menu ${isMenuOpen ? 'block' : 'none'}`}>
          <ul className='mobil-navbar-list'>
            <li>
              <a href='#hakkimda' style={{ '--i': 1 }} onClick={toggleMenu}>
                Hakkımda
              </a>
            </li>
            <li>
              <a
                href='#ogrendiklerim'
                style={{ '--i': 2 }}
                onClick={toggleMenu}
              >
                Öğrendiklerim
              </a>
            </li>
            <li>
              <a href='#projelerim' style={{ '--i': 3 }} onClick={toggleMenu}>
                Projelerim
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className=''>
        <div className='parallax-container'>
          <div className='container'>
            <header className='desktop'>
              <nav
                className={`navbar ${headerScroll ? 'navbar-bg' : ''}`}
                ref={headerRef}
              >
                <Link href='/' className='helloworld'>
                  ANASAYFA
                </Link>
                <ul>
                  <li>
                    <Link href='#hakkimda' style={{ '--i': 1 }}>
                      Hakkımda
                    </Link>
                  </li>
                  <li>
                    <Link href='#ogrendiklerim' style={{ '--i': 2 }}>
                      Öğrendiklerim
                    </Link>
                  </li>
                  <li>
                    <Link href='#projelerim' style={{ '--i': 3 }}>
                      Projelerim
                    </Link>
                  </li>
                </ul>
              </nav>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
}
