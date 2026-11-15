import { CreditCard, ArrowLeftRight } from "lucide-react";
import LinkCard from "./LinkCard";
import "./UsefulLinks.css";

const links = [
  { title: "Քարտեր", icon: CreditCard, href: "#" },
  { title: "Փոխանցումներ", icon: ArrowLeftRight, href: "#" },
];

export default function UsefulLinks() {
  return (
    <section className="useful-links">
      <h2 className="useful-links__heading">Օգտակար հղումներ</h2>

      <div className="useful-links__grid">
        {links.map((link) => (
          <LinkCard key={link.title} {...link} />
        ))}
      </div>
    </section>
  );
}