import { ProfileCard } from './components/profile_card'
import { Appointment_Calendar } from './components/appointment_calender'
import Appointment_accordian from './components/appointment_sec'


export default function App() {

  return (
    <>
    <div className='md:p-12 md:overflow-hidden'>
      <div className='border rounded-3xl border-primary border-r-8'>
          <h1 className='font-OnlinePrivileges p-10 text-4xl'>Welcome, Sienna</h1>
        <div className='grid md:grid-cols-2 '>
        <div className="min-h-screen flex p-4 ">
          <ProfileCard
            firstName="Sienna"
            lastName="Hewitt"
            email="siennahewitt@gmail.com"
            location ="United States"
            dateofbirth='23-09-2001'
          />
        </div>
        <div className=' md:-mt-12 md:-mx-16 '>
          <Appointment_Calendar/>
        </div>
      </div>
     </div>
    </div>
    <div className=' p-10'>
    <div className='border rounded-3xl border-primary border-t-8'>
      <h3 className='text-3xl mt-10 font-OnlinePrivileges flex justify-center p-4'>Todays' Appointments</h3>
      <Appointment_accordian/>
    </div>
    </div>
    </>
  )
}

