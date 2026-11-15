import { useRef, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./News.css";

const PER_PAGE = 4;

const news = [
  {
    title: "Հիփոթեք՝ 0% կանխավճարով. Ամերիաբանկի հատուկ առաջարկը TOON Expo-ի շրջանակում",
    date: "13.11.2026",
    text: "Հիփոթեքային շուկայի առաջատար Ամերիաբանկը նոյեմբերի 13-15-ը մասնակցում է անշարժ գույքի ցուցահանդեսին...",
  },
  {
    title: "Բարելավում ենք մեր համակարգերը՝ ձեզ ավելի լավ փորձառություն տալու համար",
    date: "12.11.2026",
    text: "Մենք շարունակում ենք թարմացնել մեր ենթակառուցվածքները, որպեսզի մեր մատուցած ծառայությունները լինեն էլ ավելի արագ, հուսալի և անխափան։",
  },
  {
    title: "imID-ն արդեն Ամերիաբանկում է. թվային անվտանգ նույնականացման նոր լուծում",
    date: "07.11.2026",
    text: "Պատկերացրեք մի տարածք, որտեղ ձեր ինքնությունը հաստատվում է վայրկյանների ընթացքում...",
  },
  {
    title: "Amazon-ի 115 նվեր քարտ ամեն ամիս՝ Mastercard-ով գործարքների դիմաց",
    date: "03.11.2026",
    text: "«Շահում չէ, նվեր է» արշավի շրջանակում Ամերիաբանկի Mastercard քարտապաններն (բացառությամբ...",
  },
  {
    title: "Երկրորդ էջի նորություն 1",
    date: "01.11.2026",
    text: "Նորության կարճ նկարագրություն։",
  },
  {
    title: "Երկրորդ էջի նորություն 2",
    date: "30.10.2026",
    text: "Նորության կարճ նկարագրություն։",
  },
  {
    title: "Երկրորդ էջի նորություն 3",
    date: "28.10.2026",
    text: "Նորության կարճ նկարագրություն։",
  },
  {
    title: "Երկրորդ էջի նորություն 4",
    date: "25.10.2026",
    text: "Նորության կարճ նկարագրություն։",
  },
];

export default function News() {
  const trackRef = useRef(null);
  const [page, setPage] = useState(0);
  const pages = Math.ceil(news.length / PER_PAGE);

  const goTo = (i) => {
    const el = trackRef.current;
    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
    setPage(i);
  };

  const onScroll = () => {
    const el = trackRef.current;
    setPage(Math.round(el.scrollLeft / el.clientWidth));
  };

  return (
    <section className="news">
      <h2 className="news__heading">Նորություններ</h2>

      <div className="news__track" ref={trackRef} onScroll={onScroll}>
        {news.map((item) => (
          <NewsCard key={item.title} {...item} />
        ))}
      </div>

      <div className="news__dots">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            className={`news__dot ${i === page ? "active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Էջ ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}