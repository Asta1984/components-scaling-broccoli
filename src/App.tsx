//import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import { Footerdemo } from './components/ui/footer-section';

function App() {
  return (
       <>
        <Router>
          <Navbar />
          <Landing />
          <Footerdemo />
        </Router>
       </>
  )
}

export default App
