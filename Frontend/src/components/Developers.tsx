import React from 'react';

const logos: string[] = [
  '/src/assets/gallery/devlopers/dlf.png',
  '/src/assets/gallery/devlopers/m3m.webp',
  '/src/assets/gallery/devlopers/wl.png',
  '/src/assets/gallery/devlopers/elan.png',
  '/src/assets/gallery/devlopers/emaar.png',
  '/src/assets/gallery/devlopers/vatika.jpg',
  '/src/assets/gallery/devlopers/smartworld.jpg',
  '/src/assets/gallery/devlopers/zak.jpg',
  '/src/assets/gallery/devlopers/omaxe.jpg',
  '/src/assets/gallery/devlopers/conscient.jpg',
  '/src/assets/gallery/devlopers/bptp.jpg',
  '/src/assets/gallery/devlopers/ireo.jpg',
  '/src/assets/gallery/devlopers/reach.jpg',
  '/src/assets/gallery/devlopers/signature.jpg',
  '/src/assets/gallery/devlopers/aipl.jpg',
  '/src/assets/gallery/devlopers/birla.jpg',
  '/src/assets/gallery/devlopers/centralpark.jpg',
  '/src/assets/gallery/devlopers/silverglades.jpg',
  '/src/assets/gallery/devlopers/suncity.jpg',
  '/src/assets/gallery/devlopers/paras.jpg',
];

const Developers: React.FC = () => {
  return (
    <section id="developers" className="px-6 py-16 bg-gray-800 text-white">
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
  );
};

export default Developers;
