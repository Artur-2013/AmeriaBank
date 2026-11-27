import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import UsefulLinks from "./components/UsefulLinks/UsefulLinks";
import PromoSlider from "./components/PromoSlider/PromoSlider";
import MyServices from "./components/MyServices/MyServices";
import Offers from "./components/Offers/Offers";
import Currency from "./components/Currency/Currency";
import News from "./components/News/News";
import FeedbackButton from "./components/FeedbackButton/FeedbackButton";
import ChatButton from "./components/ChatButton/ChatButton";
import Footer from "./components/Footer/Footer";
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
      <Currency />
      <News />
      <FeedbackButton />
      <ChatButton />
      <Footer />
    </>
  );
}