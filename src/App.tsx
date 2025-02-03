import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from './components/Landing';
import { ThemeToggle } from './components/ui/theme-toggle';

function App() {
  return (
       <>
        <Router>
          <div className='flex justify-center'>
            <ThemeToggle />
          </div>
          <Landing />
        </Router>
       </>
  )
}

export default App
