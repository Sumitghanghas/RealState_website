import { FunnelIcon } from '@heroicons/react/24/solid';
import React from 'react'
import { useState } from 'react';

function Hero() {
  const [showFilters, setShowFilters] = useState(false);
  const [status, setStatus] = useState([]);
  const [type, setType] = useState([]);

  const toggle = (group, value) => {
    const setter = group === 'status' ? setStatus : setType;
    const current = group === 'status' ? status : type;
    setter(current.includes(value)
      ? current.filter(v => v !== value)
      : [...current, value]);
  }
  const resetFilters = () => {
    setStatus([]);
    setType([]);
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src=".\src\assets\gallery\bg\bg.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Your Dream Home</h1>
        <p className="text-lg md:text-2xl mb-6">Explore futuristic living spaces tailored for you</p>

        <div className="flex justify-center mt-4 bg-white/20 backdrop-blur-md w-200 rounded-lg ">
          <div className="relative flex items-center w-200 max-w-4xl  p-2 rounded-lg border-white/40">           
          {/* All Locations Dropdown */}
            <select className="absolute left-4 px-2 py-1 bg-white text-black text-sm rounded-md outline-none cursor-pointer">
              <option value="">All Locations</option>
              <option value="new-york">Delhi</option>
              <option value="los-angeles">Gurgaon</option>
              <option value="chicago">Noida</option>
              <option value="chicago">Faridabad</option>
            </select>

            {/* Location Input */}
            <input
              type="text"
              placeholder="Enter location"
              className="flex-1 pl-40 pr-4 py-2 bg-transparent text-white placeholder-gray-300 border-none outline-none"
            />

            {/* Search Button */}
            <button className="absolute right-4 px-4 py-2 bg-cyan-700 text-white rounded-md hover:bg-cyan-600 cursor-pointer">
              Search
            </button>
          </div>
        </div>

          {/* Filter Panel */}
          <button
            onClick={() => {
              console.log('Toggle clicked');
              setShowFilters(!showFilters);
            }}
            className="px-6 py-1 bg-white text-cyan-700 rounded-md font-semibold mt-4 justify-center flex items-center gap-2 hover:bg-gray-200 transition cursor-pointer"
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
            </svg>
            Filters
          </button>

          {showFilters && (
            <div className=" mt-4 text-left text-white bg-white/20  backdrop-blur-md w-100 rounded-lg p-4 max-w-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <div>
                  <p className="font-medium mb-2">PROPERTY STATUS</p>
                  {['Ready to Move', 'Under Construction', 'New Launch'].map(option => (
                    <label key={option} className="flex items-center gap-2 mb-1">
                      <input
                        type="checkbox"
                        checked={status.includes(option)}
                        onChange={() => toggle('status', option)}
                        className="accent-white"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
                <div className="ml-10">
                  <p className="font-medium  mb-2">PROJECT TYPE</p>
                  {['Residential', 'Commercial', 'Industrial'].map(option => (
                    <label key={option} className="flex items-center gap-2 mb-1  hover:cursor-pointer">
                      <input
                        type="checkbox"
                        checked={type.includes(option)}
                        onChange={() => toggle('type', option)}
                        className="accent-white"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              {/* Buttons */}
              <div className="flex justify-between mt-4 ">
                <button onClick={resetFilters}
                  className="px-4 py-1 bg-white text-black rounded-md font-semibold flex items-center gap-2 hover:cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M12 4.5a7.5 7.5 0 1 0 7.5 7.5.75.75 0 0 1 1.5 0 9 9 0 1 1-9-9 .75.75 0 0 1 0 1.5Zm0 3a.75.75 0 0 1 .75.75v3.69l2.22 2.22a.75.75 0 0 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1-.22-.53V8.25A.75.75 0 0 1 12 7.5Z" clipRule="evenodd" />
                  </svg>
                  Reset
                </button>
                <button className="px-3 py-1 bg-cyan-700 text-white rounded-md font-semibold  hover:cursor-pointer hover:bg-cyan-600">
                  Search Properties
                </button>
              </div>
            </div>
          )}
        </div>
    </section>
  );

}

export default Hero