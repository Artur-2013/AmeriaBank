import { useState } from "react";
import "./Header.css";

const items = ["Անհատներին", "Բիզնեսին", "Ներդրումային"];

export default function TopNav() {
  const [active, setActive] = useState(0);

  return (
    <nav className="top-nav">
      <ul className="top-nav__list">
        {items.map((item, i) => (
          <li key={item}>
            <a
              href="#"
              className={`top-nav__link ${active === i ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setActive(i);
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}