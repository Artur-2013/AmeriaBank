import './Cards.css';

export default function Cards() {
  return (
    <section className="cards-page">
      <div className="top-utility-bar">
        <div className="top-utility-inner">
          <nav className="segment-nav">
            <a href="#individuals" className="segment-link">ԱՆՀԱՏՆԵՐԻՆ</a>
            <a href="#business" className="segment-link">ԲԻԶՆԵՍԻՆ</a>
            <a href="#investment" className="segment-link">ՆԵՐԴՐՈՒՄԱՅԻՆ</a>
          </nav>
        </div>
      </div>
    </section>
  );
}