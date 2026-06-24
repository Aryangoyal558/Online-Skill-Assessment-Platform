import { useState } from "react";
import "./PopularSubjectCard.css";

function PopularSubjectCard() {
  const [style, setStyle] = useState({});

  const handleMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x - rect.width / 2) / 15;
    const rotateX = -(y - rect.height / 2) / 15;

    setStyle({
      transform: `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.05)`,
    });
  };

  const handleLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)",
    });
  };

  return (
    <div
      className="subject-card "
      style={style}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="glow"></div>

      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500"
        alt="Web Development"
        className="subject-img mt-2"
      />

      <h2>Web Development</h2>

      

      <div className="stars">
        ⭐⭐⭐⭐⭐ <span>4.9</span>
      </div>

      <button className="mb-3">Explore</button>
    </div>
  );
}

export default PopularSubjectCard;