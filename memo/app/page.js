import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Features from './sections/Features';
import Founders from './sections/Founders';
import Hero from './sections/Hero';
import Waitlist from './sections/Waitlist';
import WhatIs from './sections/WhatIs';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <section id='Hero'><Hero/></section>
      <section id='what'><WhatIs/></section>
      <section id='features'><Features/></section>
      <section id='founders'><Founders/></section>
      <section id='waitlist'><Waitlist/></section>
      <Footer/>
    </div>
  );
}
