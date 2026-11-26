import { useState } from "react";
import "./poxancumnerHashvin.css";

// Կանաչ շապիկով աղջկա նկարի հղումը կպցրու այստեղ
const PROMO_IMG = "";

function PoxancumnerHashvin() {
  const [tab, setTab] = useState(0);

  const tabs = [
    {
      title: "Վճարման հանձնարարականներ",
      text: "Բանկը թղթային եղանակով և հեռակառավարման համակարգերով վճարման հանձնարարականները ընդունում և փոխանցման ենթակա գումարը հաշվից ելքագրում է համաձայն ստորև սահմանված ժամանակացույցի՝ հաճախորդի հաշվին փոխանցման ենթակա գումարի փաստացի առկայության պարագայում։",
    },
    {
      title: "Օգտակար հղումներ",
      text: "Այստեղ կլինեն օգտակար հղումները։",
    },
    {
      title: "Քեզ կհետաքրքրի նաև",
      text: "Այստեղ կլինեն առաջարկվող ծառայությունները։",
    },
  ];

  return (
    <>
      {/* 1. Հերոս */}
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

      {/* 2. Տեքստ + կողմնային մենյու */}
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

      {/* 3. Դեռ չունե՞ս հաշիվ */}
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
          <img className="ph-promo-img" src={PROMO_IMG} alt="Դիմիր օնլայն" />
        </div>
      </section>

      {/* 4. Պայմաններ և սակագներ */}
      <section className="ph-terms">
        <h2>Պայմաններ և սակագներ</h2>

        <div className="ph-tabs">
          {tabs.map((t, i) => (
            <button
              key={i}
              className={`ph-tab ${tab === i ? "active" : ""}`}
              onClick={() => setTab(i)}
            >
              {t.title}
            </button>
          ))}
        </div>

        <p className="ph-terms-text">{tabs[tab].text}</p>

        {/* Աղյուսակը երևում է միայն առաջին tab-ում */}
        {tab === 0 && (
          <div className="ph-table-wrap">
            <table className="ph-table">
              <thead>
                <tr className="ph-table-group">
                  <th colSpan={4}>
                    Թղթային եղանակով ներկայացվող վճարման հանձնարարականներ
                  </th>
                  <th colSpan={4}>
                    Ինտերնետ/ Մոբայլ-բանկինգ համակարգով, Հեռախոս – բանկ
                    ծառայության միջոցով ներկայացվող վճարման հանձնարարականներ
                    <div className="ph-table-note">
                      (բացառությամբ ներբանկային փոխանցումների, որոնք փոխանցվում
                      են ոչ ուշ, քան հաջորդ բանկային օրը)
                    </div>
                  </th>
                </tr>
                <tr className="ph-table-head">
                  <th>Ընդունում</th>
                  <th>Հաշվից ելքագրում</th>
                  <th>Ընդունում</th>
                  <th>Հաշվից ելքագրում</th>
                  <th>Ընդունում</th>
                  <th>Հաշվից ելքագրում</th>
                  <th>Ընդունում</th>
                  <th>Հաշվից ելքագրում</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Մինչև ժամը 16:00</td>
                  <td>Նույն բանկային օրը</td>
                  <td>Ժամը 16:00-ից հետո</td>
                  <td>Հաջորդ բանկային օրը</td>
                  <td>Մինչև ժամը 17:00</td>
                  <td>Նույն բանկային օրը</td>
                  <td>Ժամը 17:00-ից հետո</td>
                  <td>Հաջորդ բանկային օրը</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        <hr className="ph-terms-line" />
      </section>
    </>
  );
}

export default PoxancumnerHashvin;