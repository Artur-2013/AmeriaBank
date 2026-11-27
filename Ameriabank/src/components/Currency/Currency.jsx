import ExchangeRates from "./ExchangeRates";
import Calculator from "./Calculator";
import "./Currency.css";

export default function Currency() {
  return (
    <section className="currency">
      <div className="currency__rates">
        <ExchangeRates />
      </div>
      <div className="currency__calc">
        <Calculator />
      </div>
    </section>
  );
}