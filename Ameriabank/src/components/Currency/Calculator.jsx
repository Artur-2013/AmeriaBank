import { useState } from "react";
import { rates } from "./rates";
import "./Calculator.css";

const currencies = ["AMD", ...rates.map((r) => r.code)];

// ՀՀ դրամի արժեքը 1 միավոր արժույթի համար
function getRate(code, kind, side) {
  if (code === "AMD") return 1;
  const item = rates.find((r) => r.code === code);
  const data = item?.[kind];
  return data ? data[side] : null;
}

// from-արժույթից to-արժույթ
function convert(amount, from, to, kind) {
  const fromRate = getRate(from, kind, "buy");  // բանկն առնում է
  const toRate = getRate(to, kind, "sell");     // բանկը վաճառում է
  if (!fromRate || !toRate) return null;
  return (amount * fromRate) / toRate;
}

export default function Calculator() {
  const [kind, setKind] = useState("cash"); // cash | nonCash
  const [haveCur, setHaveCur] = useState("AMD");
  const [needCur, setNeedCur] = useState("USD");
  const [have, setHave] = useState("");
  const [need, setNeed] = useState("");

  const round = (n) => (Math.round(n * 100) / 100).toString();

  const recalcNeed = (value, from, to, k) => {
    if (value === "" || isNaN(value)) return setNeed("");
    const res = convert(parseFloat(value), from, to, k);
    setNeed(res == null ? "" : round(res));
  };

  const recalcHave = (value, from, to, k) => {
    if (value === "" || isNaN(value)) return setHave("");
    const res = convert(parseFloat(value), from, to, k);
    setHave(res == null ? "" : round(res));
  };

  const onHaveChange = (e) => {
    const v = e.target.value;
    setHave(v);
    recalcNeed(v, haveCur, needCur, kind);
  };

  const onNeedChange = (e) => {
    const v = e.target.value;
    setNeed(v);
    recalcHave(v, needCur, haveCur, kind);
  };

  const onHaveCurChange = (e) => {
    const c = e.target.value;
    setHaveCur(c);
    recalcNeed(have, c, needCur, kind);
  };

  const onNeedCurChange = (e) => {
    const c = e.target.value;
    setNeedCur(c);
    recalcNeed(have, haveCur, c, kind);
  };

  const onKindChange = (k) => {
    setKind(k);
    recalcNeed(have, haveCur, needCur, k);
  };

  const unavailable =
    have !== "" && need === "" && getRate(needCur, kind, "sell") == null;

  return (
    <div className="calc">
      <h2 className="calc__heading">Տարադրամի հաշվիչ</h2>

      <div className="calc__switch">
        <label>
          <input
            type="radio"
            name="calc-kind"
            checked={kind === "cash"}
            onChange={() => onKindChange("cash")}
          />
          ԿԱՆԽԻԿ
        </label>
        <label>
          <input
            type="radio"
            name="calc-kind"
            checked={kind === "nonCash"}
            onChange={() => onKindChange("nonCash")}
          />
          ԱՆԿԱՆԽԻԿ
        </label>
      </div>

      <label className="calc__label">Ես ունեմ</label>
      <div className="calc__row">
        <input
          className="calc__input"
          type="number"
          min="0"
          value={have}
          onChange={onHaveChange}
        />
        <select className="calc__select" value={haveCur} onChange={onHaveCurChange}>
          {currencies.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      <label className="calc__label">Ինձ պետք է</label>
      <div className="calc__row">
        <input
          className="calc__input"
          type="number"
          min="0"
          value={need}
          onChange={onNeedChange}
        />
        <select className="calc__select" value={needCur} onChange={onNeedCurChange}>
          {currencies.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </div>

      {unavailable && (
        <p className="calc__error">Այս արժույթի համար այս տեսակը հասանելի չէ։</p>
      )}
    </div>
  );
}