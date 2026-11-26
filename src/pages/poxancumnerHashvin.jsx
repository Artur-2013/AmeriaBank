import "./poxancumnerHashvin.css";
const girl="https://ameriabank.am/Portals/0/Images/internal-pages/transfer-to-account.png";

function PoxancumnerHashvin() {
  return (
    <section className="ph-hero">
      <button className="ph-side-tab">Թողնել կարծիք</button>

      <div className="ph-text">
        <h1>Փոխանցում հաշվին</h1>
        <p>Մեզ հետ աշխարհն այնքան մոտ է</p>
      </div>

      <img className="ph-image" src={girl} alt="Փոխանցում հաշվին" />

      <div className="ph-chat">
        <div className="ph-chat-bubble">Հարցեր ունե՞ս</div>
        <button className="ph-chat-btn">💬</button>
      </div>
    </section>
  );
}

export default PoxancumnerHashvin;