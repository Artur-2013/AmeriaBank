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

      <div className="cards-hero-banner">
        <div className="cards-hero-inner">
          <div className="cards-hero-content">
            <h1 className="cards-hero-title">Վճարային քարտեր</h1>
            <p className="cards-hero-subtitle">
              Դիմիր առցանց, ստացիր անվճար Arca Classic, Visa Classic կամ Mastercard Standard քարտ
            </p>
            <a href="#apply" className="cards-hero-btn">Դիմիր հիմա</a>
          </div>
          <div className="cards-hero-media">
            <img
              src=""
              alt="Վճարային քարտեր"
              className="cards-hero-img"
            />
          </div>
        </div>
      </div>

      <div className="cards-planet-section">
        <div className="cards-planet-inner">
          <div className="cards-planet-box">
            <h2 className="cards-planet-title">
              Մոլորա՞կ, թե պլաստիկ
              <br />
              Ընտրիր մոլորակը
            </h2>
            <p className="cards-planet-text">
              Դարձիր ճանաչող և ապահովիր Visa Digital անվճար քարտ, ստացիր 2000Դ բոնուսի...
            </p>
          </div>
          <div className="cards-planet-graphic">
            <span className="cards-planet-badge-text">ՄՈԼՈՐԱ՞Կ ԹԵ ՊԼԱՍՏԻԿ</span>
          </div>
        </div>
      </div>

      <div className="cards-tabs-section">
        <div className="cards-tabs-inner">
          <nav className="cards-tabs-nav">
            <a href="#popular" className="cards-tab-link active">Ամենապահանջվածներ</a>
            <a href="#debit" className="cards-tab-link">Դեբետային քարտեր</a>
            <a href="#credit" className="cards-tab-link">Կրեդիտային քարտեր</a>
          </nav>
        </div>
      </div>
    </section>
  );
}