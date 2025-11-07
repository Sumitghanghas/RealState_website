import React from 'react';
import Logo from '../assets/gallery/logo/logo_4.png';

const statsRow1 = [
  { value: '30,000+', label: 'Happy Customers' },
  { value: '55 Million', label: 'sq.ft. Area Sold' },
  { value: '600+', label: 'Skilled Professionals' },
  { value: '1200+', label: 'Channel Partners' },
];

const statsRow2 = [
  { value: '32,750+', label: 'Transactions' },
  { value: '27,500 CR', label: 'Loan Disbursed' },
  { value: '1 Lakh CR+', label: 'Worth Property Sold' },
  { value: '150+', label: 'Projects Onboard' },
];

const StatStrip = ({ data }) => (
  <div className="bg-gray-900 rounded-xl p-4 py-14 px-8 flex flex-wrap justify-between items-center gap-6 shadow-md">
    {data.map((item, index) => (
      <div
        key={index}
        className="text-center transform transition duration-300 hover:-translate-y-1"
      >
        <p className="text-xl font-bold text-white">{item.value}</p>
        <p className="text-sm text-gray-400">{item.label}</p>
      </div>
    ))}
  </div>
);


function NumberSpeak() {
  return (
    <section className="bg-gray-800 text-white px-10 py-20 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Title and Logo */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-white">
            <span className="border-b-4 border-cyan-700 pb-1">Number</span>Speak
          </h2>
          <img
            src={Logo}
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Stat Rows */}
        <StatStrip data={statsRow1} />
        <StatStrip data={statsRow2} />
      </div>
    </section>

  )
}

export default NumberSpeak