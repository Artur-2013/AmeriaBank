import { useState, useEffect, useRef } from 'react';
import './Glxavor.css';

const slides = [
  {
    title: 'AMP',
    lines: [
      { t: 'Քո վճարումների նոր արժույթը և մեր շնորհակալությունը քեզ։ Կուտակիր AMP-եր քո ամենօրյա վճարումներից և կատարիր գնումներ AMP-երով' },
    ],
    primary: 'Ինչքա՞ն AMP ունեմ',
    secondary: 'Իմանալ ավելին',
    img: "https://ameriabank.am/Portals/0/Images/mypoints/ameria-mypoint-arm.png",
  },
  {
    title: 'MyAmeria Star',
    lines: [
      { t: 'Ստեղծիր քո աստղը' },
      { t: 'Սկսիր քո գումարից և քո որոշումներից', b: true },
      { t: 'Բանկային քարտ և հավելված 6-18 տարեկանների համար' },
    ],
    primary: 'Ներբեռնել',
    secondary: 'Իմանալ ավելին',
    img: 'https://ameriabank.am/Portals/0/Images/myameria-kids/mystar-girls.png',
  },
  {
    title: 'Անվճար քարտ՝ առանց բանկ գալու',
    lines: [
      { t: 'Դիմիր օնլայն, ստացիր անվճար Visa Classic կամ MasterCard Standard քարտ, բանկային հաշիվ և MyAmeria օնլայն/մոբայլ բանկինգ։' },
    ],
    primary: 'Դիմել օնլայն',
    secondary: 'Իմանալ ավելին',
    img: 'https://ameriabank.am/Portals/0/Images/New-home/card-banner.png',
  },
];
const offers = [
  {
    title: 'Սա ուրբաթը կանչում է',
    text: 'Գնիր կահույք, կենցաղային և համակարգչային տեխնիկա, շինանյութ մեր գործընկերներից՝ Ամերիայի 0% ապառիկով։',
    img: '/images/offer-1.jpg',
    bg: '#2b2b2b',
  },
  {
    title: 'Բեր գույքի գրավով վարկ',
    text: 'Նվազեցրու գույքի գրավով վարկիդ տոկոսը',
    img: '/images/offer-2.jpg',
    bg: '#1f6fb5',
  },
  {
    title: 'Քո նոր մեքենան 0% կանխավճարով',
    text: 'Արի mycar.am, ընտրիր քո մեքենան առաջնային շուկայից և ձևակերպիր օնլայն ավտովարկ 0% կանխավճարով ու ավելի ցածր տոկոսադրույքով։',
    img: '/images/offer-3.jpg',
    bg: '#3c4a2f',
  },
  {
    title: 'Amazon-ի 115 նվեր քարտ',
    text: 'Միջազգային օնլայն գործարքներդ կատարի Mastercard քարտով',
    img: '/images/offer-4.jpg',
    bg: '#6bbf3a',
  },
];
export default function Glxavor() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(null);
  const moved = useRef(false);
  const offersRef = useRef(null);
