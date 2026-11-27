import { useEffect, useState } from 'react';
import './MyWordsCard.css';

const DEFAULT_WORDS = ['Car', 'Invest', 'Business', 'Pay'];

export default function MyWordsCard({ words = DEFAULT_WORDS, intervalMs = 1800 }) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!words.length) return;

    const timer = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setVisible(true);
      }, 220);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [words, intervalMs]);

  return (
    <article className="mywords-card">
      <div className="mywords-card__content">
        <span className="mywords-card__prefix">My</span>
        <span
          className={`mywords-card__word ${
            visible ? 'mywords-card__word--visible' : 'mywords-card__word--hidden'
          }`}
        >
          {words[index]}
        </span>
      </div>
    </article>
  );
}