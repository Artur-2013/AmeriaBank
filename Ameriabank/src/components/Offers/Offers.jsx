import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import OfferCard from "../OfferCard/OfferCard";
import "./Offers.css";

const offers = [
  {
    title: "11.11-ը կանչում է",
    text: "Գնիր կահույք, տեխնիկա և շինանյութ մեր գործընկերներից՝ Ամերիայի 0% ապառիկով",
    image: "https://ameriabank.am/Portals/0/Images/special-offers/11-11-is-calling-arm.png",
  },
  {
    title: "Amazon-ի 115 նվեր քարտ",
    text: "Միջազգային օնլայն ու օֆլայն գործարքներդ կատարիր քո Mastercard քարտով",
    image: "https://ameriabank.am/Portals/0/Images/campaigns/amazon-gift-card/amazon-special-offer-arm.png",
  },
  {
    title: "Բեր վարկերդ Ամերիա",
    text: "Ունեցիր 1 անգրավ վարկ՝ մինչև 20,000,000 Դ սահմանաչափով։ Տեղափոխիր վարկերդ Ամերիա և ունեցիր ցածր տոկոսադրույք՝ 15% ...",
    image: "https://ameriabank.am/Portals/0/Images/special-offers/refinancing-loan-offer-arm.png",
  },
  {
    title: "Անվճար Arca Classic քարտ",
    text: "2% քեշբեք քո վճարումներից։ Պատվիրիր Ամերիաբանկի Arca անվճար քարտ և ամեն ամիս ստացիր մինչև 60 000 դրամ քեշբեք...",
    image: "https://ameriabank.am/Portals/0/Images/special-offers/arca-offer.png",
  },
  {
    title: "Բեր գույքի գրավով վարկ",
    text: "Նվազեցրու գույքի գրավով վարկիդ տոկոսը 2%-ով",
    image: "https://ameriabank.am/Portals/0/Images/special-offers/percent-offer.png",
  },
  {
    title: "Ճամփորդիր անհոգ",
    text: "Գնիր ճամփորդական փաթեթ MyPay-ով և ստացիր անվճար Fast Track և մուտք lounge սրահ Զվարթնոցում",
    image: "https://ameriabank.am/Portals/0/Images/special-offers/mypay-travel.png",
  },
  {
    title: "200 կրթաթոշակ լավագույններին",
    text: "Ամսական 50,000 հազար ՀՀ դրամ 4 ամիս շարունակ",
    image: "https://ameriabank.am/Portals/0/Images/special-offers/student-offer-arm.png",
  },
  {
    title: "Ավելի բարձր %-ով ավանդ",
    text: "Բացիր ԱՄՆ դոլարով կուտակային ավանդ տարեկան մինչև 4,35%-ով և թող գումարդ ինքն իրեն ավելանա",
    image: "https://ameriabank.am/Portals/0/Images/special-offers/break-the-glass-offer.png",
  },
  {
    title: "Ամերիան արդեն Նորք-Մարաշում",
    text: "Դարձիր Ամերիայի հաճախորդ նոր մասնաճյուղում մինչև 04.01.27թ. և օգտվիր հատուկ առաջարկից",
    image: "https://ameriabank.am/Portals/0/Images/campaigns/norq-marash-branch/nor-norq-branch-home.jpg",
  },
  {
    title: "Student վարկ",
    text: "Ստացիր Student վարկ, ինքնուրույն վճարիր քո ուսման վարձը և սկսիր կառուցել քո մեծ ապագան",
    image: "https://ameriabank.am/Portals/0/Images/campaigns/student-loan/student-loan-offer-arm.png",
  },
  {
    title: "Դեպի Փարիզ Ամերիայի Visa քարտով",
    text: "Բացահայտիր Փարիզը Ամերիայի Visa քարտով․ ստացիր զեղչեր ու VIP ծառայություններ ռեստորանների, տեսարժան ",
    image: "https://ameriabank.am/Portals/0/Images/special-offers/paris-offer.png",
  },
  {
    title: "Դեպի Լոնդոն Ամերիայի Visa քարտով",
    text: "Բացահայտիր Լոնդոնը Ամերիայի Visa քարտով․ ստացիր զեղչեր ու VIP ծառայություններ ռեստորանների, տեսարժան ",
    image: "https://ameriabank.am/Portals/0/Images/special-offers/london-offer.png",
  },
  {
    title: "Դեպի Թաիլանդ Ամերիայի Visa քարտով",
    text: "Բացահայտիր Թաիլանդն Ամերիայի Visa քարտով․ ստացիր զեղչեր ու VIP ծառայություններ ռեստորանների, տեսարժան ",
    image: "https://ameriabank.am/Portals/0/Images/special-offers/thailand-offer.png",
  },
  {
    title: "Դեպի Վրաստան Ամերիայի Visa քարտով",
    text: "Բացահայտիր Վրաստանը Ամերիայի Visa քարտով․ ստացիր զեղչեր ու VIP ծառայություններ ռեստորանների, տեսարժան ",
    image: "https://ameriabank.am/Portals/0/Images/special-offers/georgia-offer.png",
  },
  {
    title: "Դեպի  Դուբայ Ամերիայի Visa քարտով",
    text: "Բացահայտիր Դուբայն Ամերիայի Visa քարտով․ ստացիր զեղչեր ու VIP ծառայություններ ռեստորանների, տեսարժան ",
    image: "https://ameriabank.am/Portals/0/Images/special-offers/dubai-offer.png",
  },
];

export default function Offers() {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 0);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 1);
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, []);

  const scroll = (dir) => {
    trackRef.current.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section className="offers">
      <div className="offers__head">
        <h2 className="offers__heading">Գործող հատուկ առաջարկներ</h2>

        <div className="offers__arrows">
          <button
            className="offers__arrow"
            onClick={() => scroll(-1)}
            disabled={atStart}
            aria-label="Նախորդը"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            className="offers__arrow"
            onClick={() => scroll(1)}
            disabled={atEnd}
            aria-label="Հաջորդը"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="offers__track" ref={trackRef} onScroll={updateArrows}>
        {offers.map((offer) => (
          <OfferCard key={offer.title} {...offer} />
        ))}
      </div>
    </section>
  );
}