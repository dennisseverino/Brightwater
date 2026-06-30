import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import PracticeAreas from './components/PracticeAreas';
import Approach from './components/Approach';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <PracticeAreas />
        <Approach />
        <Team />
        <Testimonials />
        <FAQ />
        <ConsultationForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
