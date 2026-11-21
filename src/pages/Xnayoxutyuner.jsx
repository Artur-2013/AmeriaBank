import './Xnayoxutyuner.css';

const HERO_IMG = 'https://ameriabank.am/Portals/0/Images/internal-pages/savings-banner.png'; 

export default function Xnayoxutyuner() {
  return (
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
  );
}