
const Activity = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const chartData = [
    [20, 40, 30, 50, 45, 35, 25],
    [15, 35, 45, 40, 50, 30, 35],
    [25, 30, 35, 45, 40, 50, 30],
    [30, 45, 25, 35, 30, 45, 40]
  ];

  return (
    <div>
      <div className="bg-white rounded-xl p-10 shadow-sm">
        <div className="flex items-center justify-between  p-6">
          <h3 className="text-lg font-semibold">Activity</h3>
          <span className="text-sm text-gray-500">3 appointment on this week</span>
        </div>

        <div className="h-48 flex items-end space-x-2">
          {days.map((day, dayIndex) => (
            <div key={day} className="flex-1 flex flex-col items-center space-y-1">
              {chartData.map((series, seriesIndex) => (
                <div
                  key={seriesIndex}
                  className={`w-full rounded ${
                    seriesIndex === 0 ? 'bg-cyan-400' :
                    seriesIndex === 1 ? 'bg-blue-500' :
                    seriesIndex === 2 ? 'bg-purple-500' : 'bg-green-500'
                  }`}
                  style={{ height: `${series[dayIndex]}px` }}
                ></div>
              ))}
              <span className="text-xs text-gray-500 mt-2">{day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Activity;
