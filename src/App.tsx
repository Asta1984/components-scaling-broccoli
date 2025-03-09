import { ProfileCard } from './components/profile'

export default function App() {


  return (
    <>
        <div className="min-h-screen flex items-center justify-center p-4">
      <ProfileCard
        firstName="Sienna"
        lastName="Hewitt"
        email="siennahewitt@gmail.com"
        location ="United States"
        dateofbirth='23-09-2001'
      />
    </div>
    </>
  )
}

