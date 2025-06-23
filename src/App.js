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

function Root(){
  return(
    <>
    <Navbar/>
    <Hero/>
    <MiddleSection/>
    <VisionMission/>
    <OurManagement/>
    <Footer/>
    </>
  )
}

function Home(){
  return(
    <>
    <Navbar/>
    <Hero/>
    <HomeSection/>
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
