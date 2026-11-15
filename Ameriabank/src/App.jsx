import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import UsefulLinks from "./components/UsefulLinks/UsefulLinks";
import PromoSlider from "./components/PromoSlider/PromoSlider";
import MyServices from "./components/MyServices/MyServices";
import Offers from "./components/Offers/Offers";
import FeedbackButton from "./components/FeedbackButton/FeedbackButton";
import ChatButton from "./components/ChatButton/ChatButton";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Cards />
      <UsefulLinks />
      <PromoSlider />
      <MyServices />
      <Offers />
      <FeedbackButton />
      <ChatButton />
    </>
  );
}