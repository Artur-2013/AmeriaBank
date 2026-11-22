import "./InfoCard.css";

export default function InfoCard({
  title,
  text,
  image,
  background = "#86bd57",
  buttonText = "Իմանալ ավելին",
  href = "#",
}) {
  return (
    <div className="info-card" style={{ background }}>
      <div className="info-card__content">
        <h3 className="info-card__title">{title}</h3>
        <p className="info-card__text">{text}</p>
        <a href={href} className="info-card__btn">
          {buttonText}
        </a>
      </div>

      <img className="info-card__image" src={image} alt={title} />
    </div>
  );
}