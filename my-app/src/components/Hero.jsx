export default function Hero() {
  return (
    <section className="relative w-337.5 h-130 mx-auto mt-98.28"> 
      <div className="relative w-full h-full">
        <img
          src="src/assets/banner.jpg"
          alt="Cleaning crew"
          className="w-full h-full object-cover rounded-lg"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="px-32 text-black">

            <div className="flex flex-col w-200 h-65 gap-[12]"> 
              <p className="text-sm md:text-base opacity-90">
                Quality cleaning at a fair price.
              </p>
              <h1 className="text-3xl md:text-5xl font-semibold leading-tight drop-shadow">
                Specialized, efficient,
                <br />and thorough cleaning
                <br />services
              </h1>
              <p className="max-w-xl text-black/80">
                We provide top cleaning tasks using the least amount of time, energy, and money.
              </p>
            </div>

            <div className="mt-6 flex w-77 h-15 gap-3"> 
              <a
                href="#contact"
                className="flex items-center justify-center w-full bg-[#36B864] hover:bg-green-600 text-white rounded-lg shadow-lg"
              >
                Get Started Now
              </a>
              <a
                href="#service"
                className="flex items-center justify-center w-full bg-white/90 text-gray-900 hover:bg-white rounded-lg shadow-lg"
              >
                View all Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}