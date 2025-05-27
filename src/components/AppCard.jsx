import React from 'react'

function AppCard() {
    const Appointments=[{title:"Dentist",time:"09.00-11.00",Doctor:"Dr.Cameron Williamson",icon:"🦷"},
        {title:"Physiotherapy Appointment",time:'11.00-12.00',Doctor:"Dr.Kevin Djones",icon:"💪🏻"}
    ]
  return (
    <div>
       <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-2xl">{icon}</span>
      </div>
      <p className="mt-2 text-sm">{time}</p>
      <p className="text-xs mt-1">{doctor}</p>
      
      
    </div>
  )
}

export default AppCard
