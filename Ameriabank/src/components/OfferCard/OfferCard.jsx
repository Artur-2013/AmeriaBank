import { ArrowRight } from "lucide-react";
import "./OfferCard.css";

export default function OfferCard({ title, text, image, href = "#" }) {
  return (
    <article className="offer-card">
      <img className="offer-card__image" src={image} alt={title} />

      <h3 className="offer-card__title">
        <a href={href}>
          <span>{title}</span>
          <ArrowRight size={14} />
        </a>
      </h3>

      <p className="offer-card__text">{text}</p>

      <a href={href} className="offer-card__btn">
        Իմանալ ավելին
      </a>
    </article>
  );
}