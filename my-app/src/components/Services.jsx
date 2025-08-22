const cards = [
  {
    title: "Office Cleaning",
    text: "We make your workspace shine with daily or weekly schedules. Dust, mop, sanitize done right corners & more",
    img: "src/assets/Image1.png",
    cta: "Book Now",
  },
  {
    title: "Spring Cleaning",
    text: "Deep clean you can count on: custom plans for seasonal refresh. Kitchens, windows, corners & more.",
    img: "src/assets/Image2.png",
    cta: "Book Now",
  },
  {
    title: "House Cleaning",
    text: "From living room to bathroom, our team delivers a regular schedule that fits your lifestyle corners & more.",
    img: "src/assets/Image3.png",
    cta: "Book Now",
  },
];

function Services() {
  return (
    <section id="service" className="py-11 font-['Be_Vietnam_Pro']">
      <div className="container-padding mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 border-b gap-100 mb-9">
          <div>
            <p className="text-primary font-semibold"></p>
            <h2 className="text-3xl md:text-3xl font-semibold text-black">
              We Always Provide The <br/>Best Service
            </h2>
          </div>
          <div className="text-black-600">
            <h4 className="md:text-2xl text-lg mb-2 text-black">
              Services
            </h4>
            <p>
              While we can customize your cleaning plan to suit your <br />
              needs. Most clients schedule regular cleaning services.
            </p> <br />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <article
              key={c.title}
              className="card rounded-lg hover:shadow-lg transition text-left">
              <div className="h-60">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover rounded-t-lg"/>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg">{c.title}</h3>
                <p className="mt-2 text-slate-600">{c.text}</p>
                <div className="flex justify-left">
                  <button className="mt-4 flex items-center justify-left gap-2 px-5 py-2 bg-white-600 text-black rounded-lg transition hover:bg-[#36B864] hover:text-white">
                    {c.cta}
                    <span className="transition-transform group-hover:translate-x-1">
                      ➝
                    </span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
