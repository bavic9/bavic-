import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  About,
  Contact,
  Navbar,
  Works,
  Footer,
} from "./components";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <div className=''>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
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
