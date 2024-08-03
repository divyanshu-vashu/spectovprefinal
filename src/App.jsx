import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import LoginForm from "./components/LoginForm";
import { About, Contact, Hero, Navbar, Works } from "./components";
import LoginPage from "./product1";
import ProductPage from "./pages/Product.jsx";
import CareerPage from "./pages/Career.jsx";
import CareerDetails from "./pages/CareerDetails.jsx";
import "./index.css";
import Defxv from "./components/Defxv";
import Footer from "./components/Footer";

import Ms from "./components/Ms.jsx";
import UserDetails from "./components/UserDetail.jsx";
import Access from "./components/Access.jsx";
import Naccess from "./components/Naccess.jsx";
// import Allrequest from "./components/Allrequest.jsx"
import ForgetPassword from "./components/ForgetPassword.jsx";
import Founder from "./components/Founder.jsx";
import CoursePage from "./pages/CoursePage.jsx";
// import AdminLogin from "./components/AdminLogin.jsx";
import Donations from "./components/Donations.jsx";


function App() {
	const user = localStorage.getItem("token");
	const admin = localStorage.getItem("AdminEmail");
	var temp=!import.meta.env.VITE_REACT_APP_VAR1;
	if (admin===import.meta.env.VITE_REACT_APP_EMAIL)
		{
			temp=import.meta.env.VITE_REACT_APP_VAR2;
		}
	return (
    <BrowserRouter>
		<Routes>
		<Route path="/" element={<MainLayout />} />
        <Route path="/products" element={<ProductPage />} />
		{/* <Route path="/admin-login" element={<AdminLogin />} /> */}

		{/* {temp && <Route path="/admin/all-request" element={<Allrequest />} />} */}

        <Route path="/careers" element={<CareerPage />} />
		<Route path="/forget-password" element={<ForgetPassword />} />
        {user && <Route path="/careers/:item" element={<CareerDetails />} />}
        {user&&<Route path="/details" exact element={<UserDetails />} />}
        {user && <Route path="/access" element={<Access />} />}
        {user && <Route path="/naccess" element={<Naccess />} />}
		{user && <Route path="/course" element={<CoursePage />} />}

			{user && <Route path="/page" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<LoginForm />} />
			<Route path="/page" element={<Navigate replace to="/login" />} />

			{/* <Route path="/admin/all-request" element={<Navigate replace to="/login" />} /> */}


			<Route path="/details" element={<Navigate replace to="/login" />} />
			<Route path="/course"  element={<Navigate replace to="/login" />}/>
			<Route path="/access"  element={<Navigate replace to="/login" />}/>
			<Route path="/naccess"  element={<Navigate replace to="/login" />}/>
			<Route path="/careers/:item"  element={<Navigate replace to="/login" />}/>
			<Route path="/donations" element={<div>Thank you for your donation!</div>} />




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
		<Founder />
		<Donations/>
		<Footer />
	
	  </div>
	);
  };
  
export default App;