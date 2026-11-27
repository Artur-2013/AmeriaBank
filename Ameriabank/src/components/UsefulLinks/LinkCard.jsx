import "./LinkCard.css";

export default function LinkCard({ title, icon: Icon, href = "#" }) {
  return (
    <a href={href} className="link-card">
      <Icon size={36} strokeWidth={1.2} className="link-card__icon" />
      <span className="link-card__title">{title}</span>
    </a>
  );
}