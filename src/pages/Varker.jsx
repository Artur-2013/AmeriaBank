import "./Varker.css";

// Replace `photo` with real image URLs (e.g. import hero from "./img/hero.png")
const heroCards = [
  {
    tag: "#onlineloans",
    title: "Օնլայն վարկեր",
    text: "100,000 ՀՀ դրամից մինչև 20 մլն ՀՀ դրամ վարկեր մի քանի րոպեի ընթացքում",
    photo: null,
  },
  {
    tag: "#Automarket",
    title: "Ավտովարկավորում առևտրային կենտրոնից",
    text: "Ընտրիր ցուցադրահարթակում, ինչպես նաև հրահանգիր ավտո առևտրի վարկերի համար։",
    photo: null,
  },
];

const sections = [
  {
    id: "consumer",
    title: "Սպառողական վարկեր",
    intro: "Օգտվեք մեր սպառողական վարկերից ձեր պլանները կյանքի կոչելու համար։",
    items: ["Սպառողական վարկ", "Օվերդրաֆտ", "Վարկային քարտ", "Սպառում", "Օնլայն ապառիկ"],
    tone: "light",
    photoSide: "right",
  },
  {
    id: "mortgage",
    title: "Հիփոթեքային վարկեր",
    intro: "Եթե ծրագրում եք գնել կամ վերանորոգել տուն, մեր առաջարկները ձեզ համար են։",
    items: [
      "Օնլայն հիփոթեքային վարկ",
      "Հիփոթեքային վարկ առևտրային շինության",
      "Հիփոթեքային վարկ երկրորդային շինության",
      "Անշարժ գույքի ձեռքբերման վարկ",
      "Վերաֆինանսավորման վարկ",
      "Կառուցապատողների վարկ",
    ],
    tone: "tint",
    photoSide: "left",
  },
  {
    id: "auto",
    title: "Ավտովարկեր",
    intro: "Ավտոմեքենայի ձեռքբերման մի քանի հարմար տարբերակ՝",
    items: [
      "Ավտովարկ՝ առանց ապահովագրության",
      "Ավտովարկ առևտրային շինության",
      "Ավտովարկ երկրորդային շինության",
    ],
    tone: "light",
    photoSide: "right",
  },
];

const infoCards = [
  {
    title: "Ներդրումային վարկ",
    text: "Մեծ գումարի կարիք ունեք բիզնեսը զարգացնելու համար։ Ստացեք վարկ հարմար պայմաններով և արագ ձևակերպմամբ։",
  },
  {
    title: "Վարկի մարման հաշվիչ",
    text: "Հաշվարկեք ամսական վճարը և ընդհանուր գումարը մի քանի քայլով։",
  },
  { title: "Օգնություն", text: "Վարկի վերաբերյալ հարցերի պատասխաններ։" },
];

const Photo = ({ src, alt = "" }) => (
  <div className="photo">
    <span className="orbit o1" />
    <span className="orbit o2" />
    <span className="dot d1" />
    <span className="dot d2" />
    <span className="dot d3" />
    {src && <img src={src} alt={alt} />}
  </div>
);

const Actions = ({ more }) => (
  <div className="actions">
    <button className="btn btn-primary">Դիմել օնլայն</button>
    {more && <button className="btn btn-outline">Տեսնել ավելին</button>}
  </div>
);

export default function Varker() {
  return (
    <section className="varker-page">
      <section className="hero band band-tint">
        <div className="container hero-grid">
          <div>
            <h1>Վարկեր</h1>
            <p className="lead">Նոր հնարավորություններ ձեր պլանների համար</p>
            <Actions />
          </div>
          <Photo />
        </div>
      </section>

      <section className="container promo-grid">
        {heroCards.map((c) => (
          <article className="promo" key={c.tag}>
            <Photo src={c.photo} />
            <span className="tag">{c.tag}</span>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
            <button className="btn btn-primary btn-wide">Դիմել օնլայն</button>
          </article>
        ))}
      </section>

      {sections.map((s) => (
        <section
          key={s.id}
          className={`band ${s.tone === "tint" ? "band-tint" : ""}`}
        >
          <div className={`container split ${s.photoSide === "left" ? "reverse" : ""}`}>
            <div className="split-text">
              <h2>{s.title}</h2>
              <p className="lead">{s.intro}</p>
              <ul className="arrow-list">
                {s.items.map((i) => (
                  <li key={i}>
                    <a href="#">{i}</a>
                  </li>
                ))}
              </ul>
              <Actions more />
            </div>
            <Photo />
          </div>
        </section>
      ))}

      <section className="container info-grid">
        {infoCards.map((c) => (
          <article className="info-card" key={c.title}>
            <h4>{c.title}</h4>
            <p>{c.text}</p>
            <a className="info-more" href="#">Իմանալ ավելին</a>
          </article>
        ))}
      </section>

      <section className="container docs">
        <ul>
          <li>
            <a href="#">Վարկերի սակագները և պայմանների ամփոփագիրը՝ PDF</a>
          </li>
        </ul>
      </section>
    </section>
  );
}