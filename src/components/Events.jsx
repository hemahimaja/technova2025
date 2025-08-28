import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react"; // ✅ clean icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const events = [
  {
    title: "Hackathon",
    img: "/events/hackathon.jpg",
    desc: "48-hour coding challenge to build innovative solutions.",
  },
  {
    title: "Paper Presentation",
    img: "/events/paper.jpg",
    desc: "Showcase your research & technical writing.",
  },
  {
    title: "Poster",
    img: "/events/poster.jpg",
    desc: "Design impactful posters on futuristic tech ideas.",
  },
  {
    title: "Quiz",
    img: "/events/quiz.jpg",
    desc: "Test your technical knowledge with exciting rounds.",
  },
  {
    title: "FunTech",
    img: "/events/funtech.jpg",
    desc: "Engaging activities & mini-games with a tech twist.",
  },
];

// ✅ Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-2 top-1/2 -translate-y-1/2 bg-cyan-500 text-black p-2 rounded-full shadow-md hover:bg-cyan-400 z-10"
  >
    <ChevronRight size={20} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-2 top-1/2 -translate-y-1/2 bg-cyan-500 text-black p-2 rounded-full shadow-md hover:bg-cyan-400 z-10"
  >
    <ChevronLeft size={20} />
  </button>
);

const Events = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3, // Desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablet + Mobile
        settings: {
          slidesToShow: 1, // ✅ Only 1 card
          centerMode: false,
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <section id="events" className="py-16 bg-black text-white relative">
      <h2 className="text-3xl font-bold text-center mb-10">Sub-Events</h2>
      <div className="max-w-6xl mx-auto px-6">
        <Slider {...settings}>
          {events.map((event, idx) => (
            <div key={idx} className="px-4">
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform h-full">
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
