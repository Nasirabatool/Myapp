import React from "react";

function Feedback() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-10"> 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
        <div>
          <h2 className="text-3xl font-semibold text-black drop-shadow-lg mb-4">
            Feedback About Their <br/> Experience With Us
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Read testimonials from our satisfied clients. See how our cleaning
            services have made a difference in their lives and homes.
          </p>
          <div className="flex gap-3">
            <button className="w-12 h-12 rounded-lg border border-[#36B864] flex items-center justify-center hover:bg-green-50 transition">
              <span className="text-[#36B864] text-2xl">&#8592;</span>
            </button>
            <button className="w-12 h-12 rounded-lg bg-[#36B864] flex items-center justify-center hover:bg-green-600 transition">
              <span className="text-white text-2xl">&#8594;</span>
            </button>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl border border-gray-200 p-6 flex gap-5 items-start max-w-lg"
             style={{
               borderTopRightRadius: '1rem',
               borderBottomRightRadius: '1rem',
               borderRight: '6px solid #22c55e'
             }}>
          <img
            src="src/assets/Feedback.png"
            alt="Client"
            className="w-50 h-65 object-cover rounded-lg border border-gray-200"
          />
          <div className="flex-1">
            <h4 className="font-semibold text-gray-900 text-lg">Robert Fox</h4>
            <p className="text-sm text-gray-500 mb-1">Business Man</p>
            <div className="flex items-center gap-1 mb-3">
              {Array(5).fill(0).map((_, i) => (
                <span key={i} className="text-yellow-400">&#9733;</span>
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Excellent service! The team was punctual, thorough, and left my
              home sparkling clean. Highly recommend for anyone needing a
              reliable and detailed cleaning service.
            </p>
          </div>
          <div>
            <div className="bg-[#36B864] rounded-lg p-3">
              <span className="text-white text-3xl leading-none">&quot;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;

