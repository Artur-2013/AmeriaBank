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