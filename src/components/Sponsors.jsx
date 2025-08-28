import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Import sponsor images
import sponsor1 from "../assets/sponsor1.jpg";
import sponsor2 from "../assets/sponsor2.jpg";
import sponsor3 from "../assets/sponsor3.jpg";
import sponsor4 from "../assets/sponsor4.jpg";

const Sponsors = () => {
  const sponsors = [sponsor1, sponsor2, sponsor3, sponsor4];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // ⏱️ every 5s
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section id="sponsors" className="py-16 bg-black text-center">
      <h2 className="text-3xl font-bold mb-8 text-white">Our Sponsors</h2>
      <div className="max-w-5xl mx-auto px-4">
        <Slider {...settings}>
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={sponsor}
                alt={`Sponsor ${index + 1}`}
                className="h-32 object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Sponsors;
