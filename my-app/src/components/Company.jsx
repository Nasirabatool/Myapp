import React from "react";
import { Check } from "lucide-react"; 

const Company = () => {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-16 lg:px-30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
        <div className="relative flex items-center justify-center">
          <div className="rounded-2xl overflow-hidden shadow-md border-2 border-[#36B864] w-[320px]">
            <img
              src="src/assets/clean company1.png"
              alt="Cleaning Team"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-0 rounded-2xl overflow-hidden shadow-md border-2 border-white w-[180px]">
            <img
              src="src/assets/clean company2.png"
              alt="Cleaning in progress"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-black leading-snug">
            Welcome To Our <br /> Pro-cleaning Company!
          </h2>
          <p className="mt-4 text-gray-600 text-base leading-relaxed">
            We make your space shine! Professional and reliable cleaning service
            company providing top-notch solutions for homes and businesses.
            Satisfaction guaranteed!
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {[
              "Vetted professionals",
              "Affordable Prices",
              "Next day availability",
              "Best Quality",
              "Standard cleaning tasks",
              "Affordable Prices",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-md"
              >
                <div
                  className={`flex items-center justify-center w-6 h-6 rounded-full border 
                    ${
                      i < 6
                        ? "bg-[#36B864] border-[#36B864] text-white" 
                        : "bg-white border-[#36B864] text-[#36B864]" 
                    }`}
                >
                  <Check className="w-4 h-4" strokeWidth={3} />
                </div>
                <span className="text-sm text-gray-800">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 bg-[#36B864] text-white rounded-lg shadow-md hover:bg-green-700 transition">
              Book Now
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              Know More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
