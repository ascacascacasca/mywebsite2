import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';

export default function Home() {
  console.log("Home page rendered");
  
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
