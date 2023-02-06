
import './App.css';
import { BrowserRouter as Router , Switch , Route ,Routes  } from 'react-router-dom';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import About from './Routes/About';
import Project from './Routes/Project';

function App() {
  return (
   <div>
       <Router>
       
     <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/project" element={<Project/>}/>
      
      </Routes>
    </Router>
  
  
  
   </div>
  );
}

export default App;
