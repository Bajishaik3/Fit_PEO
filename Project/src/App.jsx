import { useState } from 'react'

 

import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Calender from './components/Calender'
import UserButton from './components/UserButton'
import Activity from './components/Activity'
import Body from './components/Body'
import BodyStats from './components/BodyStats'
import UpComingSchedule from './components/UpComingSchedule'

function App() {
  return(
    <div className='p-5 text-xs'>
      

<div className="lg:grid grid-cols-8 grid-rows-7 gap-4">
    <div className="row-span-7"><Sidebar/></div>
    <div className="col-span-4"><Header/></div>
    <div className="col-span-3 row-span-4 col-start-2 row-start-2"><Body/></div>
    <div className="row-span-4 col-start-5 row-start-2"><BodyStats/></div>
    <div className="col-span-4 row-span-2 col-start-2 row-start-6"><Activity/></div>
    <div className="col-span-3 row-span-4 col-start-6 row-start-2"><Calender/></div>
    <div className="col-span-3 col-start-6 row-start-1"><UserButton/></div>
    <div className="col-span-3 row-span-2 col-start-6 row-start-6"><UpComingSchedule/></div>
</div>
    
    




    
        
        

    
    </div>
  )
   
}

export default App
