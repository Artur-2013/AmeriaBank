import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import OfferCard from "../OfferCard/OfferCard";
import "./Offers.css";

const offers = [
  {
    title: "11.11-ը կանչում է",
    text: "Գնիր կահույք, տեխնիկա և շինանյութ մեր գործընկերներից՝ Ամերիայի 0% ապառիկով",
    image: "https://example.com/offer1.png",
  },
  {
    title: "Amazon-ի 115 նվեր քարտ",
    text: "Միջազգային օնլայն ու օֆլայն գործարքներդ կատարիր քո Mastercard քարտով",
    image: "https://example.com/offer2.png",
  },
  {
    title: "Բեր վարկերդ Ամերիա",
    text: "Ունեցիր 1 անգրավ վարկ՝ մինչև 20,000,000 Դ սահմանաչափով։ Տեղափոխիր վարկերդ Ամերիա և ունեցիր ցածր տոկոսադրույք՝ 15% ...",
    image: "https://example.com/offer3.png",
  },
  {
    title: "Անվճար Arca Classic քարտ",
    text: "2% քեշբեք քո վճարումներից։ Պատվիրիր Ամերիաբանկի Arca անվճար քարտ և ամեն ամիս ստացիր մինչև 60 000 դրամ քեշբեք...",
    image: "https://example.com/offer4.png",
  },
  {
    title: "Բեր գույքի գրավով վարկ",
    text: "Նվազեցրու գույքի գրավով վարկիդ տոկոսը 2%-ով",
    image: "https://example.com/offer5.png",
  },
  {
    title: "Ճամփորդիր անհոգ",
    text: "Գնիր ճամփորդական փաթեթ MyPay-ով և ստացիր անվճար Fast Track և մուտք lounge սրահ Զվարթնոցում",
    image: "https://example.com/offer6.png",
  },
  {
    title: "200 կրթաթոշակ լավագույններին",
    text: "Ամսական 50,000 հազար ՀՀ դրամ 4 ամիս շարունակ",
    image: "https://example.com/offer7.png",
  },
  {
    title: "Ավելի բարձր %-ով ավանդ",
    text: "Բացիր ԱՄՆ դոլարով կուտակային ավանդ տարեկան մինչև 4,35%-ով և թող գումարդ ինքն իրեն ավելանա",
    image: "https://example.com/offer8.png",
  },
  {
    title: "Ամերիան արդեն Նորք-Մարաշում",
    text: "Դարձիր Ամերիայի հաճախորդ նոր մասնաճյուղում մինչև 04.01.27թ. և օգտվիր հատուկ առաջարկից",
    image: "https://example.com/offer9.png",
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