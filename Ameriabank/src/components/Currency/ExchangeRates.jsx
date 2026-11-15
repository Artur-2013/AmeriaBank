import { useState } from "react";
import { rates, format } from "./rates";
import "./ExchangeRates.css";

export default function ExchangeRates() {
  const [type, setType] = useState("exchange"); // exchange | gold

  return (
    <div className="rates">
      <h2 className="rates__heading">Տարադրամի փոխարժեքն այսօր</h2>
      <p className="rates__sub">
        Ծանոթացիր <a href="#">տարադրամի և ոսկու փոխարժեքին</a>:
      </p>

      <div className="rates__switch">
        <label>
          <input
            type="radio"
            name="rates-type"
            checked={type === "exchange"}
            onChange={() => setType("exchange")}
          />
          ՓՈԽԱՐԺԵՔ
        </label>
        <label>
          <input
            type="radio"
            name="rates-type"
            checked={type === "gold"}
            onChange={() => setType("gold")}
          />
          ՈՍԿԻ
        </label>
      </div>

      {type === "exchange" ? (
        <div className="rates__table-wrap">
          <table className="rates__table">
            <thead>
              <tr>
                <th />
                <th colSpan={2}>Կանխիկ</th>
                <th colSpan={2}>Անկանխիկ</th>
              </tr>
              <tr className="rates__subhead">
                <th />
                <th>առք</th>
                <th>վաճառք</th>
                <th>առք</th>
                <th>վաճառք</th>
              </tr>
            </thead>
            <tbody>
              {rates.map((r) => (
                <tr key={r.code}>
                  <td className="rates__code">{r.code}</td>
                  <td>{format(r.cash?.buy)}</td>
                  <td>{format(r.cash?.sell)}</td>
                  <td>{format(r.nonCash?.buy)}</td>
                  <td>{format(r.nonCash?.sell)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="rates__gold">Ոսկու փոխարժեքները շուտով կավելացվեն։</p>
      )}

      <p className="rates__note">
        Քարտային փոխարժեքը սահմանվում է՝ գործարքի հաշվառման արժույթի անկանխիկ առքի
        փոխարժեքից նվազեցնելով 1 (մեկ) ՀՀ դրամ և անկանխիկ վաճառքի փոխարժեքին
        ավելացնելով 1 (մեկ) ՀՀ դրամ։
      </p>
    </div>
  );
}