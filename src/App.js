import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './AppPages/Home';
import About from './AppPages/About';
import Contact from './AppPages/Contact';
import Forms from './AppPages/Forms';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/forms" element={<Forms />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
