import { useState } from 'react';
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

  if (showKnowMyHealthVision) {
    return (
      <div className="min-h-screen">
        <Header onBackToMain={() => setShowKnowMyHealthVision(false)} />
        <KnowMyHealthVision />
        <Footer />
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
