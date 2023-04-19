import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import About from './components/About';
import TermsOfUse from './components/TermsOfUse';
import PrivacyPolicy from './components/PrivacyPolicy';
import News from './components/News';
import Investors from './components/Investos';
import {ContactUs} from './components/Contact'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<div><Hero /><Reviews /></div>} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/news" element={<News />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
