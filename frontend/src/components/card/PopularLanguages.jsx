import React from "react";
import {
  FaReact,
  FaJava,
  FaPython,
  FaJs,
  FaNodeJs,
  FaPhp,
} from "react-icons/fa";

import "./PopularLanguages.css";

const languages = [
  { name: "React", Icon: FaReact },
  { name: "Java", Icon: FaJava },
  { name: "Python", Icon: FaPython },
  { name: "JavaScript", Icon: FaJs },
  { name: "Node JS", Icon: FaNodeJs },
  { name: "PHP", Icon: FaPhp },
];

function PopularLanguages() {
  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {[...languages, ...languages].map((item, index) => (
          <div className="language-card" key={index}>
            <item.Icon size={40} />
            <h5>{item.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularLanguages;