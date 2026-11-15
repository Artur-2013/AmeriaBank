import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import FeedbackButton from "./components/FeedbackButton/FeedbackButton";
import ChatButton from "./components/ChatButton/ChatButton";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Cards />
      <FeedbackButton />
      <ChatButton />
    </>
  );
}