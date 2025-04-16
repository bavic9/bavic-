import { BrowserRouter, Route, Routes } from "react-router-dom";

import {
  About,
  Contact,
  // Experience,
  // Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
  // Home,
} from "./components";

const App = () => {
  return (
    // <BrowserRouter>
    //   <div className="relative z-0 bg-primary">
    //     <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
    //       <Navbar />
    //       <Hero />
    //     </div>
    //     <About />
    //     <Experience />
    //     <Tech />
    //     <Works />
    //     <Feedbacks />
    //     <div className="relative z-0">
    //       <Contact />
    //       <StarsCanvas />
    //     </div>
    //   </div>
    // </BrowserRouter>

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
