'use client';

import { ContextData } from '@/store';
import { useContext } from 'react';

export default function AboutMe() {
  const { text, theme } = useContext(ContextData);
  return (
    <div className='parallax2-div' id='hakkimda'>
      <div
        className={`parallax2 ${
          theme == 'light' ? 'parallax2-light' : 'parallax2-dark'
        }`}
      >
        <div className='about-div'>
          <div className='container'>
            <div className='about'>
              <div className='etiket'>
                <h5>HAKKIMDA</h5>
              </div>
              <h2 className='text-change'>
                <span id='text-change'>{text}</span>
              </h2>
              <p className='about-me'>
                Merhaba, ben Begüm. 17 Nisan 1999'da Çanakkale'de doğdum.
                İstanbul Üniversitesi Hukuk Fakültesi'nden mezun oldum. Hukuk
                alanında geçirdiğim zaman boyunca, gerçek tutkumun yazılım
                dünyasında olduğunu keşfettim. Bu nedenle Acun Medya Akademi'de
                frontend geliştirme alanında eğitim aldım. Şimdi yazılımın
                sonsuz olanaklarıyla kendimi ifade etme ve yeni projelere imza
                atma fırsatını heyecanla bekliyorum. Aynı zamanda Acunmedya
                Akademi'de aktif olarak frontend uzmanlık sınıfı için asistan
                eğitmenlik yapıyorum.
              </p>
            </div>
          </div>
          <img className='avatar' src='/images/pp.jpeg' alt='pp' />
        </div>
      </div>
    </div>
  );
}