const scrollOffers = (dir) => {
  const el = offersRef.current;
  if (el) el.scrollBy({ left: dir * 354, behavior: 'smooth' });
};

  const go = (dir) => setActive((i) => (i + dir + slides.length) % slides.length);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (paused || dragging || reduce) return undefined;
    const id = setInterval(() => go(1), 5000);
    return () => clearInterval(id);
  }, [paused, dragging, active]);

  const onDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    startX.current = e.clientX;
    moved.current = false;
  };
  const onMove = (e) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 5) {
      moved.current = true;
      setDragging(true);
    }
    setDragX(dx);
  };
  const onUp = () => {
    if (startX.current === null) return;
    if (Math.abs(dragX) > 60) go(dragX < 0 ? 1 : -1);
    startX.current = null;
    setDragX(0);
    setDragging(false);
  };
  const onClickCapture = (e) => {
    if (moved.current) {
      e.preventDefault();
      e.stopPropagation();
      moved.current = false;
    }
  };

  const slide = slides[active];

  return (
    <section className="glxavor-page">
      <div
        className={`gl-hero${dragging ? ' is-dragging' : ''}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        onPointerLeave={onUp}
        onClickCapture={onClickCapture}
      >
        <div
          className="gl-container gl-hero__inner"
          key={active}
          style={{
            transform: `translateX(${dragX}px)`,
            transition: dragging ? 'none' : 'transform .3s ease',
          }}
        >
          <div className="gl-hero__text">
            <h1>{slide.title}</h1>
            <p>
              {slide.lines.map((l) => (
                <span key={l.t} className={l.b ? 'is-bold' : undefined}>{l.t}</span>
              ))}
            </p>
            <div className="gl-hero__actions">
              <a href="#" className="gl-btn gl-btn--primary">{slide.primary}</a>
              <a href="#" className="gl-btn gl-btn--ghost">{slide.secondary}</a>
            </div>
          </div>
          <div className="gl-hero__visual">
            <img
              src={slide.img}
              alt=""
              draggable={false}
              onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
            />
          </div>
        </div>

        <div className="gl-hero__dots" role="tablist" aria-label="Սլայդեր">
          {slides.map((s, i) => (
            <button
              key={s.title}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Սլայդ ${i + 1}`}
              className={`gl-hero__dot${i === active ? ' is-active' : ''}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
      <div className="gl-container gl-promos">
        <div className="gl-promo gl-promo--green">
          <div className="gl-promo__text">
            <h2>Օնլայն վարկեր</h2>
            <p>Նոր հնարավորություններ քո նոր<br /> գաղափարների համար</p>
            <a href="#" className="gl-promo__btn">Իմանալ ավելին</a>
          </div>
          <img
            className="gl-promo__img"
            src="https://ameriabank.am/Portals/0/Images/calculators/computer.png"
            alt=""
          />
        </div>
    <div className="gl-promo gl-promo--blue">
  <div className="gl-promo__text">
    <h2>Stop գործիքներ</h2>
    <p>Քո ֆինանսների անվտանգության համար</p>
    <a href="#" className="gl-promo__btn">Իմանալ ավելին</a>
  </div>
  <img
    className="gl-promo__img"
    src="https://ameriabank.am/Portals/0/Images/contact-us/stop.png"
    alt=""
  />
</div>
      </div>
      <div className="gl-links">
  <div className="gl-container">
    <h2>Օգտակար հղումներ</h2>

    <div className="gl-links__grid">
      <a href="#" className="gl-link-card">
        <svg className="gl-link-card__icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="4" y="9" width="32" height="22" rx="3" />
          <path d="M4 17h32M9 25h8" />
        </svg>
        <span className="gl-link-card__title">Քարտեր</span>
      </a>

      <a href="#" className="gl-link-card">
        <svg className="gl-link-card__icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="4" y="5" width="14" height="12" rx="2" />
          <rect x="22" y="23" width="14" height="12" rx="2" />
          <path d="M26 11h8m0 0-3-3m3 3-3 3M14 29H6m0 0 3-3m-3 3 3 3" />
        </svg>
        <span className="gl-link-card__title">Փոխանցումներ</span>
      </a>
      <a href="#" className="gl-link-card">
  <svg className="gl-link-card__icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 5h10l-3 6h-4z" />
    <path d="M18 11c-6 3-10 8-10 15 0 5 4 8 12 8s12-3 12-8c0-7-4-12-10-15" />
    <circle cx="16" cy="24" r="1.3" />
    <circle cx="24" cy="30" r="1.3" />
    <path d="M25 23l-10 8" />
  </svg>
  <span className="gl-link-card__title">Օնլայն վարկեր</span>
</a>
<a href="#" className="gl-link-card">
  <svg className="gl-link-card__icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="12" y="3" width="16" height="34" rx="3" />
    <path d="M19 32h2" />
  </svg>
  <span className="gl-link-card__title">Հեռավար բանկինգ</span>
</a>
<a href="#" className="gl-link-card">
  <svg className="gl-link-card__icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 21c0-6 5-10 12-10 4 0 7 1 9 3l5-1-1 6c1 1 2 3 2 5l-3 1-1 5h-4l-1-2h-7l-1 2h-4l-1-5c-3-1-6-2-6-4z" />
    <path d="M16 15h6" />
    <circle cx="28" cy="20" r=".9" />
  </svg>
  <span className="gl-link-card__title">Խնայողություններ</span>
</a>
    </div>
  </div>
</div>
<div className="gl-feature__card">
  <div className="gl-feature__text">
    <h2>Ամերիան առաջինն է</h2>
    <p>Միացիր Ամերիա Սերունդ ծրագրին, ստացիր եռամսյա վճարովի ուսուցում և հնարավորություն՝ սկսելու քո կարիերան Ամերիայում։</p>
    <div className="gl-feature__actions">
      <a href="#" className="gl-feature__btn gl-feature__btn--green">Դիմել հիմա</a>
      <a href="#" className="gl-feature__btn gl-feature__btn--ghost">Իմանալ ավելին</a>
    </div>
  </div>
  <img
    className="gl-feature__img"
    src="https://ameriabank.am/Portals/0/Images/generation/gen-a-23/special.jpg"
    alt=""
    onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
  />
</div>
<div className="gl-showcase">
  <div className="gl-showcase__inner">
    <h2>MyHome</h2>
    <p className="gl-showcase__lead">Տուն գնելը երբեք այսքան հեշտ չի եղել</p>
    <p className="gl-showcase__text">
      Ընտրիր քո նոր բնակարանը, ստացիր վարկային հայտի պատասխանն օնլայն մի քանի րոպեում, այցելիր նոտարական գրասենյակ և ստորագրիր...
    </p>
    <a href="#" className="gl-showcase__btn">Իմանալ ավելին</a>

    <div className="gl-showcase__frame">
      <div className="gl-showcase__dots">
        <button type="button" className="gl-showcase__dot is-active" aria-label="Առաջին">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
            <path d="M8 3v10M3 8h10" />
          </svg>
        </button>
        <button type="button" className="gl-showcase__dot" aria-label="Երկրորդ">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 8h10m0 0-4-4m4 4-4 4" />
          </svg>
        </button>
        <button type="button" className="gl-showcase__dot" aria-label="Երրորդ">
          <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <circle cx="3.5" cy="8" r="1.1" />
            <circle cx="8" cy="8" r="1.1" />
            <circle cx="12.5" cy="8" r="1.1" />
          </svg>
        </button>
      </div>
    </div>
    <div className="gl-showcase__tabs" role="tablist">
  <button type="button" role="tab" aria-selected="true" className="gl-showcase__tab is-active">MyHome</button>
  <button type="button" role="tab" aria-selected="false" className="gl-showcase__tab">MyCar</button>
  <button type="button" role="tab" aria-selected="false" className="gl-showcase__tab">MyInvest</button>
  <button type="button" role="tab" aria-selected="false" className="gl-showcase__tab">MyBusiness</button>
</div>
  </div>
</div>
    </section>
  );
}