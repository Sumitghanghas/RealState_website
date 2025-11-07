import React from 'react'

const logos = [
  './src/assets/gallery/devlopers/dlf.png', './src/assets/gallery/devlopers/m3m.webp', './src/assets/gallery/devlopers/wl.png', './src/assets/gallery/devlopers/elan.png', './src/assets/gallery/devlopers/emaar.png',
  '/vatika.jpg', '/smartworld.jpg', '/zak.jpg', '/omaxe.jpg', '/conscient.jpg',
  '/bptp.jpg', '/ireo.jpg', '/reach.jpg', '/signature.jpg', '/aipl.jpg',
  '/birla.jpg', '/centralpark.jpg', '/silverglades.jpg', '/suncity.jpg', '/paras.jpg',
];

function Developers() {
  return (
     <section className="px-6 py-16 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">A+ DEVELOPERS</h2>
        <p className="text-yellow-500 mb-10">Trusted Partners in Excellence</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 transform transition duration-300 hover:-translate-y-2"
            >
              <img
                src={logo}
                alt={`Developer ${index + 1}`}
                className="w-full h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default Developers