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

function App() {
  return (
    <div className="App">
   <Navbar />
   <Details />
   < Servicess />
   {/* <Works /> */}
   <Projects />
   <Testimonial />
   {/* <Contact/>
   <Footer /> */}
    </div>
  );
}

export default App;
