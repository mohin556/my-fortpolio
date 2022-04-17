import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Details from './Components/Details/Details';
import Servicess from './Components/Servicess/Servicess';
import Works from './Components/Works/Works';
import Projects from './Components/Projects/Projects';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
  
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicess" element={<Servicess />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/testimonials" element={<Testimonial />} />
     
    </Routes>
  </BrowserRouter>,
   {/* <Works /> */}
 
    </div>
  );
}

export default App;
