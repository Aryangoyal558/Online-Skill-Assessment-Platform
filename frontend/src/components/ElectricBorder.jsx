import "./ElectricBorder.css";

export default function ElectricBorder({ children }) {
  return (
    <div className="electric-card">
      <div className="electric-line"></div>
      <div className="electric-content">{children}</div>
    </div>
  );
}