
import { Heart } from 'lucide-react'; 

const Body = () => {
  

  return (
    <div className='flex flex-col'>


<div className="grid grid-cols-2 grid-rows-3 gap-3 ">
    
    <div className="row-span-3"><div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="relative">
          {/* 3D Human Body Model Placeholder */}
          <div className="w-64 h-96 mx-auto relative">
            <div className="w-full h-full bg-gradient-to-b from-orange-200 to-red-300 rounded-full relative overflow-hidden">
              {/* Body silhouette */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-80 bg-gradient-to-b from-red-400 to-red-600 rounded-full relative">
                  {/* Head */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-red-500 rounded-full"></div>
                  {/* Arms */}
                  <div className="absolute top-12 -left-8 w-6 h-24 bg-red-500 rounded-full transform -rotate-12"></div>
                  <div className="absolute top-12 -right-8 w-6 h-24 bg-red-500 rounded-full transform rotate-12"></div>
                  {/* Legs */}
                  <div className="absolute bottom-0 left-2 w-6 h-32 bg-red-500 rounded-full"></div>
                  <div className="absolute bottom-0 right-2 w-6 h-32 bg-red-500 rounded-full"></div>
                </div>
              </div>

              {/* Healthy Heart Badge */}
              <div className="absolute top-20 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                <Heart size={14} className="text-red-400" />
                <span>Healthy Heart</span>
              </div>
            </div>

            {/* Health Log Button */}
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-cyan-400 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Healthy Leg
            </button>
          </div>
        </div></div>
    <div className="row-span-3">
         

       
      </div>
    </div>
</div>

       
    
  );
</div>
)}
export default Body;