// import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import HomeSection from './Components/HomeSection';
import MiddleSection from './Components/MiddleSection';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import VisionMission from './Components/VisionMission';
import OurManagement from './Components/OurManagement';
import QualityImprovement from './Components/QualityImprovement';
import LeadingEdge from './Components/LeadingEdge';
import OurProducts from './Components/OurProducts';
import ProductCards from './Components/ProductCards';
import BeninTechnology from './Components/BeninTechnology';
import HomeBanner from './Components/HomeBanner';
import CompanyOverview from './Components/CompanyOverview';
import LeaderSpeak from './Components/LeaderSpeak';
import BusinessPresence from './Components/BusinessPresence';

function Root(){
  return(
    <>
    <Navbar/>
    <Hero/>
    <MiddleSection/>
    <VisionMission/>
    <OurManagement/>
    <QualityImprovement/>
    <LeadingEdge/>
    <ProductCards/>
    <BeninTechnology/>
    <Footer/>
    </>
  )
}

function Home(){
  return(
    <>
    <Navbar/>
    <HomeBanner/>
    <CompanyOverview/>
    <VisionMission/>
    <LeaderSpeak/>
    <BusinessPresence/>
    {/* <HomeSection/> */}
    <Footer/>
    </>
  )
}

function App() {
  return (
   <div>
  <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<Root  />} />
          <Route path="/home" element={<Home />} />

               </Routes>
 
    </BrowserRouter>
    </div>
  );
}

export default App;
