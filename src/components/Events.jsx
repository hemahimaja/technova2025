import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const events = [
  {
    title: "Hackathon",
    description: "48-hour coding challenge to build innovative solutions.",
    img: "/events/hackathon.jpg",
  },
  {
    title: "Paper Presentation",
    description: "Showcase your research & technical writing.",
    img: "/events/paper.jpg",
  },
  {
    title: "Poster Presentation",
    description: "Design impactful posters on futuristic tech ideas.",
    img: "/events/poster.jpg",
  },
  {
    title: "Quiz",
    description: "Test your technical knowledge with exciting rounds.",
    img: "/events/quiz.jpg",
  },
  {
    title: "FunTech",
    description: "Engaging activities & mini-games with a tech twist.",
    img: "/events/funtech.jpg",
  },
];


export default function Events() {
  return (
    <div className="min-h-screen bg-black text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Sub-Events</h2>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={true}
          pagination={{ clickable: true }}
          className="rounded-2xl"
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg flex flex-col">
                {/* Image */}
                <div className="w-full aspect-[4/3] flex items-center justify-center bg-black">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="max-h-full max-w-full object-contain border-4 border-cyan-400 rounded-t-2xl"
                  />
                </div>

                {/* Text */}
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-300">{event.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
