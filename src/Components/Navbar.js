// src/Components/Navbar.js
// import {React,useNavigate} from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    const navigate=useNavigate()
    function redirect(value){
        navigate(value)
    }
  return (
    <nav className="navbar">
      <div className="logo" onClick={()=>redirect("/")}>STE TSC TEEL SARL</div>
      <ul className="navbar-menu">
        <li onClick={()=>redirect("/home")}>Home</li>
        <li onClick={()=>redirect("/about")}>About</li>
        <li onClick={()=>redirect("/business")}>Business</li>
        <li onClick={()=>redirect("/products")}>Products</li>
        <li onClick={()=>redirect("/process-lines")}>Process Lines</li>
        <li onClick={()=>redirect("/industries")}>Industries</li>
        <li onClick={()=>redirect("/sustainability")}>Sustainability</li>
        <li onClick={()=>redirect("/media")}>Media</li>
        <li onClick={()=>redirect("/careers")}>Careers</li>
        <li onClick={()=>redirect("/contact")}>Contact With Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
