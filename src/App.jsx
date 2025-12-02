import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Departments from './pages/Departments.jsx';
import Services from './pages/Services.jsx';
import Doctors from './pages/Doctors.jsx';
import Appointment from './pages/Appointment.jsx';
import Gallery from './pages/Gallery.jsx';
import Testimonials from './pages/Testimonials.jsx';
import Faq from './pages/Faq.jsx';
import Policies from './pages/Policies.jsx';
import Contact from './pages/Contact.jsx';
import Auth from './pages/Auth.jsx';
import Facilities from './pages/Facilities.jsx';

const App = () => (
  <div className="min-h-screen bg-slate-50 text-slate-900">
    <ScrollToTop />
    <Navbar />
    <main className="pt-20 pb-16">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
    <Footer />
  </div>
);

export default App;

