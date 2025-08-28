import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const events = [
  { title: "Hackathon", img: "/events/hackathon.jpg", desc: "48-hour coding challenge to build innovative solutions." },
  { title: "Paper Presentation", img: "/events/paper.jpg", desc: "Showcase your research & technical writing." },
  { title: "Poster", img: "/events/poster.jpg", desc: "Design impactful posters on futuristic tech ideas." },
  { title: "Quiz", img: "/events/quiz.jpg", desc: "Test your technical knowledge with exciting rounds." },
  { title: "FunTech", img: "/events/funtech.jpg", desc: "Engaging activities & mini-games with a tech twist." },
];

const Events = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="events" className="py-16 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Sub-Events</h2>
      <div className="max-w-6xl mx-auto px-6">
        <Slider {...settings}>
          {events.map((event, idx) => (
            <div key={idx} className="px-4">
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform h-full">
                {/* ✅ Added border here */}
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-48 object-cover border-4 border-cyan-400 rounded-t-2xl"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-sm text-gray-300">{event.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Events;
