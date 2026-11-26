import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import Business from './pages/Business';
import PoxancumnerHashvin from './pages/poxancumnerHashvin';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="app-content">
          <Glxavor />
          <PoxancumnerHashvin/>
          {/*<Cards />
          <Hashivner />
          <Login />
          <Poxancumner />
          <Tvayin />
          <Varker /> */}
          <Routes>
            <Route path="/" element={<Glxavor />} />
            <Route path="/poxancumner-hashvin" element={<PoxancumnerHashvin />} />
            <Route path="/xnayoxutyuner" element={<Xnayoxutyuner />} />
            <Route path="/tvayin" element={<Tvayin />} />
            <Route path="/business" element={<Business />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}