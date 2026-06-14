import ElectricBorder from "./ElectricBorder";

function OfferCard({
  title,
  description,
  icon,
  color,
}) {
  return (
    <ElectricBorder
      color={color}
      thickness={2}
      style={{
        borderRadius: "20px",
      }}
    >
      <div
        style={{
          padding: "30px",
          minHeight: "250px",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: "3rem",
            marginBottom: "15px",
          }}
        >
          {icon}
        </div>

        <h3>{title}</h3>

        <p
          style={{
            opacity: 0.8,
            marginTop: "15px",
          }}
        >
          {description}
        </p>
      </div>
    </ElectricBorder>
  );
}

export default OfferCard;