import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./PromoSlider.css";

const slides = [
  {
    title: "Ամերիան առաջինն է",
    text: "Միացիր Ամերիա Սերունդ ծրագրին, ստացիր եռամսյա վճարովի ուսուցում և հնարավորություն՝ սկսելու քո կարիերան Ամերիայում։",
    image: "https://ameriabank.am/Portals/0/Images/generation/gen-a-23/special.jpg",
    primaryBtn: "Դիմել հիմա",
  },
  {
    title: "Մոլորա՞կ, թե՞ պլաստիկ. Ընտրիր մոլորակը",
    text: "Դարձիր հաճախորդ և պատվիրիր Visa Digital անվճար քարտ, ստացիր 2000Դ քարտի տպագրման գումարը քո քարտին։",
    image: "https://ameriabank.am/Portals/0/Images/home-campaigns/eco-digital-cards-arm.png",
    primaryBtn: "Պատվիրել Visa Digital",
  },
  {
    title: "Օնլայն ապառիկ",
    text: "Ընտրիր կահույք, տեխնիկա կամ շինանյութ Vega, Vesta, VLV, Zigzag, REDstore և այլ խանութների կայքերից և ձևակերպիր Ամերիա օնլայն ապառիկ ավելի ցածր 17%-ով։",
    note: "Փաստացի տոկոսադրույք՝ 18.1% - 18.4%",
    image: "https://ameriabank.am/Portals/0/Images/home-campaigns/online-consumer-loan.png",
  },
  {
    title: "UBPay արագ դրամական փոխանցումներ",
    text: "Հեռավորությունն այլևս խնդիր չէ. ստացիր ու ուղարկիր փոխանցումներ դեպի ՌԴ, Կիպրոս, Հունաստան, Ղազախստան, Ուզբեկստան և Իսրայել ու հակառակ ուղղությամբ։",
    image: "https://ameriabank.am/Portals/0/Images/home-campaigns/ubpay-arm.png",
  },
  {
    title: "Ամերիա Մանկական ավանդ",
    text: "ԱՎԱՆԴույթ դարձրու լավ պահերն ու ակնթարթները կուտակելն ու երեխաներիդ փոխանցելը։",
    image: "https://ameriabank.am/Portals/0/Images/home-campaigns/grandad.png",
    primaryBtn: "Դառնալ հաճախորդ",
  },
  {
    title: "Քո քարտերի բոլոր արտոնությունները",
    text: "Զգա՜ քեզ ապահով ու հոգատար ձեռքերում աշխարհի որ անկյունում էլ լինես։",
    image: "https://ameriabank.am/Portals/0/Images/home-campaigns/cardbenefits.png",
    primaryBtn: "Դիմել օնլայն",
  },
];

export default function PromoSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const slide = slides[current];

  return (
    <section className="promo">
      <button className="promo__arrow promo__arrow--left" onClick={prev} aria-label="Նախորդը">
        <ArrowLeft size={18} />
      </button>

      <div className="promo__card">
        <div className="promo__content">
          <h2 className="promo__title">{slide.title}</h2>
          <p className="promo__text">{slide.text}</p>

          {slide.note && <p className="promo__note">{slide.note}</p>}

          <div className="promo__buttons">
            {slide.primaryBtn && (
              <a href="#" className="promo__btn promo__btn--primary">
                {slide.primaryBtn}
              </a>
            )}
            <a href="#" className="promo__btn promo__btn--outline">
              Իմանալ ավելին
            </a>
          </div>
        </div>

        <img className="promo__image" src={slide.image} alt={slide.title} />
      </div>

      <button className="promo__arrow promo__arrow--right" onClick={next} aria-label="Հաջորդը">
        <ArrowRight size={18} />
      </button>
    </section>
  );
}