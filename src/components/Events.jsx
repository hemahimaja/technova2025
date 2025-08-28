import React from "react";

const events = [
  { title: "Hackathon", img: "/events/hackathon.jpg", desc: "48-hour coding challenge to build innovative solutions." },
  { title: "Paper Presentation", img: "/events/paper.jpg", desc: "Showcase your research & technical writing." },
  { title: "Poster", img: "/events/poster.jpg", desc: "Design impactful posters on futuristic tech ideas." },
  { title: "Quiz", img: "/events/quiz.jpg", desc: "Test your technical knowledge with exciting rounds." },
  { title: "FunTech", img: "/events/funtech.jpg", desc: "Engaging activities & mini-games with a tech twist." },
];

const Events = () => {
  return (
    <section id="events" className="py-16 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Sub-Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
          >
            <img src={event.img} alt={event.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-sm text-gray-300">{event.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
