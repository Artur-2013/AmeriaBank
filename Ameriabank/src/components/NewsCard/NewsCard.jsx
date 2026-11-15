import "./NewsCard.css";

export default function NewsCard({ title, date, text, href = "#" }) {
  return (
    <a href={href} className="news-card" title={title}>
      <h3 className="news-card__title">{title}</h3>
      <time className="news-card__date">{date}</time>
      <p className="news-card__text">{text}</p>
    </a>
  );
}