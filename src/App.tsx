import './App.css'
import SigninButton from './components/Signin'
import SignupButton from './components/Signup'
import { BackgroundGradient } from './components/ui/background-gradient'
function App() {


  return (
    <>
    <BackgroundGradient>
    <SignupButton/>
    <SigninButton/>
    </BackgroundGradient>
    </>
  )
}

export default App
