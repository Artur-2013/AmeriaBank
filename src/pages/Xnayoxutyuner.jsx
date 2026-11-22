import './Xnayoxutyuner.css';

const IMAGES = {
  hero: 'https://ameriabank.am/Portals/0/Images/internal-pages/savings-banner.png',
  girl: 'https://ameriabank.am/Portals/0/Images/New-home/cta2.png',
};
function ArrowIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

const iconProps = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: '#fff',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

function PhoneIcon() {
  return (
    <svg {...iconProps}>
      <rect x="6" y="2" width="12" height="20" rx="2.5" />
      <path d="M10.5 19h3" />
      <path d="M9.5 15l2.5-7 2.5 7" />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="7" width="18" height="13" rx="2.5" />
      <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7" />
      <path d="M3 12h18" />
      <circle cx="12" cy="12" r="1.2" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <path d="M7 15l3-3 3 2 4-5" />
      <path d="M14 9h3v3" />
    </svg>
  );
}

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

const SERVICES = [
  {
    id: 1,
    title: 'MyAmeria',
    Icon: PhoneIcon,
    text: 'MyAmeria-ն թույլ է տալիս բանկային հիմնական գործարքներն իրականացնել iOS, Android և Web հարթակներում՝ առանց բանկ այցելելու:',
    link: '/myameria',
  },
  {
    id: 2,
    title: 'Վճարային քարտեր',
    Icon: WalletIcon,
    text: 'Բացահայտիր Visa և Mastercard վճարային քարտերի մեր լայն տեսականին: Վայելիր անխափան գործարքների և համաշխարհային հասանելիության առավելությունները:',
    link: '/cards',
  },
  {
    id: 3,
    title: 'Բրոքերային հաշիվ',
    Icon: ChartIcon,
    text: 'Բացեք բրոքերային հաշիվ և վաստակեք արժեթղթերի շուկայի միջոցով՝ գնելով համաշխարհային գիգանտ կազմակերպությունների բաժնետոմսեր և պարտատոմսեր:',
    link: '/broker',
  },
];

/* ---------- Ներքին կոմպոնենտներ ---------- */

function SavingCard({ image, title, text, link }) {
  return (
    <article className="saving-card">
      <div className="saving-card__image">
        <img src={image} alt={title} loading="lazy" />
      </div>

      <a href={link} className="saving-card__title">
        {title}
        <span className="saving-card__arrow">
          <ArrowIcon />
        </span>
      </a>

      <p className="saving-card__text">{text}</p>

      <a
  href={link}
  className="saving-card__btn"
  aria-label={`Իմանալ ավելին՝ ${title}`}
>
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
          <img src={IMAGES.girl} alt="Օնլայն ավանդ" loading="lazy" />
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

function ServiceCard({ title, Icon, text, link }) {
  return (
    <article className="service-card">
      <div className="service-card__body">
        <div className="service-card__head">
          <h3 className="service-card__title">{title}</h3>
          <span className="service-card__icon">
            <Icon />
          </span>
        </div>
        <p className="service-card__text">{text}</p>
      </div>

      <a
        href={link}
        className="service-card__footer"
        aria-label={`Իմանալ ավելին՝ ${title}`}
      >
        Իմանալ ավելին
        <ArrowIcon size={22} />
      </a>
    </article>
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
            <img
  src={IMAGES.hero}
  alt="Մայրիկն ու երեխան՝ խնայողությունների բաժնի պաստառ"
/>
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

      {/* Ծառայություններ */}
      <section className="services">
        <div className="services__grid">
          {SERVICES.map((item) => (
            <ServiceCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </>);
}