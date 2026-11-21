import Header from './components/Header';
import Footer from './components/Footer';
import Glxavor from './pages/Glxavor';
import Cards from './pages/Cards';
import Hashivner from './pages/Hashivner';
import Login from './pages/Login';
import Poxancumner from './pages/Poxancumner';
import Tvayin from './pages/Tvayin';
import Varker from './pages/Varker';
import Xnayoxutyuner from './pages/Xnayoxutyuner';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="app-content">
        <Glxavor />
        <Cards />
        <Hashivner />
        <Login />
        <Poxancumner />
        <Tvayin />
        <Varker />
        <Xnayoxutyuner />
      </main>
      <Footer />
    </div>
  );
}