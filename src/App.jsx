import Header1 from "./components/header/header1";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="top-wrapper">
        <Header1 />
        <Header2 />
      </div>
      <div className="main-header-wrapper">
        <Bank1 />
        <Bank2 />
      </div>
      <Bank3 />
      <Bank4 />
      <Bank5 />
      <Bank6 />
      <Bank7 />
      <Bank8 />
      <div className="info-tiles-grid">
        <Bank9 />
        <Bank10 />
        <Bank11 />
        <Bank12 />
        <Bank13 />
        <Bank14 />
      </div>
      <Bank15 />
    </>
  );
}