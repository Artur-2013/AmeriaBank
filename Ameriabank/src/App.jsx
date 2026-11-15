import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import InfoCard from "./components/InfoCard/InfoCard";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <Hero />

      <div className="cards">
        <InfoCard
          title="Օնլայն վարկեր"
          text="Նոր հնարավորություններ քո նոր գաղափարների համար"
          image="https://example.com/laptop.png"
        />
      </div>
    </>
  );
}