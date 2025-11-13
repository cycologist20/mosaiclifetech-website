import Header from '../components/Header';
import HealthStoriesHero from '../components/HealthStoriesHero';
import HealthStoriesProblem from '../components/HealthStoriesProblem';
import HealthStoriesSolution from '../components/HealthStoriesSolution';
import HealthStoriesPillars from '../components/HealthStoriesPillars';
import HealthStoriesBetaForm from '../components/HealthStoriesBetaForm';
import HealthStoriesClosing from '../components/HealthStoriesClosing';
import Footer from '../components/Footer';

const HealthStoriesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HealthStoriesHero />
      <HealthStoriesProblem />
      <HealthStoriesSolution />
      <HealthStoriesPillars />
      <HealthStoriesBetaForm />
      <HealthStoriesClosing />
      <Footer />
    </div>
  );
};

export default HealthStoriesPage;
