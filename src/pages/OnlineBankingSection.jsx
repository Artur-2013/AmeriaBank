import { useState } from 'react';
import './OnlineBankingSection.css';

const ONLINE_ITEMS = [
  {
    id: 'account-card',
    title: 'Ստեղծիր հաշիվ ու պատվիրիր քարտ՝ օնլայն',
    description:
      'Բացիր օնլայն հաշիվ և պատվիրիր անվճար քարտ րոպեների ընթացքում՝ առանց տնից դուրս գալու',
    linkText: 'Իմանալ ավելին',
    href: '#account-card',
  },
  {
    id: 'online-loans',
    title: 'Օնլայն վարկեր',
    description:
      'Ստացիր 100,000 ՀՀ դրամից մինչև 20 մլն ՀՀ դրամի վարկ՝ մի քանի րոպեում',
    linkText: 'Իմանալ ավելին',
    href: '#online-loans',
  },
  {
    id: 'online-installment',
    title: 'Օնլայն ապառիկ',
    description:
      'Կատարիր 50,000-ից մինչև 1,000,000 դրամի օնլայն գնումներ և ձևակերպիր օնլայն ապառիկ հաշված րոպեների ընթացքում:',
    linkText: 'Իմանալ ավելին',
    href: '#online-installment',
  },
];

export default function OnlineBankingSection() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 3;
  const total = ONLINE_ITEMS.length;

  const visibleItems = Array.from({ length: Math.min(visibleCount, total) }, (_, i) => {
    return ONLINE_ITEMS[(startIndex + i) % total];
  });

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  return (
    <section className="online-section">
      <h2 className="online-section__heading">Էլ ի՞նչ կարող ես անել օնլայն</h2>

      <div className="online-banner">
        <h3 className="online-banner__title">Թվային բանկինգ ու շատ ավելին</h3>

        <div className="online-carousel">
          <button
            type="button"
            className="online-carousel__arrow online-carousel__arrow--prev"
            onClick={handlePrev}
            aria-label="Նախորդը"
          >
            ‹
          </button>

          <div className="online-cards">
            {visibleItems.map((item) => (
              <article key={item.id} className="online-card">
                <div className="online-card__top">
                  <h4 className="online-card__title">{item.title}</h4>
                  <p className="online-card__desc">{item.description}</p>
                </div>

                <a href={item.href} className="online-card__link">
                  {item.linkText}
                </a>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="online-carousel__arrow online-carousel__arrow--next"
            onClick={handleNext}
            aria-label="Հաջորդը"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}