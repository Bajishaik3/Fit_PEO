import React, { useState } from 'react';
import { Heart, Calendar, Clock, User, MessageCircle, HelpCircle, Settings,Activity,LayoutDashboard} from 'lucide-react';


const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon:LayoutDashboard },
    { id: 'history', label: 'History', icon: Clock },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'appointments', label: 'Appointments', icon: User },
    { id: 'statistics', label: 'Statistics', icon: Activity },
  ];

  const toolItems = [
    { id: 'chat', label: 'Chat', icon: MessageCircle },
    { id: 'support', label: 'Support', icon: HelpCircle },
    { id: 'settings', label: 'Setting', icon: Settings },
  ];

  return (
    <div className="w-64 bg-white h-full p-6 border-r overflow-y-scroll min-h-full border-gray-200">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">
          <span className="text-cyan-400">Health</span>
          <span className="text-gray-800">care.</span>
        </h1>
      </div>

      <div className="mb-8">
        <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-4">General</h3>
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon size={20} />
                <span className=' hidden lg:block'>{item.label}</span>
              </button>
            )
          })}
        </nav>
      </div>

      <div>
        <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-4">Tools</h3>
        <nav className="space-y-2">
          {toolItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>
      </div>
    </div>
  )
};
export default Sidebar
