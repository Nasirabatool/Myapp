import React from "react";

const Blog = () => {
  const articles = [
    {
      author: "JOHN HILTON",
      date: "JAN 6, 2025",
      title: "Eco-Friendly Cleaning: How We Keep Your Home Green",
      description:
        "Learn about our commitment to eco-friendly practices. We share the eco-conscious products...",
      image: "src/assets/stay 1.png",
    },
    {
      author: "JOHN HILTON",
      date: "JAN 6, 2025",
      title: "How to Maintain a Clean Home Between Professional Visits",
      description:
        "Get practical advice on maintaining cleanliness between our scheduled visits. These easy-to-follow tips...",
      image: "src/assets/stay 2.png",
    },
    {
      author: "JOHN HILTON",
      date: "JAN 6, 2025",
      title: "The Benefits of Regular Professional Cleaning",
      description:
        "Understand the numerous advantages of scheduling regular professional cleanings. From improving indoor air...",
      image: "src/assets/stay 3.png",
    },
  ];

  return (
    <section className="max-w-310 mx-auto px-6 py-2 bg-white">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
        <h2 className="text-3xl font-semibold text-black leading-tight">
          Stay Updated with Our
          <br /> Tips & Service News!
        </h2>
        <div className="max-w-md">
          <h3 className="font-semibold text-black">Our Blog</h3>
          <p className="text-black text-sm mt-2">
            Stay informed with our latest cleaning tips, service updates,
            <br /> expert advice on maintaining an immaculate home.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-85 object-cover"
            />
            <div className="p-4 text-center">
              <p className="text-gray-500 text-sm mb-2">
                {article.date} - {article.author}
              </p>
              <h4 className="text-lg font-bold mb-2">{article.title}</h4>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <button className="bg-white-600 hover:bg-[#36B864] text-black py-2 px-4 rounded shadow-sm hover:shadow-md transition underline">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;




