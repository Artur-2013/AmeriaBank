import { Users, Phone, MapPin, Search, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import "./Header.css";

export default function MainNav() {
    const languages = ["ՀԱՅ", "ENG", "РУС"];

const [open, setOpen] = useState(false);
const [lang, setLang] = useState("ՀԱՅ");
const langRef = useRef(null);

// սեղմելով դրսում՝ ցանկը փակվի
useEffect(() => {
  const handleClickOutside = (e) => {
    if (langRef.current && !langRef.current.contains(e.target)) {
      setOpen(false);
    }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);
    return (
    
    <div className="main-nav">
      <a href="#" className="main-nav__item">
        <Users size={20} />
        <span>IR</span>
      </a>

      <a href="#" className="main-nav__item">
        <span>Բանկի մասին</span>
      </a>

      <a href="tel:+37410561111" className="main-nav__item">
        <Phone size={20} />
        <span>+374 10 56 11 11</span>
      </a>

      <a href="#" className="main-nav__item">
        <MapPin size={20} />
        <span>Մասնաճյուղեր</span>
      </a>

      <button className="main-nav__icon-btn" aria-label="Որոնել">
        <Search size={20} />
      </button>

   <div className="lang" ref={langRef}>
  <button className="main-nav__lang" onClick={() => setOpen(!open)}>
    <span>{lang}</span>
    <ChevronDown size={16} className={open ? "rotated" : ""} />
  </button>

  {open && (
    <ul className="lang__menu">
      {languages.map((l) => (
        <li key={l}>
          <button
            className={`lang__option ${l === lang ? "active" : ""}`}
            onClick={() => {
              setLang(l);
              setOpen(false);
            }}
          >
            {l}
          </button>
        </li>
      ))}
    </ul>
  )}
</div>
    </div>
  );
}