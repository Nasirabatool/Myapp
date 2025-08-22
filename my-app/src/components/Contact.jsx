import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-15 items-start">


        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-10">Find us</h2>
          <div className="space-y-5">

            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm">
              <span className="h-12 w-12 rounded-full bg-[#36B864] flex items-center justify-center text-white text-lg">
                <FaPhoneAlt />
              </span>
              <div>
                <h4 className="font-semibold text-gray-800">Call Us</h4>
                <p className="text-sm text-gray-600">+882 256 203 968</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm">
              <span className="h-12 w-12 rounded-full bg-[#36B864] flex items-center justify-center text-white text-lg">
                <FaEnvelope />
              </span>
              <div>
                <h4 className="font-semibold text-gray-800">Email Now</h4>
                <p className="text-sm text-gray-600">Hello@procleaning.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg shadow-sm">
              <span className="h-12 w-12 rounded-full bg-[#36B864] flex items-center justify-center text-white text-lg">
                <FaMapMarkerAlt />
              </span>
              <div>
                <h4 className="font-semibold text-gray-800">Address</h4>
                <p className="text-sm text-gray-600">
                  7890, Broad Travel, New York, USA
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Info</h3>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Keep In Touch</h2>
          <p className="text-sm text-gray-600 mb-6">
            We prioritize responding to your inquiries promptly to ensure you
            receive the assistance you need in a timely manner.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-100 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-100 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:bg-[#36B864]-500"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full border border-gray-100 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:bg-[#36B864]-500"
            ></textarea>
            <button
              type="submit"
              className="bg-[#36B864] hover:bg-green-700 text-white px-6 py-2 rounded-md text-sm font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
