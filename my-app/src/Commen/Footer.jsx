import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0c1a13] text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2">
            <img src="src/assets/Vector.png" alt="Logo" className="w-8 h-8" />
            <div>
              <h1 className="text-lg font-bold">
                <span className="text-[#36B864]">Pro</span>Cleaning
              </h1>
              <p className="text-xs text-gray-400">
                Cleaning Services company
              </p>
            </div>
          </div>
          <p className="mt-4 text-gray-400 text-sm">
            Stay updated with our latest cleaning tips, service updates,
            and helpful articles on maintaining a spotless home.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Our Team</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Know More</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Support</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-3">Newsletter</h2>
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Email Goes here"
              className="w-full px-3 py-2 rounded border border-gray-500 text-white text-sm mb-2"
            />
            <button className="w-[95px] h-[43px] bg-[#36B864] hover:bg-green-700 text-white rounded-md text-sm font-medium">
              Send
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-400">
        © 2024 <span className="text-white font-semibold">"ProCleaning"</span> All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;