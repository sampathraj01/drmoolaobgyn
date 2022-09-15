import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './AppPages/Home';
import About from './AppPages/About';
import Contact from './AppPages/Contact';
import Forms from './AppPages/Forms';
import Insurances from './AppPages/Insurances';
import Admin from './AppPages/Admin';
import Dashboard from './AppPages/Dashboard';
import Forms2 from './AppPages/Forms2';
import Hospitals from './AppPages/Hospitals';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Forms />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/insurances" element={<Insurances />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/hospitals" element={<Hospitals />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
