import { Link } from 'react-router-dom';
import './Header.css';

const AMERIA_LOGO_URL =
  'https://ameriabank.am/Portals/0/Logo/Ameriabank%20green.svg?ver=2020-06-23-132200-427';

export default function Header() {
  return (
    <header className="ameria-header">
      <div className="ameria-top-bar">
        <div className="ameria-top-left">
          <a href="#glxavor" className="ameria-segment ameria-segment--active">
            ԱՆՀԱՏՆԵՐԻՆ
          </a>
          <Link to="http://localhost:5173/business" className="ameria-segment">
            ԲԻԶՆԵՍԻՆ
         </Link>
          <a href="#glxavor" className="ameria-segment">
            ՆԵՐԴՐՈՒՄԱՅԻՆ
          </a>
        </div>

        <div className="ameria-top-right">
          <a href="#glxavor" className="ameria-utility-link">
            <svg className="ameria-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="9" cy="8" r="3" />
              <path d="M4 19c0-2.8 2.2-5 5-5s5 2.2 5 5" />
              <path d="M17 11v4M20 9v6" strokeLinecap="round" />
            </svg>
            <span>IR</span>
          </a>

          <a href="#glxavor" className="ameria-utility-link">
            <svg className="ameria-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="4" y="4" width="9" height="16" rx="1" />
              <path d="M13 9h5a1 1 0 0 1 1 1v10H13" />
              <path d="M7 8h2M7 12h2M7 16h2M15 13h2M15 16h2" strokeLinecap="round" />
            </svg>
            <span>Բանկի մասին</span>
          </a>

          <a href="tel:+37410561111" className="ameria-utility-link">
            <svg className="ameria-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6.5 4h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4z" />
            </svg>
            <span>+374 10 56 11 11</span>
          </a>

          <a href="#glxavor" className="ameria-utility-link">
            <svg className="ameria-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 21s-6-5.4-6-10a6 6 0 1 1 12 0c0 4.6-6 10-6 10z" />
              <circle cx="12" cy="11" r="2.2" />
            </svg>
            <span>Մասնաճյուղեր</span>
          </a>

          <button type="button" className="ameria-search-btn" aria-label="Որոնում">
            <svg className="ameria-icon ameria-icon--search" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="6.5" />
              <path d="M16 16l4.5 4.5" strokeLinecap="round" />
            </svg>
          </button>

          <button type="button" className="ameria-lang">
            <span>ՀԱՅ</span>
            <svg className="ameria-lang-arrow" viewBox="0 0 12 8" fill="currentColor">
              <path d="M1 1.5L6 6.5L11 1.5H1Z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="ameria-main-bar">
        <a href="#glxavor" className="ameria-logo">
          <img
            src={AMERIA_LOGO_URL}
            alt="AmeriaBank"
            className="ameria-logo-img"
          />
        </a>

        <nav className="ameria-nav">
          <a href="#cards" className="ameria-nav-link">
            Քարտեր
          </a>
          <a href="#varker" className="ameria-nav-link">
            Վարկեր
          </a>
          <a href="#hashivner" className="ameria-nav-link">
            Հաշիվներ
          </a>
          <a href="#poxancumner" className="ameria-nav-link">
            Փոխանցումներ
          </a>
          <Link to="/" className="ameria-nav-link">
            Խնայողություններ
          </Link>
          <Link to="/tvayin" className="ameria-nav-link">
            Թվային
          </Link>
        </nav>

        <a href="#login" className="ameria-online-btn">
          <span>Օնլայն բանկինգ</span>
          <svg className="ameria-online-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M6 3.5L10.5 8L6 12.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </header>
  );
}