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

      <div className="cards-list-section">
        <div className="cards-list-inner">
          <div className="card-item">
            <div className="card-item-main">
              <div className="card-item-header">
                <span className="card-item-badge">Նորույթ</span>
                <h3 className="card-item-title">Ամերիա կենսաթոշակային քարտ</h3>
                <span className="card-item-network">arca</span>
              </div>

              <p className="card-item-desc">
                Տրամադրվում է թոշակառուներին: Նախատեսված է անկանխիկ վճարումներ, կանխիկացում կատարելու համար Arca վճարային համակարգում: Տրամադրվում է միայն ՀՀ դրամով:
              </p>

              <div className="card-item-specs">
                <div className="card-spec">
                  <div className="card-spec-value">10 տարի</div>
                  <div className="card-spec-label">Գործողության ժամկետ</div>
                </div>
                <div className="card-spec">
                  <div className="card-spec-value">0%</div>
                  <div className="card-spec-label">Կանխիկացում Բանկի բանկոմատներում</div>
                </div>
                <div className="card-spec">
                  <div className="card-spec-value">ՀՀ դրամով</div>
                  <div className="card-spec-label">Արժույթ</div>
                </div>
              </div>

              <div className="card-item-actions">
                <a href="#order-branch" className="card-btn-primary">Պատվիրիր մասնաճյուղում</a>
                <a href="#learn-more" className="card-btn-secondary">Իմացիր ավելին</a>
              </div>
            </div>

            <div className="card-item-side">
              <div className="card-visual-placeholder">
                <div className="card-visual-top">
                  <span className="card-visual-logo">Λ AMERIABANK</span>
                  <span className="card-visual-contactless">)))</span>
                </div>
                <div className="card-visual-middle">
                  <span className="card-visual-chip"></span>
                  <span className="card-visual-tagline">bank about you</span>
                </div>
                <div className="card-visual-bottom">
                  <span className="card-visual-brand">arca</span>
                </div>
              </div>

              <div className="card-item-price">Անվճար</div>
            </div>
          </div>

          <div className="card-item">
            <div className="card-item-main">
              <div className="card-item-header">
                <h3 className="card-item-title">Visa Classic Digital</h3>
                <span className="card-item-network card-item-network--visa">VISA</span>
              </div>

              <p className="card-item-desc">
                Visa միջազգային վճարային համակարգի վիրտուալ քարտ է, որը հնարավոր է պատվիրել MyAmeria համակարգի միջոցով, և որի միջոցով հնարավոր է իրականացնել անկանխիկ քարտային գործարքներ և՛ ՀՀ-ում, և՛ արտերկրում։ Քարտը հասանելի է լինում հայտը MyAmeria համակարգի միջոցով ներկայացնելուց մեկ աշխատանքային օրվա ընթացքում։
              </p>

              <div className="card-item-specs">
                <div className="card-spec">
                  <div className="card-spec-value">4 տարի</div>
                  <div className="card-spec-label">Գործողության ժամկետ</div>
                </div>
                <div className="card-spec">
                  <div className="card-spec-value">Կանխիկացում</div>
                  <div className="card-spec-label">միայն MyAmeria-ով</div>
                </div>
                <div className="card-spec">
                  <div className="card-spec-value">Արժույթ</div>
                  <div className="card-spec-label">ՀՀ դրամով, ԱՄՆ դոլարով, Եվրոյով</div>
                </div>
              </div>

              <div className="card-item-actions">
                <a href="#order-online" className="card-btn-primary">Պատվիրիր օնլայն</a>
                <a href="#learn-more-visa-digital" className="card-btn-secondary">Իմացիր ավելին</a>
              </div>
            </div>

            <div className="card-item-side">
              <div className="card-visual-placeholder card-visual-placeholder--digital">
                <div className="card-visual-top">
                  <span className="card-visual-logo">Λ AMERIABANK</span>
                </div>
                <div className="card-visual-middle">
                  <span></span>
                  <span className="card-visual-tagline">bank about you</span>
                </div>
                <div className="card-visual-bottom">
                  <span className="card-visual-brand card-visual-brand--visa">VISA</span>
                </div>
              </div>

              <div className="card-item-price">տարեկան 1,000 ՀՀ դրամ</div>
            </div>
          </div>

          <div className="card-item">
            <div className="card-item-main">
              <div className="card-item-header">
                <h3 className="card-item-title">Visa Classic</h3>
                <span className="card-item-network card-item-network--visa">VISA</span>
              </div>

              <p className="card-item-desc">
                Միջազգային վճարային քարտ է, որը հնարավոր է օգտագործել և՛ ՀՀ-ում, և՛ արտերկրում կանխիկ և անկանխիկ գործարքներ կատարելու համար:
              </p>

              <div className="card-item-specs">
                <div className="card-spec">
                  <div className="card-spec-value">4 տարի</div>
                  <div className="card-spec-label">Գործողության ժամկետ</div>
                </div>
                <div className="card-spec">
                  <div className="card-spec-value">0%</div>
                  <div className="card-spec-label">
                    Քարտով կանխիկացում Բանկի
                    <br />
                    բանկոմատներում մինչև 300,000
                    <br />
                    ՀՀ դրամ/ամիս*
                  </div>
                </div>
                <div className="card-spec">
                  <div className="card-spec-value">1%</div>
                  <div className="card-spec-label">
                    Կանխիկացում այլ բանկի
                    <br />
                    բանկոմատներում
                  </div>
                </div>
              </div>

              <p className="card-item-footnote">
                *Օրացուցային ամսվա ընթացքում Բանկի բանկոմատներում մինչև 300,000 ՀՀ դրամի կանխիկացման միջնորդավճարը 0% է, իսկ 300,000 ՀՀ դրամը գերազանցելու դեպքում` 0,5%:
              </p>

              <div className="card-item-actions">
                <a href="#order-visa-classic" className="card-btn-primary">Պատվիրիր օնլայն</a>
                <a href="#become-client" className="card-btn-secondary">Դարձիր հաճախորդ</a>
              </div>
            </div>

            <div className="card-item-side">
              <div className="card-visual-placeholder">
                <div className="card-visual-top">
                  <span className="card-visual-logo">Λ AMERIABANK</span>
                  <span className="card-visual-contactless">)))</span>
                </div>
                <div className="card-visual-middle">
                  <span className="card-visual-chip"></span>
                  <span className="card-visual-tagline">bank about you</span>
                </div>
                <div className="card-visual-bottom">
                  <span className="card-visual-brand card-visual-brand--visa">VISA</span>
                </div>
              </div>

              <div className="card-item-price-box">
                <div className="card-item-price">տարեկան 5,000 ՀՀ դրամ</div>
                <div className="card-item-price-note">
                  MyAmeria համակարգով պատվիրելու դեպքում` 2,500 ՀՀ դրամ
                </div>
              </div>
            </div>
          </div>

          <div className="card-item">
            <div className="card-item-main">
              <div className="card-item-header">
                <h3 className="card-item-title">Mastercard Standard</h3>
                <span className="card-item-network card-item-network--mc" aria-label="Mastercard">
                  <span className="mc-circle mc-circle--red"></span>
                  <span className="mc-circle mc-circle--orange"></span>
                </span>
              </div>

              <p className="card-item-desc">
                Միջազգային վճարային քարտ է, որը հնարավոր է օգտագործել և՛ ՀՀ-ում, և՛ արտերկրում կանխիկ և անկանխիկ գործարքներ կատարելու համար:
              </p>

              <div className="card-item-specs">
                <div className="card-spec">
                  <div className="card-spec-value">4 տարի</div>
                  <div className="card-spec-label">Գործողության ժամկետ</div>
                </div>
                <div className="card-spec">
                  <div className="card-spec-value">0%</div>
                  <div className="card-spec-label">
                    Քարտով կանխիկացում Բանկի
                    <br />
                    բանկոմատներում մինչև 300,000
                    <br />
                    ՀՀ դրամ/ամիս*
                  </div>
                </div>
                <div className="card-spec">
                  <div className="card-spec-value">1%</div>
                  <div className="card-spec-label">
                    Կանխիկացում այլ բանկի
                    <br />
                    բանկոմատներում
                  </div>
                </div>
              </div>

              <p className="card-item-footnote">
                *Օրացուցային ամսվա ընթացքում Բանկի բանկոմատներում մինչև 300,000 ՀՀ դրամի կանխիկացման միջնորդավճարը 0% է, իսկ 300,000 ՀՀ դրամը գերազանցելու դեպքում` 0,5%:
              </p>

              <div className="card-item-actions">
                <a href="#order-mc-standard" className="card-btn-primary">Պատվիրիր օնլայն</a>
                <a href="#become-client-mc" className="card-btn-secondary">Դարձիր հաճախորդ</a>
              </div>
            </div>

            <div className="card-item-side">
              <div className="card-visual-placeholder">
                <div className="card-visual-top">
                  <span className="card-visual-logo">Λ AMERIABANK</span>
                  <span className="card-visual-contactless">)))</span>
                </div>
                <div className="card-visual-middle">
                  <span className="card-visual-chip"></span>
                  <span className="card-visual-tagline">bank about you</span>
                </div>
                <div className="card-visual-bottom">
                  <span className="card-visual-brand--mc" aria-hidden="true">
                    <span className="mc-circle mc-circle--red"></span>
                    <span className="mc-circle mc-circle--orange"></span>
                  </span>
                </div>
              </div>

              <div className="card-item-price-box">
                <div className="card-item-price">տարեկան 5,000 ՀՀ դրամ</div>
                <div className="card-item-price-note">
                  MyAmeria համակարգով պատվիրելու դեպքում` 2,500 ՀՀ դրամ
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}