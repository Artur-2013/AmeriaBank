export default function FooterColumn({ title, links }) {
  return (
    <div className="footer-col">
      <h4 className="footer-col__title">{title}</h4>
      <ul className="footer-col__list">
        {links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}