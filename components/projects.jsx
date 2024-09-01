'use client';

import data from '@/data.json';
import Link from 'next/link';

export default function Projects() {
  console.log(data);
  return (
    <div className='parallax2-div' id='projelerim'>
      <div className='portfolio'>
        <div className='container'>
          <div className='etiket'>
            <h5>Projelerim</h5>
          </div>
          <div className='cards'>
            {data.map((x) => (
              <div className='work' key={x.id}>
                <img src={x.mainImg} alt='' />
                <Link href={`${x.id}`} className='layer'>
                  <h3>{x.title.toUpperCase()}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
