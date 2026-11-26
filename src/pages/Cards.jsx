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

          <div className="card-item">
            <div className="card-item-main">
              <div className="card-item-header">
                <h3 className="card-item-title">Mastercard Rose Gold</h3>
                <span className="card-item-network card-item-network--mc" aria-label="Mastercard">
                  <span className="mc-circle mc-circle--red"></span>
                  <span className="mc-circle mc-circle--orange"></span>
                </span>
              </div>

              <p className="card-item-desc">
                Պրեմիում դասի միջազգային քարտ է, որն առաջարկում է բազմաթիվ հատուկ առաջարկներ և զեղչեր ինչպես տեղական, այնպես էլ միջազգային ընկերությունների ծառայություններից օգտվելիս և անկանխիկ վճարումներ կատարելիս: Մանրամասներին կարող ես ծանոթանալ{' '}
                <a href="#rose-gold-details" className="card-inline-link">հղմամբ</a>:
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
                    բանկոմատներում մինչև 500,000
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
                *Օրացուցային ամսվա ընթացքում Բանկի բանկոմատներում մինչև 500,000 ՀՀ դրամի կանխիկացման միջնորդավճարը 0% է, իսկ 500,000 ՀՀ դրամը գերազանցելու դեպքում` 0,5%:
              </p>

              <div className="card-item-actions">
                <a href="#order-mc-rose-gold" className="card-btn-primary">Պատվիրիր օնլայն</a>
              </div>
            </div>

            <div className="card-item-side">
              <div className="card-visual-placeholder card-visual-placeholder--rose-gold">
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
                <div className="card-item-price">2,000 ՀՀ դրամ ամսական</div>
                <div className="card-item-price card-item-price--secondary">20,000 ՀՀ դրամ տարեկան</div>
                <div className="card-item-price-note">
                  MyAmeria համակարգով պատվիրելու դեպքում` 10,000 ՀՀ դրամ տարեկան
                </div>
              </div>
            </div>
          </div>

          <div className="card-item">
            <div className="card-item-main">
              <div className="card-item-header">
                <h3 className="card-item-title">Ուսանողական քարտ</h3>
                <span className="card-item-network card-item-network--visa">VISA</span>
              </div>

              <p className="card-item-desc">
                Visa միջազգային վճարային համակարգի Ուսանողական քարտ է, որը հնարավորություն է տալիս ուսանողներին տնօրինելու իրենց ֆինանսական միջոցները: Այն հնարավոր է օգտագործել և՛ ՀՀ-ում, և՛ արտերկրում կանխիկ և անկանխիկ գործարքներ կատարելու համար:
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
                <a href="#order-student-card" className="card-btn-primary">Պատվիրիր օնլայն</a>
                <a href="#learn-more-student-card" className="card-btn-secondary">Իմացիր ավելին</a>
              </div>
            </div>

            <div className="card-item-side">
              <div className="card-visual-placeholder card-visual-placeholder--student">
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

              <div className="card-item-price">Անվճար</div>
            </div>
          </div>

          <div className="cards-disclaimers">
            <p className="cards-disclaimer-item">
              ** Բանկի կողմից տրամադրված Ստիկերները գործում են մինչև դրանց գործողության ժամկետի ավարտը, միևնույն ժամանակ նշված քարտատեսակների թողարկումը դադարեցված է:
            </p>
            <p className="cards-disclaimer-item">
              *** 01.07.2023թ-ից Arca Carrefour Smile քարտերի վրա տարածվում են նույն պայմանները, ինչ Arca Classic քարտերի վրա, իսկ քարտերը գործելու են մինչև քարտի ժամկետի ավարտը:
            </p>
          </div>

          <div className="cards-features-grid">
            <div className="cards-feature-col">
              <h3 className="cards-feature-title">Ապահով և անվտանգ</h3>
              <p className="cards-feature-desc">
                Ամերիաբանկի քարտերով անկանխիկ գործարքներն ապահով են և անվտանգ: Մենք միշտ քո կողքին ենք և երաշխավորում ենք քո միջոցների և տվյալների պատշաճ անվտանգությունը1:
              </p>
              <a href="#safe-and-secure" className="cards-feature-link">Իմանալ ավելին</a>
            </div>

            <div className="cards-feature-col">
              <h3 className="cards-feature-title">Հաշվի կառավարում՝ առանց Բանկ գալու</h3>
              <p className="cards-feature-desc">
                MyAmeria օնլայն/ Մոբայլ բանկինգի միջոցով կարող ես կատարել փոխանցումներ, վճարումներ, մարել քո վարկերը, ստուգել հաշիվդ և շատ ավելին:
              </p>
              <a href="#account-management" className="cards-feature-link">Իմանալ ավելին</a>
            </div>

            <div className="cards-feature-col">
              <h3 className="cards-feature-title">PIN կոդի ինքնուրույն սահմանում</h3>
              <p className="cards-feature-desc">
                Եթե ուզում ես հեշտությամբ մտապահել քո քարտի PIN կոդը, ինքնուրույն սահմանի՛ր այն բանկոմատի միջոցով: Եթե այն հասանելի է դարձել երրորդ անձանց, կամ նման կասկած ունես, անվտանգություն ապահովելու համար կարող ես փոխել այն:
              </p>
            </div>
          </div>

          <div className="cards-features-grid">
            <div className="cards-feature-col">
              <h3 className="cards-feature-title">Համատեղ քարտ քեզ և մտերիմներիդ համար</h3>
              <p className="cards-feature-desc">
                Դու կարող ես ձեռք բերել համատեղ քարտ քո մտերիմների հետ և միասին պլանավորվել ու կառավարել ձեր ծախսերը1:
              </p>
              <a href="#joint-card" className="cards-feature-link">Իմանալ ավելին</a>
            </div>

            <div className="cards-feature-col">
              <h3 className="cards-feature-title">USSD ծառայություն</h3>
              <p className="cards-feature-desc">
                Դու կարող ես օրվա ցանկացած ժամի, ցանկացած վայրում բլոկավորել քո քարտը, ստանալ տեղեկություններ քո հաշվի մնացորդի, հասանելի ծառայությունների, վերջին գործարքների վերաբերյալ նաև USSD հրահանգների միջոցով:
              </p>
              <a href="#ussd-service" className="cards-feature-link">Իմանալ ավելին</a>
            </div>

            <div className="cards-feature-col">
              <h3 className="cards-feature-title">Բանկոմատների մեծ ցանց</h3>
              <p className="cards-feature-desc">
                Մեր բանկոմատների ցանցը պատրաստ է սպասարկել քեզ Հայաստանի բոլոր անկյուններում: Բանկոմատների միջոցով դու կարող ես ոչ միայն գումար կանխիկացնել, այլև կատարել կանխիկի ակնթարթային մուտքագրում, կոմունալ վճարումներ և այլ փոխանցումներ:
              </p>
              <a href="#atm-network" className="cards-feature-link">Մասնաճյուղերի ցանց</a>
            </div>
          </div>

          <div className="cards-cta-banner">
            <div className="cards-cta-content">
              <h2 className="cards-cta-title">Դեռ Ամերիաբանկի հաճախորդ չե՞ս</h2>
              <p className="cards-cta-desc">
                Բացի՛ր հաշիվ օնլայն, ստացիր անվճար հաշիվ, մեկ Visa Classic կամ MasterCard Standard քարտ և օնլայն/մոբայլ բանկինգ:
              </p>
              <a href="#apply-online" className="cards-cta-btn">Դիմիր օնլայն</a>
            </div>
            <div className="cards-cta-media">
              <img
                src=""
                alt="Դեռ Ամերիաբանկի հաճախորդ չե՞ս"
                className="cards-cta-img"
              />
            </div>
          </div>

          <div className="cards-terms-section">
            <h2 className="cards-terms-title">Պայմաններ ու սակագներ</h2>

            <nav className="cards-terms-tabs">
              <a href="#terms-faq" className="cards-terms-tab active">Հարց ու պատասխան</a>
              <a href="#terms-debit" className="cards-terms-tab">Դեբետային քարտերի սակագներ</a>
              <a href="#terms-credit" className="cards-terms-tab">Կրեդիտային քարտերի սակագներ</a>
              <a href="#terms-extra" className="cards-terms-tab">Լրացուցիչ տեղեկատվություն</a>
              <a href="#terms-restricted" className="cards-terms-tab">Սահմանափակման ենթակա երկրներ</a>
              <a href="#terms-debit-summary" className="cards-terms-tab">Դեբետային քարտերի ամփոփագիր</a>
              <a href="#terms-credit-summary" className="cards-terms-tab">Կրեդիտային քարտերի ամփոփագիր</a>
              <a href="#terms-previous" className="cards-terms-tab">Նախկին պայմաններ</a>
            </nav>

            <div className="cards-faq-list">
              <div className="cards-faq-item">
                <button type="button" className="cards-faq-question">
                  <span className="cards-faq-icon">+</span>
                  <span className="cards-faq-text">Ի՞նչ արժույթով են Ամերիաբանկի քարտերը:</span>
                </button>
              </div>

              <div className="cards-faq-item">
                <button type="button" className="cards-faq-question">
                  <span className="cards-faq-icon">+</span>
                  <span className="cards-faq-text">Ինչպե՞ս կարող եմ քարտ ստանալ:</span>
                </button>
              </div>

              <div className="cards-faq-item">
                <button type="button" className="cards-faq-question">
                  <span className="cards-faq-icon">+</span>
                  <span className="cards-faq-text">Ի՞նչ է վարկային քարտը:</span>
                </button>
              </div>

              <div className="cards-faq-item">
                <button type="button" className="cards-faq-question">
                  <span className="cards-faq-icon">+</span>
                  <span className="cards-faq-text">Ի՞նչ տեսակի քարտ է Visa Digital-ը:</span>
                </button>
              </div>

              <div className="cards-faq-item">
                <button type="button" className="cards-faq-question">
                  <span className="cards-faq-icon">+</span>
                  <span className="cards-faq-text">Ի՞նչ գործարքներ կարելի է կատարել Visa Digital քարտով:</span>
                </button>
              </div>

              <div className="cards-faq-item">
                <button type="button" className="cards-faq-question">
                  <span className="cards-faq-icon">+</span>
                  <span className="cards-faq-text">Ի՞նչ առավելություն ունի թվային քարտը:</span>
                </button>
              </div>

              <div className="cards-faq-item">
                <button type="button" className="cards-faq-question">
                  <span className="cards-faq-icon">+</span>
                  <span className="cards-faq-text">Ինչպե՞ս կարող եմ պատվիրել Visa Digital քարտ:</span>
                </button>
              </div>

              <div className="cards-faq-item">
                <button type="button" className="cards-faq-question">
                  <span className="cards-faq-icon">+</span>
                  <span className="cards-faq-text">Ի՞նչ անել, եթե չես ստացել CVV կոդը:</span>
                </button>
              </div>

              <div className="cards-faq-item">
                <button type="button" className="cards-faq-question">
                  <span className="cards-faq-icon">+</span>
                  <span className="cards-faq-text">Ի՞նչ անել, եթե մոռացել ես CVV կոդը, ֆորմատավորել կամ կորցրել ես քո սմարթֆոնը:</span>
                </button>
              </div>

              <div className="cards-faq-item">
                <button type="button" className="cards-faq-question">
                  <span className="cards-faq-icon">+</span>
                  <span className="cards-faq-text">Անհրաժե՞շտ է արդյոք ակտիվացնել Visa Digital քարտը:</span>
                </button>
              </div>

              <div className="cards-faq-item">
                <button type="button" className="cards-faq-question">
                  <span className="cards-faq-icon">+</span>
                  <span className="cards-faq-text">Visa Digital քարտն ունի՞ PIN կոդ:</span>
                </button>
              </div>

              <div className="cards-faq-item">
                <button type="button" className="cards-faq-question">
                  <span className="cards-faq-icon">+</span>
                  <span className="cards-faq-text">Visa Digital քարտից հնարավո՞ր է կանխիկացում կատարել:</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}