'use client';

import data from '@/data.json';
import Link from 'next/link';

export default function Projects() {
  console.log(data);
  return (
    <div class='parallax2-div' id='projelerim'>
      <div class='portfolio'>
        <div class='container'>
          <div class='etiket'>
            <h5>Projelerim</h5>
          </div>
          <div class='cards'>
            {data.map((x) => (
              <div class='work' key={x.id}>
                <img src={x.mainImg} alt='' />
                <Link href={`${x.id}`} class='layer'>
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
