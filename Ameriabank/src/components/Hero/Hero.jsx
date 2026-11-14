import { useState, useEffect } from "react";
import "./Hero.css";

const slides = [
  {
    title: "Անվճար քարտ՝ առանց բանկ գալու",
    text: "Դիմիր օնլայն, ստացիր անվճար Visa Classic կամ MasterCard Standard քարտ, բանկային հաշիվ և MyAmeria օնլայն/մոբայլ բանկինգ։",
    image: "https://ameriabank.am/Portals/0/Images/mypoints/ameria-mypoint-arm.png", // փոխիր քո url-ով
  },
  {
    title: "Երկրորդ սլայդի վերնագիր",
    text: "Երկրորդ սլայդի նկարագրությունը։",
    image: "https://ameriabank.am/Portals/0/Images/myameria-kids/mystar-girls.png",
  },
  {
    title: "Երրորդ սլայդի վերնագիր",
    text: "Երրորդ սլայդի նկարագրությունը։",
    image: "https://ameriabank.am/Portals/0/Images/New-home/card-banner.png",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // ավտոմատ փոխվի 5 վայրկյանը մեկ
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">{slide.title}</h1>
        <p className="hero__text">{slide.text}</p>

        <div className="hero__buttons">
          <a href="#" className="hero__btn hero__btn--primary">
            Դիմել օնլայն
          </a>
          <a href="#" className="hero__btn hero__btn--outline">
            Իմանալ ավելին
          </a>
        </div>
      </div>

      <img className="hero__image" src={slide.image} alt={slide.title} />

      <div className="hero__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero__dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Սլայդ ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}       