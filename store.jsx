'use client';

import { createContext, useState, useRef, useEffect } from 'react';

export const ContextData = createContext();

export default function Provider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [text, setText] = useState('');
  const [screenHeight, setScreenHeight] = useState(0);
  const textRef = useRef('Front-end Developer');

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  }

  function closeMenu() {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  }

  useEffect(() => {
    setScreenHeight(window.innerHeight);

    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let index = 0;
    let isAdding = true;
    const textChange = () => {
      setText((prev) => {
        if (isAdding) {
          const newText = textRef.current.substring(0, index + 1);
          index++;
          if (index === textRef.current.length) isAdding = false;
          return newText;
        } else {
          const newText = textRef.current.substring(0, index - 1);
          index--;
          if (index === 0) isAdding = true;
          return newText;
        }
      });
    };

    const intervalId = setInterval(textChange, 100);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const etiketElements = document.querySelectorAll('.etiket');
        const images = document.querySelectorAll('.links img');
        const textChange = document.querySelector('.text-change');
        const hakkimda = document.querySelector('.about-me');
        const works = document.querySelectorAll('.work');

        etiketElements.forEach((etiket) => {
          const etiketPosition = etiket.getBoundingClientRect();
          if (etiketPosition.top < screenHeight && etiketPosition.bottom > 0) {
            etiket.classList.add('part2');
          } else {
            etiket.classList.remove('part2');
          }
        });

        images.forEach((img) => {
          const imgPosition = img.getBoundingClientRect();
          if (imgPosition.top < screenHeight && imgPosition.bottom > 0) {
            img.classList.add('active');
          } else {
            img.classList.remove('active');
          }
        });

        works.forEach((work) => {
          const workPosition = work.getBoundingClientRect();
          if (workPosition.top < screenHeight && workPosition.bottom > 0) {
            work.classList.add('show');
          } else {
            work.classList.remove('show');
          }
        });

        if (textChange) {
          const changePosition = textChange.getBoundingClientRect();
          if (changePosition.top < screenHeight && changePosition.bottom > 0) {
            textChange.classList.add('part1');
          } else {
            textChange.classList.remove('part1');
          }
        }

        if (hakkimda) {
          const contentPosition = hakkimda.getBoundingClientRect();
          if (
            contentPosition.top < screenHeight &&
            contentPosition.bottom > 0
          ) {
            hakkimda.classList.add('show');
          } else {
            hakkimda.classList.remove('show');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [screenHeight]);

  return (
    <ContextData.Provider
      value={{
        text,
        toggleMenu,
        closeMenu,
        isMenuOpen,
        setIsMenuOpen,
      }}
    >
      {children}
    </ContextData.Provider>
  );
}
