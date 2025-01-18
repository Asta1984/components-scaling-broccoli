import './App.css';
import { Footerdemo } from './components/ui/footer-section';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
       <>
        <Router>
      {/* Your app components */}
          <Footerdemo />
        </Router>
       </>
  )
}

export default App
