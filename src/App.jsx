import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import LoginForm from "./components/LoginForm";
import { About, Contact, Hero, Navbar, Works, StarsCanvas } from "./components";
import LoginPage from "./product1";
import ProductPage from "./pages/Product.jsx";
import CareerPage from "./pages/Career.jsx";
import CareerDetails from "./pages/CareerDetails.jsx";
import "./index.css";
import Defxv from "./components/Defxv";
import Footer from "./components/Footer";
import TextToSpeech from "./components/TextToSpeech.jsx";
import Ms from "./components/Ms.jsx";
import UserDetails from "./components/UserDetail.jsx";
import Access from "./components/Access.jsx";
import Naccess from "./components/Naccess.jsx";
import Allrequest from "./components/Allrequest.jsx"


function App() {
	const user = localStorage.getItem("token");

	return (
    <BrowserRouter>
		<Routes>
		<Route path="/" element={<MainLayout />} />
        <Route path="/products" element={<ProductPage />} />
		<Route path="/admin/all-request" element={<Allrequest />} />
        {!user && <Route path="/careers" element={<CareerPage />} />}
        {user && <Route path="/careers/:item" element={<CareerDetails />} />}
        {user&&<Route path="/details" exact element={<UserDetails />} />}
        {user && <Route path="/access" element={<Access />} />}
        {user && <Route path="/naccess" element={<Naccess />} />}

			{user && <Route path="/page" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<LoginForm />} />
			<Route path="/page" element={<Navigate replace to="/login" />} />
			<Route path="/details" element={<Navigate replace to="/login" />} />


		</Routes>
    </BrowserRouter>
	);
}
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