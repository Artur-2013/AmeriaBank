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

export default function Glxavor() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(null);
  const moved = useRef(false);

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
    </section>
  );
}