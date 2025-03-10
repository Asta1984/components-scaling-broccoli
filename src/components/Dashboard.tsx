import SigninButton from './Signin'
import { Appointment_Calendar } from '../components/appointment_calender'
import Appointment_accordian from '../components/appointment_sec'
import Searchbar from '../components/search_bar'
import CommonInfoCard from './common_profile_card'


export default function Dashboard() {
    return(
        <>
        <SigninButton/>
        <div className='md:p-12 md:overflow-hidden'>
            <div className='border rounded-3xl border-primary border-r-8'>
                <h1 className='font-OnlinePrivileges p-10 text-4xl'>Welcome, Sienna</h1>
                <div className='grid md:grid-cols-2 '>
                    <CommonInfoCard/>
                <div className=' md:-mt-12 md:-mx-16 '>
                    <Appointment_Calendar/>
                </div>
            </div>
            </div>
        </div>

    <div className=' p-10 '>
    <div className='border bg-gradient-to-br from-transparent via-zinc-200 to-transparent p-6 shadow-xl  rounded-3xl border-primary border-t-8'>
      <h3 className='text-3xl mt-10 font-OnlinePrivileges flex justify-center p-4'>Todays' Appointments</h3>
      <Appointment_accordian/>
    </div>
    </div>

    <div className='p-10 '>
    <div className='flex border bg-gradient-to-br from-transparent via-zinc-200 to-transparent p-6 shadow-xl md:justify-center rounded-3xl border-primary border-l-8'>
    <h3 className='text-2xl mt-5 p-2 font-OnlinePrivileges md:w-1/2'>Book Appointments</h3>
    <div className='border bg-gradient-to-br from-transparent via-zinc-200 to-transparent p-6 shadow-xl  rounded-3xl border-primary md:w-1/2 border-t-8'>
    <Searchbar/>
    </div>
    </div>
    </div>
        </>
    )
}