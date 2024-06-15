import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Hero, Navbar, Works, StarsCanvas } from "./components";
import LoginPage from "./product1";
import ProductPage from "./pages/Product.jsx";
import CareerPage from "./pages/Career.jsx";
import "./index.css";
import Defxv from "./components/Defxv";
import Footer from "./components/Footer";
import TextToSpeech from "./components/TextToSpeech.jsx";
import Ms from "./components/Ms.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/careers" element={<CareerPage />} />
      </Routes>
    </BrowserRouter>
  );
};

const MainLayout = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-white bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Hero />
      </div>
      <Defxv />
      <Works />

      <About />
      <Ms/>
      <Contact />
      <Footer />
      <TextToSpeech />
    </div>
  );
};

export default App;
