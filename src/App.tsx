import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ExpertiseBar from './components/ExpertiseBar';
import Services from './components/Services';
import CollaborativeNetwork from './components/CollaborativeNetwork';
import KnowMyHealth from './components/KnowMyHealth';
import KnowMyHealthVision from './components/KnowMyHealthVision';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showKnowMyHealthVision, setShowKnowMyHealthVision] = useState(false);
  const [pendingSection, setPendingSection] = useState<string | null>(null);

  const handleNavigateToSection = (section: string) => {
    setPendingSection(section);
    setShowKnowMyHealthVision(false);
  };

  const handleBackToMain = () => {
    setPendingSection(null);
    setShowKnowMyHealthVision(false);
  };

  // Handle scrolling to section after returning to main page
  useEffect(() => {
    if (!showKnowMyHealthVision && pendingSection) {
      setTimeout(() => {
        const element = document.querySelector(pendingSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setPendingSection(null);
      }, 100); // Small delay to ensure DOM is ready
    }
  }, [showKnowMyHealthVision, pendingSection]);

  if (showKnowMyHealthVision) {
    return (
      <div className="min-h-screen">
        <Header 
          onBackToMain={handleBackToMain}
          onNavigateToSection={handleNavigateToSection}
        />
        <KnowMyHealthVision />
        <Footer onNavigateToSection={handleNavigateToSection} />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E0E0E0' }}>
      <Header />
      <Hero />
      <ExpertiseBar />
      <Services />
      <CollaborativeNetwork />
      <KnowMyHealth onLearnMore={() => setShowKnowMyHealthVision(true)} />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
