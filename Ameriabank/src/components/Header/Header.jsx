import TopNav from "./TopNav";
import MainNav from "./MainNav";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <TopNav />
      <MainNav />
    </header>
  );
}