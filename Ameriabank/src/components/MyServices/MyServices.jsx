import { useState } from "react";
import { Plus, ArrowRight, Ellipsis } from "lucide-react";
import "./MyServices.css";

const services = [
  {
    id: "MyHome",
    subtitle: "Տուն գնելը երբեք այսքան հեշտ չի եղել",
    text: "Ընտրիր քո նոր բնակարանը, ստացիր վարկային հայտի նախապախանն օնլայն մի քանի րոպեում, այցելիր նոտարական գրասենյակ և ստորագրիր...",
    background: "https://ameriabank.am/Portals/0/Images/myameria/slider/myhome-banner.jpg",
  },
  {
    id: "MyCar",
    subtitle: "Մեկ օրում քո նոր մեքենայի ղեկին",
    text: "Ընտրիր քո նոր մեքենան՝ ըստ ամսական վճարի, մեքենայի մակնիշի, մոդելի և այլ չափանիշների, ստացիր վարկի նախնական հաստատումն օնլայն, այցելի...",
    background: "https://ameriabank.am/Portals/0/Images/myameria/slider/mycar-banner.jpg",
  },
  {
    id: "MyInvest",
    subtitle: "Ներդրումները քո ափում",
    text: "Կատարիր ներդրում MyInvest-ով և ստեղծիր քո լրացուցիչ եկամուտի աղբյուրը",
    background: "https://ameriabank.am/Portals/0/Images/myameria/slider/myinvest-banner.jpg",
  },
  {
    id: "MyBusiness",
    subtitle: "Թվային հարթակ",
    text: "Բիզնեսի համար ստեղծված էկոհամակարգ, որը գործում է մեկ պատուհանի սկզբունքով և տրամադրում բիզնեսին անհրաժեշտ ծառայություններն օնլայն...",
    background: "https://ameriabank.am/Portals/0/Images/myameria/slider/mybusiness-banner.jpg",
  },
];

export default function MyServices() {
  const [active, setActive] = useState(0);
  const service = services[active];

  return (
    <section
      className="my-services"
      style={{ backgroundImage: `url(${service.background})` }}
    >
      <div className="my-services__overlay" />

      <div className="my-services__content">
        <h2 className="my-services__title">{service.id}</h2>
        <h3 className="my-services__subtitle">{service.subtitle}</h3>
        <p className="my-services__text">{service.text}</p>

        <a href="#" className="my-services__more">
          Իմանալ ավելին
        </a>

        <div className="my-services__frame">
          <div className="my-services__actions">
            <button className="my-services__action my-services__action--filled" aria-label="Ավելացնել">
              <Plus size={14} />
            </button>
            <button className="my-services__action" aria-label="Անցնել">
              <ArrowRight size={14} />
            </button>
            <button className="my-services__action" aria-label="Ավելին">
              <Ellipsis size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className="my-services__tabs">
        {services.map((s, i) => (
          <button
            key={s.id}
            className={`my-services__tab ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
          >
            {s.id}
          </button>
        ))}
      </div>
    </section>
  );
}