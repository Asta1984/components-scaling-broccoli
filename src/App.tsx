//import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { MacbookScroll } from './components/ui/macbook-scroll';
import { Footerdemo } from './components/ui/footer-section';
import { AnimatedText } from './components/AnimatedText';

function App() {
  return (
       <>
        <Router>        
          <AnimatedText text="Sewantika" />
          <Footerdemo/>
        </Router>
       </>
  )
}

export default App
