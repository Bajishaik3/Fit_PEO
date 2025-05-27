import Calender from "../components/Calender";

const mockData = {
  user: {
    name: 'Baji shaik',
    avatar: '🧑',
  },
  
  
  organs: [
    { name: 'Lungs', icon: "🫁", status: 'Alert', date: '26 Okt 2021', progress: 30 },
    { name: 'Teeth', icon: "🦷", status: 'Healthy', date: '26 Okt 2021', progress: 90 },
    { name: 'Bone', icon: "🦴", status: 'Alert', date: '26 Okt 2021', progress: 25 },
  ],
  schedule: {
    upcoming: [
      { title: 'Health checkup complete', time: '11:00 AM', day: 'Thursday' },
      { title: 'Ophthalmologist', time: '14:00 PM', day: 'Thursday' },
      { title: 'Cardiologist', time: '12:00 AM', day: 'Saturday', icon: "❤️" },
      { title: 'Neurologist', time: '16:00 PM', day: 'Saturday', icon: "🧠" },
    ],
  },
  
  
 
  
};

export default mockData;
