import React from "react";
import { useCart } from "../Context/CartContext";

export default function Cards({ id, name, price, category, image }) {
  const { addToCart, removeFromCart } = useCart();

  return (
    <div className="md:w-[44%] lg:w-[30%] rounded-2xl bg-white shadow-lg border border-gray-200 overflow-hidden">
      <div className="image w-full h-[280px]">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          Experience immersive sound quality with noise cancellation and 30 hours of battery life.
        </p>
        <span className="inline-block mt-3 text-xs font-medium text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
          {category}
        </span>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">{price}</span>
          <div className="flex gap-2">
            <button
              onClick={addToCart}
              className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-xl shadow hover:bg-green-700"
            >
              +
            </button>
            <button
              onClick={removeFromCart}
              className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-xl shadow hover:bg-red-700"
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
