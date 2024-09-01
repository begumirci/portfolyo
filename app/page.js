'use client';

import Header from '@/components/header';
import Hero from '@/components/hero';

import AboutMe from '@/components/about';
import LearnSide from '@/components/learnSide';
import Projects from '@/components/projects';
import { useEffect, useState } from 'react';
import Loading from '@/components/loading';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 400);

    setIsLoading(false);
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
  }, []);

  function handleClickTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <>
      {isLoading ? (
        <>
          {' '}
          {isVisible ? (
            <button className='up' onClick={handleClickTop}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='56'
                height='56'
                viewBox='0 0 24 24'
                fill='none'
                stroke='var(--light)'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
                class='feather feather-arrow-up-circle'
              >
                <circle cx='12' cy='12' r='10'></circle>
                <polyline points='16 12 12 8 8 12'></polyline>
                <line x1='12' y1='16' x2='12' y2='8'></line>
              </svg>
            </button>
          ) : (
            ''
          )}
          <Header />
          <Hero />
          <AboutMe />
          <LearnSide />
          <Projects />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
