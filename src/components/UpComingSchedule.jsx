
const UpComingSchedule = () => {
  const scheduleItems = [
    {
      day: 'Thursday',
      appointments: [
        {
          title: 'Health checkup complete',
          time: '11:00 AM',
          icon: '📋',
          color: 'bg-purple-100'
        },
        {
          title: 'Ophthalmologist',
          time: '14:00 PM',
          icon: '👁',
          color: 'bg-purple-100'
        }
      ]
    },
    {
      day: 'Saturday',
      appointments: [
        {
          title: 'Cardiologist',
          time: '12:00 AM',
          icon: '❤',
          color: 'bg-red-100'
        },
        {
          title: 'Neurologist',
          time: '16:00 PM',
          icon: '🧠',
          color: 'bg-purple-100'
        }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-6">The Upcoming Schedule</h3>

      {scheduleItems.map((daySchedule, dayIndex) => (
        <div key={dayIndex} className="mb-6 last:mb-0">
          <h4 className="text-md font-medium text-gray-700 mb-3">On {daySchedule.day}</h4>
          <div className="space-y-3">
            {daySchedule.appointments.map((appointment, index) => (
              <div key={index} className={`${appointment.color} p-3 rounded-lg flex items-center justify-between}`}>
                <div>
                  <h5 className="font-medium text-gray-800">{appointment.title}</h5>
                  <p className="text-sm text-gray-600">{appointment.time}</p>
                </div>
                <div className="text-xl">{appointment.icon}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default UpComingSchedule;