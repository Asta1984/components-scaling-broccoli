import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Card, CardTitle, CardDescription, CardContent } from './components/ui/card';

function App() {
  return (
       <>
        <Router>
          <Card>
            <CardTitle>The Puzzle</CardTitle>
            <CardDescription>
              The anceint eastern mindmaker.
            </CardDescription>
            <CardContent>
              <video src='./cube.mp4' width="200" height="200" controls>
              </video>
            </CardContent>
          </Card>
        </Router>
       </>
  )
}

export default App
