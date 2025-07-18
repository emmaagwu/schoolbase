'use client';

import Navigation from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
// import Gallery from './components/Gallery';
// import Testimonials from './components/Testimonials';
// import Announcements from './components/Announcements';
// import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 scroll-smooth">
      <Navigation />
      <Hero />
      <About />
      <Programs />
      {/* <Gallery />
      <Testimonials />
      <Announcements />
      <Contact />  */}
    </main>
  );
}
