import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

function App() {
  return (
    <div className="min-h-screen bg-orange-50 flex flex-col font-hebrew">
      <Header />
      <main className="flex-grow pt-20">
        <Hero />
        <Services />
        <Gallery />
        <Reviews />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
