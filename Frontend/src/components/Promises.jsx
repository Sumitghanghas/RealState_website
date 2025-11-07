import React from 'react'

function Promises() {
  const promises = [
    'Transparent Pricing',
    'Verified Listings',
    '24/7 Support',
    'Smart Recommendations',
  ];

  return (
    <section className="px-50 py-20 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold text-center mb-20 text-white underline">Our Promises</h2>
      
      
      <div className="relative flex items-center">
        {/* Horizontal Line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-cyan-500 transform -translate-y-1/2"></div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 flex-1 relative z-10">
          {promises.map((text, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg flex items-start gap-4 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="border-2 bg-cyan-700 px-4 py-2 text-xl text-white font-bold">
                {index + 1}
              </div>
              <p className="text-cyan-700">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default Promises