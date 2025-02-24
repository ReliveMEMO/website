import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import WhatIs from './sections/WhatIs';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <section id='Hero'><Hero/></section>
      <section id='what'><WhatIs/></section>
    </div>
  );
}
