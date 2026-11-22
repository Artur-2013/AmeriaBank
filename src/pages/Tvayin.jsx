import MyCarCard from './MyCarCard';
import './Tvayin.css';

export default function Tvayin() {
  return (
    <div className="tvayin-wrapper">
      {/* Վերևի բաններ */}
      <section className="tvayin-banner">
        <div className="tvayin-banner__content">
          <h1 className="tvayin-banner__title">Իմ թվային Ամերիան</h1>
          <p className="tvayin-banner__subtitle">
            Ավելին, քան բանկինգ. քո թվային էկոհամակարգը
          </p>
        </div>
      </section>

      {/* Քարտերի շարք (ձախից սկսվող) */}
      <section className="tvayin-cards-section">
        <div className="tvayin-cards-row">
          <MyCarCard />
          {/* Հաջորդ քարտը կդնես հենց այստեղ՝ <MyCarCard />-ի տակ */}
        </div>
      </section>
    </div>
  );
}