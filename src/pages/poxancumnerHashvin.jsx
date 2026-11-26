import "./poxancumnerHashvin.css";

function PoxancumnerHashvin() {
  return (
    <>
      {/* 1. Հերոս հատված */}
      <section className="ph-hero">
        <button className="ph-side-tab">Թողնել կարծիք</button>

        <div className="ph-text">
          <h1>Փոխանցում հաշվին</h1>
          <p>Մեզ հետ աշխարհն այնքան մոտ է</p>
        </div>

        <img
          className="ph-image"
          src="https://ameriabank.am/Portals/0/Images/internal-pages/transfer-to-account.png"
          alt="Փոխանցում հաշվին"
        />

        <div className="ph-chat">
          <div className="ph-chat-bubble">Հարցեր ունե՞ս</div>
          <button className="ph-chat-btn">💬</button>
        </div>
      </section>

      {/* 2. Տեքստի հատված */}
      <section className="ph-content">
        <div className="ph-main">
          <h2>Փոխանցում հաշվին Հայաստանում</h2>

          <p>
            Քեզ անհրաժեշտ է կատարել փոխանցումներ վճարման հանձնարարագրերի հիման
            վրա։ Ամերիաբանկի ցանկացած մասնաճյուղում, Օնլայն/Մոբայլ բանկինգ և
            հեռախոսային բանկինգ ծառայությունների միջոցով դու կարող ես անել
            փոխանցումներ Հայաստանի և օտարերկրյա բանկեր ինչպես ՀՀ դրամով, այնպես
            էլ արտարժույթով։
          </p>
          <p>
            Վճարման հանձնարարագրերի հիման վրա փոխանցումները կատարվում են
            յուրաքանչյուր բանկային օր՝ գործառնական ժամերին, իսկ «ՀՀ
            Բանկ-հաճախորդ» համակարգի միջոցով ստացվող հանձնարարագրերը՝ ավտոմատ
            կերպով։
          </p>
          <p>
            Բանկային ծառայություններից օգտվելիս դու պետք է ունենաս ՀՀ դրամով
            բանկային հաշիվ։
          </p>
          <p>
            Հաշվի մասին ամբողջական տեղեկատվությունը տե՛ս{" "}
            <a href="#">այստեղ</a>։
          </p>
        </div>

        <aside className="ph-sidebar">
          <a href="#" className="active">Փոխանցումներ հաշվին</a>
          <a href="#">Փոխանցումներ հեռախոսահամարով</a>
          <a href="#">Քարտից քարտ փոխանցումներ</a>
        </aside>
      </section>
            {/* 3. «Դեռ չունե՞ս հաշիվ» բլոկ */}
      <section className="ph-promo-wrap">
        <div className="ph-promo">
          <div className="ph-promo-text">
            <h2>Դեռ չունե՞ս հաշիվ Ամերիաբանկում</h2>
            <p>
              Բացիր հաշիվ օնլայն, ստացիր անվճար հաշիվ, մեկ Visa Classic կամ
              MasterCard Standard քարտ և օնլայն/մոբայլ բանկինգ։
            </p>
            <button className="ph-promo-btn">Դիմիր օնլայն</button>
          </div>

          <img
            className="ph-promo-img"
            src="https://ameriabank.am/Portals/0/Images/New-home/cta2.png"
            alt="Դիմիր օնլայն"
          />
        </div>
      </section>
    </>
  );
}

export default PoxancumnerHashvin;