import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Details from './Components/Details/Details';
import Servicess from './Components/Servicess/Servicess';
import Works from './Components/Works/Works';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
   <Navbar />
   <Details />
   < Servicess />
   <Works />
   <Projects />
    </div>
  );
}

export default App;
