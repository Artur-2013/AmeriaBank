import './Xnayoxutyuner.css';

const IMAGES = {
  hero: 'https://ameriabank.am/Portals/0/Images/internal-pages/savings-banner.png',
  girl: 'https://ameriabank.am/Portals/0/Images/New-home/cta2.png',
};
const OPTIONS = [
  {
    id: 1,
    image: 'https://ameriabank.am/Portals/0/Images/deposit/deposit-illustration.png',
    title: 'Ամերիա ավանդ',
    text: 'Սա ժամկետային ավանդատեսակ է, որի պայմանագրի գործողության ժամկետում դու չես կարող ավելացնել կամ նվազեցնել ավանդի գումարը կամ փոխարկել ավանդը մեկ արժույթից մեկ այլ արժույթի:',
    link: '/avand',
  },
  {
    id: 2,
    image: 'https://ameriabank.am/Portals/0/Images/deposit/kutakayin-2-deposit.png',
    title: 'Ամերիա կուտակային ավանդ',
    text: 'Սա ժամկետային ավանդատեսակ է, որի պայմանագրի գործողության ժամկետում դու ունես ավանդի գումարն ավելացնելու հնարավորություն:',
    link: '/kutakayin-avand',
  },
  {
    id: 3,
    image: 'https://ameriabank.am/Portals/0/Images/deposit/bonds-illustration.png',
    title: 'Խնայողական հաշիվ',
    text: 'Դու կարող ես ներդնել որոշակի գումար՝ դրա նկատմամբ հաշվարկվող հարմար տոկոսադրույքով, ցանկացած ժամանակ ավելացնել կամ նվազեցնել գումարը, ինչպես նաև օգտագործել այն՝ առանց սահմանափակումների:',
    link: '/xnayoxakan-hashiv',
  },
  {
    id: 4,
    image: 'https://ameriabank.am/Portals/0/Images/deposit/bonds-illustration.png',
    title: 'Պարտատոմսեր',
    text: 'Դու ևս կարող ես դառնալ պարտատոմսերի սեփականատեր և պարբերաբար տոկոսագումարներ ստանալ արժեկտրոնի տեսքով:',
    link: '/partatomser',
  },
  {
    id: 5,
    image: 'https://ameriabank.am/Portals/0/Images/deposit/deposit-illustration.png',
    title: 'Ամերիա Մանկական ավանդ',
    text: 'Սա ժամկետային ավանդատեսակ է, որի պայմանագրի գործողության ժամկետում դու չես կարող ավելացնել կամ նվազեցնել ավանդի գումարը կամ փոխարկել ավանդը մեկ արժույթից մեկ այլ արժույթի:',
    link: '/mankakan-avand',
  },
];

/* ---------- Ներքին կոմպոնենտներ ---------- */

function SavingCard({ image, title, text, link }) {
  return (
    <article className="saving-card">
      <div className="saving-card__image">
        <img src={image} alt={title} />
      </div>

      <a href={link} className="saving-card__title">
        {title}
        <span className="saving-card__arrow">→</span>
      </a>

      <p className="saving-card__text">{text}</p>

      <a href={link} className="saving-card__btn">
        Իմանալ ավելին
      </a>
    </article>
  );
}

function OnlineDeposit() {
  return (
    <section className="online-deposit">
      <div className="online-deposit__card">
        <div className="online-deposit__image">
          <img src={IMAGES.girl} alt="Օնլայն ավանդ" />
        </div>

        <div className="online-deposit__content">
          <h2 className="online-deposit__title">Օնլայն ավանդ</h2>

          <p className="online-deposit__text">
            Մի քանի պարզ քայլով մի քանի րոպեում բացիր ավանդային հաշիվ
            Ամերիայում օնլայն:
          </p>

          <div className="online-deposit__actions">
            <a
              href="/myameria"
              className="online-deposit__btn online-deposit__btn--primary"
            >
              MyAmeria
            </a>
            <a
              href="/become-client"
              className="online-deposit__btn online-deposit__btn--outline"
            >
              Դառնալ հաճախորդ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Էջ ---------- */

export default function Xnayoxutyuner() {
  return (
    <>
      {/* Հերո */}
      <section className="xnayoxutyuner-page">
        <div className="xnayoxutyuner-hero">
          <div className="xnayoxutyuner-text">
            <h1 className="xnayoxutyuner-title">Խնայողություններ</h1>
            <p className="xnayoxutyuner-subtitle">
              Մենք քո նպատակներին թևեր ենք տալիս
            </p>
            <button type="button" className="xnayoxutyuner-btn">
              Ավանդի հաշվիչ
            </button>
          </div>

          <div className="xnayoxutyuner-image">
            <img src={HERO_IMG} alt="Խնայողություններ" />
          </div>
        </div>
      </section>

      {/* Խնայողության տարբերակներ */}
      <section className="saving-options">
        <h2 className="saving-options__title">Խնայողության տարբերակներ</h2>

        <div className="saving-options__grid">
          {OPTIONS.map((item) => (
            <SavingCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* Օնլայն ավանդ */}
      <OnlineDeposit />
    </>
  );
}