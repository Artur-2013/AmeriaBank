import TopNav from "./TopNav";
import MainNav from "./MainNav";
import "./Header.css";

const LOGO_URL = "https://ameriabank.am/Portals/0/Logo/Ameriabank%20green.svg?ver=2020-06-23-132200-427"; // փոխիր քո url-ով

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
      </div>
    </header>
  );
}