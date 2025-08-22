import React, { useState } from "react";

const Pricing = () => {
  const [billing, setBilling] = useState("Monthly");

  const plans = [
    {
      title: "BASIC PACKAGE",
      price: billing === "Monthly" ? "59.00" : "590.00",
      features: [
        "Dusting of all surfaces",
        "Sweeping and mopping floors",
        "Vacuuming carpets and rugs",
        "Cleaning of kitchen surfaces",
        "Cleaning of bathroom surfaces",
        "Emptying trash bins",
      ],
    },
    {
      title: "ENTERPRISE PACKAGE",
      price: billing === "Monthly" ? "69.00" : "690.00",
      features: [
        "All services in the Basic Plan",
        "Detailed dusting",
        "Wiping down kitchen appliances",
        "Cleaning inside the microwave",
        "Changing bed linens",
        "Spot cleaning walls and doors",
      ],
    },
    {
      title: "PREMIUM PACKAGE",
      price: billing === "Monthly" ? "99.00" : "990.00",
      features: [
        "All services in the Clean Plan",
        "Deep cleaning of kitchen appliances",
        "Baseboards, door frames, & vents",
        "Organization of closets and pantries",
        "Carpet, upholstery spot cleaning",
        "Detailed bathroom cleaning",
      ],
    },
  ];

  return (
    <section className="w-full h-250 mx-auto relative">
      <div
        className="w-full h-100 bg-cover bg-center flex flex-col items-center justify-top text-white"
        style={{
          backgroundImage: 'url("src/assets/gggg.png")',
        }}
      >
        <div className="w-full py-10 px-6 md:px-16 lg:px-24 opacity-80">
          <div className="text-center">
            <p className="tracking-wide text-sm">Our Pricing</p>
            <h2 className="text-3xl md:text-4xl mt-2">
              Choose From Our Lowest <br /> Plans and Prices
            </h2>
            <div className="mt-6 inline-flex bg-white rounded-full p-1">
              {["Monthly", "Yearly"].map((type) => (
                <button
                  key={type}
                  onClick={() => setBilling(type)}
                  className={`px-6 py-2 rounded-full font-medium transition ${
                    billing === type
                      ? "bg-[#36B864] text-white"
                      : "text-black hover:bg-gray-200"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* White Background Part */}
      <div className="w-full h-90 bg-white flex justify-center items-center ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-8 flex flex-col justify-center transition-transform 
              duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-lg font-semibold text-gray-700 uppercase text-center">
                {plan.title}
              </h3>

              <div className="text-center my-6 bg-[#36B864] text-white p-4 rounded">
                <span className="text-3xl font-semibold">${plan.price}</span>
                <span className="text-gray-200 text-sm">/{billing}</span>
              </div>

              <ul className="space-y-7 mb-6 text-gray-600 text-sm">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-black mr-3 mt-1 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full h-12 rounded-lg bg-white-600 text-black font-medium border hover:bg-[#36B864] transition">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;



