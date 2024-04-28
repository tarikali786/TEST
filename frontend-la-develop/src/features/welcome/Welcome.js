import { useSelector,  } from "react-redux";
import {  Navigate } from "react-router-dom";
import "./Welcome.css";
import PrortFolio from "./sections/Portfolio/PortFolio";
import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import WhyUs from "./sections/WhyUs/WhyUs";
import Campaign from "./sections/Campaign/Campaign";
import Contact from "./sections/Contact/Contact";
import Footer from "./Footer/Footer";
import { Navbar } from "../../components/Guest/Navbar/Navbar";
import { selectAuthInfo } from "../auth/authSlice";

const Welcome = () => {
  const user = useSelector(selectAuthInfo);
  return (
    <div className="welcome-page">
      {user && <Navigate to="/dashboard" replace={true} />}
      <Navbar />
      <Home />
      <About />
      <div className="bg-shape1 bg-red opacity-50 bg-blur"></div>
      <WhyUs />
      <div className="bg-shape2 bg-blue opacity-50 bg-blur"></div>
      <PrortFolio />
      <Campaign />
      <Contact />
      <div className="bg-shape3 bg-orange opacity-50 bg-blur"></div>
      <Footer />
    </div>
  );
};

export default Welcome;
