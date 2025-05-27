
import{User,Plus} from 'lucide-react'
import React from 'react'

function UserButton() {
  return (
    <div>
      <div className="col-span-2">
        <div className="flex justify-end">
        <div className="grid gap-x-2 grid-cols-2">
            <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            <User/>
          </button>
            <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            <Plus size={20} />
          </button>
          
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default UserButton
