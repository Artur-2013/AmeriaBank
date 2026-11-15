import "./FeedbackButton.css";

export default function FeedbackButton({ text = "Ասա կարծիքդ", href = "#" }) {
  return (
    <a href={href} className="feedback-btn">
      {text}
    </a>
  );
}