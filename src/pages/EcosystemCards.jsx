import './EcosystemCards.css';

const CARDS_DATA = [
  {
    id: 'myameria',
    image:
      'https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/myameria.png',
    alt: 'MyAmeria',
    description:
      'Բանկային ու ոչ բանկային գործարքներ կատարելու քո հավելվածը',
    primaryBtn: 'Մուտք MyAmeria',
    secondaryBtn: 'Իմանալ ավելին',
  },
  {
    id: 'myhome',
    image:
      'https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/home.png',
    alt: 'MyHome',
    description:
      'Տուն գնելու, վաճառելու և վարձակալելու քո օնլայն հարթակը',
    primaryBtn: 'Դիմել օնլայն',
    secondaryBtn: 'Իմանալ ավելին',
  },
  {
    id: 'mycar',
    image:
      'https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/car.png',
    alt: 'MyCar',
    description:
      'Մեքենա գնելու և վաճառելու քո օնլայն հարթակը',
    primaryBtn: 'Դիմել օնլայն',
    secondaryBtn: 'Իմանալ ավելին',
  },
  {
    id: 'myinvest',
    image:
      'https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/invest.png',
    alt: 'MyInvest',
    description:
      'Ներդրումներ կատարելու քո օնլայն հարթակը',
    primaryBtn: 'Բացել հիմա',
    secondaryBtn: 'Իմանալ ավելին',
  },
  {
    id: 'mybusiness',
    image:
      'https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/business.png',
    alt: 'MyBusiness',
    description:
      'Բիզնեսը կառավարելու քո օնլայն հարթակը',
    primaryBtn: 'Դիմել հիմա',
    secondaryBtn: 'Իմանալ ավելին',
  },
  {
    id: 'myameriastar',
    image:
      'https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/star.png',
    alt: 'MyAmeria Star',
    description:
      'Գումարը կառավարելու երեխաների հավելվածը',
    primaryBtn: 'Դիմել օնլայն',
    secondaryBtn: 'Իմանալ ավելին',
  },
  {
    id: 'mypay',
    image:
      'https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/pay.png',
    alt: 'MyPay',
    description:
      'Գնելու և մաս-մաս վճարելու քո օնլայն գործիքը',
    primaryBtn: 'Դիմել հիմա',
    secondaryBtn: 'Իմանալ ավելին',
  },
  {
    id: 'myeventhub',
    image:
      'https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/myeventhub.png',
    alt: 'MyEventHub',
    description:
      'Քո սիրելի միջոցառումներին և փորձառություններին միանալու օնլայն հարթակը',
    primaryBtn: 'Գնել տոմս',
    secondaryBtn: 'Իմանալ ավելին',
  },
  {
    id: 'mytour',
    image:
      'https://ameriabank.am/Portals/0/Images/campaigns/mycampaigns/mytour.png',
    alt: 'MyTour',
    description:
      'Ուղևորությունդ պլանավորելու քո օնլայն հարթակը',
    primaryBtn: 'Ամրագրել օնլայն',
    secondaryBtn: 'Իմանալ ավելին',
  },
];

export default function EcosystemCards() {
  return (
    <section className="eco-section">
      <div className="eco-grid">
        {CARDS_DATA.map((card) => (
          <article key={card.id} className="eco-card">
            <div className="eco-card__media">
              <img
                src={card.image}
                alt={card.alt}
                className="eco-card__img"
              />
            </div>

            <div className="eco-card__body">
              <p className="eco-card__desc">{card.description}</p>

              <div className="eco-card__actions">
                <button type="button" className="eco-card__btn eco-card__btn--primary">
                  {card.primaryBtn}
                </button>
                <button type="button" className="eco-card__btn eco-card__btn--secondary">
                  {card.secondaryBtn}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}