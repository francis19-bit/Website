import { Route, Routes } from "react-router-dom";
import AboutUs from "./Screens/AboutUs";
import OurApproach from "./Screens/OurApproach";
import Services from "./Screens/Services";
import Portfolio from "./Screens/Portfolio";
import ContactToes from "./Screens/ContactToes";
import Omer from "./Screens/Omer";
import Gizem from "./Screens/Gizem";
import Bur from "./Screens/Bur";
import People from "./Screens/People";

function App() {
  
  return (
    <>
       <Routes>
       <Route path="/AboutUs" element={<AboutUs />} />
       <Route path="/ourapproach" element={<OurApproach />} />
       <Route path="/Services" element={<Services />} />
       <Route path="/portfolio" element={<Portfolio />} />
       <Route path="/ContactToes" element={<ContactToes />} />
       <Route path="/People" element={<People />} />
       <Route path="/ÖMER" element={<Omer />} />
       <Route path="/GİZEM" element={<Gizem />} />
       <Route path="/BURHAN" element={<Bur />} />
       </Routes>
    </>
  )
}


export default App
