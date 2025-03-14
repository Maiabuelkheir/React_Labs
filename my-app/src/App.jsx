import React from "react";
import './App.css'
import { Header } from './Header.jsx'
import { Name } from './Name.jsx'
import { About } from './About.jsx'
import { Portfolio } from "./Portfolio.jsx";
import Skills from "./Skills.jsx";
import { Footer } from "./footer.jsx";
import 'bootstrap-icons/font/bootstrap-icons.css';
// import { Profile } from "./profile.jsx";



function App() {

  return (
    <>
    
    <Header />
    <Name />
    <About/>
    < Skills/>
    <Portfolio/>
    < Footer />
    
    </>
  )
}

export default App
