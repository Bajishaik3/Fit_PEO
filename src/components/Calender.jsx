import React from "react";
import { ChevronLeft,ChevronRight } from "lucide-react";

const Calendar = ({ Appointments = [], AppCard }) => {
  const calendarData = [
    { day: "Mon", date: 25, slots: ["10:00", "11:00", "12:00"] },
    { day: "Tues", date: 26, slots: ["08:00", "09:00", "10:00"], selected: true },
    { day: "Wed", date: 27, slots: ["12:00", "-", "13:00"] },
    { day: "Thurs", date: 28, slots: ["10:00", "11:00", "-"] },
    { day: "Fri", date: 29, slots: ["-", "14:00", "16:00"] },
    { day: "Sat", date: 30, slots: ["12:00", "14:00", "15:00"] },
    { day: "Sun", date: 31, slots: ["09:00", "10:00", "11:00"], faded: true },
  ];

  return (
    <div>
      
      <div className="p-6 bg-white rounded-xl shadow-md w-full max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-700">October 2021</h2>
          <div className="flex gap-2">
            <button className="text-gray-500 hover:text-gray-700"><ChevronLeft/></button>
            <button className="text-gray-500 hover:text-gray-700"><ChevronRight/></button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-4 text-center">
          {calendarData.map(({ day, date, slots, selected, faded }, i) => (
            <div
              key={i}
              className={`rounded-lg p-1 ${selected ? "bg-indigo-50" : ""}`}
            >
              <div
                className={`text-sm font-medium ${
                  faded ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {day}
              </div>
              <div
                className={`text-lg font-semibold ${
                  faded ? "text-gray-300" : "text-gray-800"
                }`}
              >
                {date}
              </div>
              <div className="mt-2 space-y-2">
                {slots.map((slot, idx) => (
                  <div
                    key={idx}
                    className={`text-xs px-1 py-1 rounded-2xl ${
                      slot === "-"
                        ? "text-gray-300"
                        : selected && idx === 1
                        ? "bg-indigo-600 text-white"
                        : "bg-indigo-100 text-indigo-600"
                    }`}
                  >
                    {slot !== "-" ? slot : "—"}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4 p-4">
        
 <div className="row-span-2 row-start-4"><div className="mt-6 space-y-4">
        <div className="bg-blue-800 text-white p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Dentist</h4>
              <p className="text-sm opacity-90">09:00-11:00</p>
              <p className="text-sm opacity-90">Dr Cameron Williamson</p>
            </div>
            <div className="text-2xl">🦷</div>
          </div>
        </div>

        <div className="bg-neutral-400 text-black p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Physiotherapy Appointment</h4>
              <p className="text-sm opacity-90">11:00-12:00</p>
              <p className="text-sm opacity-90">Dr Kevin Djosas</p>
            </div>
            <div className="text-2xl">🏃</div>
          </div>
        </div>
      </div>
    </div>
</div>
    
        
              
        
        
      </div>
  
  );
};

export default Calendar
