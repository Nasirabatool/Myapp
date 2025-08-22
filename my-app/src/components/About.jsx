import React from "react";
import { FaStar, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";

const About = () => {
  const team = [
    {
      name: "Erick Reynolds",
      role: "Expert Cleaner",
      img: "src/assets/effctive imafe 1.png",
    },
    {
      name: "Sophia Taylor",
      role: "Expert Cleaner",
      img: "src/assets/effctive imafe 2.png",
    },
    {
      name: "James Smith",
      role: "Expert Cleaner",
      img: "src/assets/effctive imafe 3.png",
    },
  ];

  return (
    <section className="bg-white mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 items-start border-b pb-6">
          <h2 className="text-3xl font-semibold text-black leading-tight">
            Effective Cleaning Requires <br /> an Expert Team
          </h2>
          <div>
            <h4 className="font-semibold text-base text-black">Expert Team</h4>
            <p className="text-gray-600 text-sm mt-1">
              Professional cleaning staff ensuring top-notch cleanliness Professional cleaning staff ensuring top-notch cleanliness.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 text-left">
          {team.map((member, index) => (
            <div
              key={index}
              className="rounded-lg shadow-sm hover:shadow-md transition bg-white"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-75 object-cover rounded-t-lg"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-base font-semibold text-gray-900">
                  {member.name}
                </h3>
                <div className="flex justify-left text-yellow-500 mb-1"><br/>
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
                </div>
                <p className="text-gray-600 text-xs">
                  Expert cleaner providing thorough cleaning with precision as Expert cleaner providing thorough 
                  cleaning with precision Expert cleaner providing thorough cleaning with precision.
                </p>
                <div className="flex justify-left space-x-4 text-black text-base mt-2">
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><RxCrossCircled /></a>
                  <a href="#"><FaInstagram /></a>
                  <a href="#"><FaLinkedinIn /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;