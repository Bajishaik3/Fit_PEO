import React from 'react'

function BodyStats() {
    const stats = [
    {
      organ: 'Lungs',
      icon: '🫁',
      date: 'Mon, 25 Oct 2021',
      progress: 75,
      color: 'bg-red-500'
    },
    {
      organ: 'Teeth',
      icon: '🦷',
      date: 'Mon, 25 Oct 2021',
      progress: 60,
      color: 'bg-green-500'
    },
    {
      organ: 'Bone',
      icon: '🦴',
      date: 'Drink: 2L Oct 2021',
      progress: 45,
      color: 'bg-orange-500'
    }
  ];
  return (
    <div>
        <div className="mt-6 space-y-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{stat.icon}</span>
                <div>
                  <h4 className="font-medium text-gray-800">{stat.organ}</h4>
                  <p className="text-sm text-gray-500">{stat.date}</p>
                </div>
              </div>
              <div className="w-24">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className={`h-2 ${stat.color} rounded-full`}
                    style={{ width: `${stat.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
         <div className="mt-6 text-center">
          <button className="text-blue-500 text-sm font-medium hover:underline">
            Details →
          </button>
        </div>
      
    </div>
  )
}

export default BodyStats
