import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="top-6 z-50 bg-white/90 backdrop-blur border-b" style={{ height: "92.28px" }}>
      <nav
        className="mx-auto flex items-center justify-between"
        style={{
          maxWidth: "1340px",
          padding: "0 135px",
          height: "100%",
        }}
      >
        <a href="#" className="flex items-center gap-2">
          <img
            src="src/assets/Vector.png" 
            alt="ProCleaning Logo"
            className="w-8 h-8"
          />
          <div className="leading-tight">
            <h1 className="text-lg font-bold">
              <span className="text-[#36B864]">Pro</span>Cleaning
            </h1>
            <p className="text-xs text-slate-500">Cleaning & Maintenance</p>
          </div>
        </a>
        
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li><a href="#" className="hover:text-[#36B864]">Home</a></li>
          <li><a href="#about" className="hover:text-[#36B864]">About</a></li>
          <li><a href="#service" className="hover:text-[#36B864]">Service</a></li>
          <li><a href="#blog" className="hover:text-[#36B864]">Blog</a></li>
          <li><a href="#contact" className="hover:text-[#36B864]">Contact</a></li>
        </ul>
        
        <a
          href="#contact"
          className="hidden md:inline-flex px-6 py-2 bg-[#36B864] hover:bg-green-600 text-white rounded-lg transition-all duration-200"
        >
          Get a quote
        </a>
        
        <button
          className="md:hidden p-2"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-8 py-4 space-y-4">
            <a onClick={() => setOpen(false)} href="#" className="block">Home</a>
            <a onClick={() => setOpen(false)} href="#about" className="block">About</a>
            <a onClick={() => setOpen(false)} href="#service" className="block">Service</a>
            <a onClick={() => setOpen(false)} href="#blog" className="block">Blog</a>
            <a onClick={() => setOpen(false)} href="#contact" className="block">Contact</a>
            <a
              onClick={() => setOpen(false)}
              href="#contact"
              className="block px-4 py-2 bg-[#36B864] hover:bg-green-600 text-white rounded-lg text-center"
            >
              Get a quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
