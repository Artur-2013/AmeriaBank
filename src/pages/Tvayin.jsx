import MyCarCard from './MyCarCard';
import MyWordsCard from './MyWordsCard';
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

      {/* Քարտերի շարք՝ վիդեո քարտը և կողքին փոփոխվող բառերով քարտը */}
      <section className="tvayin-cards-section">
        <div className="tvayin-cards-row">
          <MyCarCard />
          <MyWordsCard />
        </div>
      </section>
    </div>
  );
}