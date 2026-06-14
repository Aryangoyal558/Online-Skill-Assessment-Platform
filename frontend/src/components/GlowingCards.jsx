import React from "react";
import "./Glow.css";
const cardData = [
  {
    icon: "🚀",
    title: "Skill Assessments",
    desc: "Take AI-powered assessments designed to evaluate your real-world skills and industry readiness.",
    color: "#00ffff",
  },
  {
    icon: "🏆",
    title: "Digital Certificates",
    desc: "Earn verifiable certificates that can be shared with employers and professional networks.",
    color: "#8b5cf6",
  },
  {
    icon: "🤖",
    title: "AI Evaluation",
    desc: "Get instant feedback and performance analytics powered by advanced AI technology.",
    color: "#00ff88",
  },
];

export default function GlowingCards() {
  return (
    <section className="container py-5">
      <div className="row g-4 justify-content-center">
        {cardData.map((card, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div
              className="glow-card h-100"
              style={{
                "--glow-color": card.color,
              }}
            >
              <div className="icon">{card.icon}</div>

              <h3>{card.title}</h3>

              <p>{card.desc}</p>

              <button className="btn btn-outline-light rounded-pill mt-3">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}