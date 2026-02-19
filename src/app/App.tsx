import { useEffect } from 'react';
import { Toaster } from 'sonner';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Impact } from './components/Impact';
import { Work } from './components/Work';
import { ProjectSpotlight } from './components/ProjectSpotlight';
import { Skills } from './components/Skills';
import { Process } from './components/Process';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] antialiased">
      {/* Toast notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            borderRadius: '16px',
          },
        }}
      />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        <Hero />
        <Impact />
        <Work />
        <ProjectSpotlight />
        <Skills />
        <Process />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
