import "./TeamCard.css";

function TeamCard({ image, name, role, description }) {
  return (
    <div className="team-card">
      <div className="team-avatar">
        <img src={image} alt={name} />
      </div>

      <h3 className="team-name">{name}</h3>

      <span className="team-role">{role}</span>

      <p className="team-description">{description}</p>

      <button className="team-btn">Know More</button>

      <div className="team-card-glow"></div>
    </div>
  );
}

export default TeamCard;