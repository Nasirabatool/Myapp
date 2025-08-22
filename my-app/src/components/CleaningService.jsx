import React from 'react';

const CleaningService = () => {
  return (
    <div className="flex items-center justify-center h-98 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl p-6 bg-white rounded-lg">
        <div className="md:w-1/2 p-4">
          <p className="text-gray-500 text-sm mb-2">Affordable cleaning solutions</p>
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            High-Quality and Friendly<br/>Services at Fair Prices
          </h1>
          <p className="text-gray-600 mb-6">
            We provide comprehensive cleaning services tailored to your needs. From residential cleaning services...
          </p>
          <button className="bg-[#36B864] text-white px-4 py-2 rounded hover:bg-bg-[#36B864]">
            Get a quote
          </button>
        </div>
        <div className="md:w-1/2 relative flex justify-center p-4">
          <img
            src="src/assets/qualityimage 2.png"
            alt="Cleaning Person 2"
            className="rounded-lg w-85 h-auto"
          />
          <img
            src="src/assets/qualityimage 1.png"
            alt="Cleaning Person 1"
            className="absolute bottom-4 left-11 w-45 h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CleaningService;
