import InfoCard from "../InfoCard/InfoCard";
import "./Cards.css";

const cards = [
  {
    title: "Օնլայն վարկեր",
    text: "Նոր հնարավորություններ քո նոր գաղափարների համար",
    image: "https://ameriabank.am/Portals/0/Images/calculators/computer.png",
    background: "#86bd57",
  },
  {
    title: "Stop գործիքներ",
    text: "Քո ֆինանսների անվտանգության համար",
    image: "https://ameriabank.am/Portals/0/Images/contact-us/stop.png",
    background: "linear-gradient(110deg, #3b7fc0 0%, #4a9ed9 100%)",
  },
];

export default function Cards() {
  return (
    <section className="cards">
      {cards.map((card) => (
        <InfoCard key={card.title} {...card} />
      ))}
    </section>
  );
}