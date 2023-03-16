import React from "react";
import {Routes, Route} from 'react-router-dom'
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Service from "./Components/Service";

const App = () => {


  return(
    <>
      <Navbar />
      <Routes>
       <Route path="/" element={<Home />} />
       <Route exact path="/contact" element={<Contact />} />
       <Route exact path="/service" element={ <Service />} />
      </Routes>
      
    </>
  )
}

export default App