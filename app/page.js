import Header from '@/components/header';
import Hero from '@/components/hero';

import AboutMe from '@/components/about';
import LearnSide from '@/components/learnSide';
import Projects from '@/components/projects';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <LearnSide />
      <Projects />
    </>
  );
}
