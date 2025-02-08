//import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { MacbookScroll } from './components/ui/macbook-scroll';
import { Footerdemo } from './components/ui/footer-section';


function App() {
  return (
       <>
        <Router>        
          <MacbookScroll />
          <Footerdemo/>
        </Router>
       </>
  )
}

export default App
