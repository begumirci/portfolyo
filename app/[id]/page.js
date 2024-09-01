'use client';

import Header from '@/components/header';
import Loading from '@/components/loading';
import data from '@/data.json';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function ProjectDetail({ params }) {
  const [isLoading, setIsLoading] = useState(false);
  const detayPart = data.filter((x) => x.id == params.id);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 400);

    setIsLoading(false);
  }, []);

  if (!detayPart) {
    return notFound();
  }

  return (
    <>
      {isLoading ? (
        <div className='page-detail'>
          <Header />
          <div className='container'>
            <div className='explanation'>
              <div>
                <Link className='back-home image-container' href='/'>
                  <svg
                    className='icon'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='#ffffff'
                      d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z'
                    />
                  </svg>
                  Geri Dön
                </Link>

                <div className='all-explanation'>
                  <div className='explanation-text'>
                    <h1>{detayPart[0].title.toUpperCase()}</h1>
                    <div className='gradient-line'></div>
                    <div className='main-ss-container'>
                      <img
                        className='main-ss'
                        src={detayPart[0].mainImg}
                        alt=''
                      />
                    </div>

                    <p>{detayPart[0].description}</p>
                    <div className='gradient-line'></div>
                  </div>
                  <div className='property-btn'>
                    <ul className='project-property'>
                      <li>
                        <h5>Proje Bilgisi</h5>
                      </li>
                      {detayPart[0].projeInfo.map((y, index) => (
                        <li key={index}>
                          <img src='/images/tick.svg' alt='' />
                          <span>{y}</span>
                        </li>
                      ))}
                      {detayPart[0].figmaLink ? (
                        <li>
                          <img src='../images/tick.svg' alt='' />
                          <span>
                            Figma Tasarımının Entegrasyonu
                            <Link href={detayPart[0].figmaLink}>
                              (Figma Dosyası)
                            </Link>
                          </span>
                        </li>
                      ) : (
                        ''
                      )}
                    </ul>
                    <button className='btn' style={{ '--i': 4 }}>
                      <a href={detayPart[0].liveLink} target='_blank'>
                        <svg
                          className='eye'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 576 512'
                        >
                          <path
                            fill='#060918'
                            d='M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z'
                          />
                        </svg>
                        SİTEYİ GÖRÜNTÜLE
                      </a>
                    </button>
                    <button className='btn' style={{ '--i': 4 }}>
                      <a href={detayPart[0].githubLink} target='_blank'>
                        <svg
                          className='eye'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 576 512'
                        >
                          <path
                            fill='#060918'
                            d='M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z'
                          />
                        </svg>
                        GİTHUB
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='images'>
            <div className='container'>
              {detayPart[0].images.map((img, index) => (
                <img key={index} className='page-ss' src={img} alt='' />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
