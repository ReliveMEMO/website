import Image from "next/image";
import Navbar from './components/Navbar';
import Hero from "./sections/hero";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
    </div>
  );
}
