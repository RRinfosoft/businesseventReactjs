import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home';
import Footer from './components/Footer/Footer';
import { Routes,Route } from 'react-router-dom';
import About from './components/Pages/About/About';
import Events from './components/Pages/Events/Events';
import Contact from './components/Pages/Contact/Contact';

function App() {
  return (
    <>
<Header />

<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/events" element={<Events />} />
<Route path="/contact" element={<Contact />} />

</Routes>
<Footer />

    </>
  );
}

export default App;
