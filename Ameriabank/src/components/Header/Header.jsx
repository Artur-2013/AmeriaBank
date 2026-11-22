import TopNav from "./TopNav";
import MainNav from "./MainNav";
import { ChevronRight } from "lucide-react";
import "./Header.css";

const LOGO_URL = "https://ameriabank.am/Portals/0/Logo/Ameriabank%20green.svg?ver=2020-06-23-132200-427"; // փոխիր քո url-ով

const menu = ["Քարտեր", "Վարկեր", "Հաշիվներ", "Փոխանցումներ", "Խնայողություններ", "Թվային"];

export default function Header() {
  return (
    <header className="header">
      {/* Տող 1 */}
      <div className="header__top">
        <TopNav />
        <MainNav />
      </div>

      {/* Տող 2 */}
      <div className="header__bottom">
        <a href="/" className="header__logo">
          <img src={LOGO_URL} alt="Ameriabank" />
        </a>

        <nav className="header__menu">
          {menu.map((item) => (
            <a key={item} href="#" className="header__menu-link">
              {item}
            </a>
          ))}
        </nav>

        <a href="#" className="header__cta">
          Օգտվել բանկինգից
          <ChevronRight size={16} />
        </a>
      </div>
    </header>
  );
}