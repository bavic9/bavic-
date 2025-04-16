import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  About,
  Contact,
  Hero,
  Navbar,
  Works,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='min-h-screen flex flex-col justify-between'>
        <Navbar />
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Works />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
