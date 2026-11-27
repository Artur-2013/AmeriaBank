import { useState, useEffect, useRef } from 'react';
import './Glxavor.css';

const slides = [
  {
    title: 'AMP',
    lines: [
      { t: 'Քո վճարումների նոր արժույթը և մեր շնորհակալությունը քեզ։ Կուտակիր AMP-եր քո ամենօրյա վճարումներից և կատարիր գնումներ AMP-երով' },
    ],
    primary: 'Ինչքա՞ն AMP ունեմ',
    secondary: 'Իմանալ ավելին',
    img: "https://ameriabank.am/Portals/0/Images/mypoints/ameria-mypoint-arm.png",
  },
  {
    title: 'MyAmeria Star',
    lines: [
      { t: 'Ստեղծիր քո աստղը' },
      { t: 'Սկսիր քո գումարից և քո որոշումներից', b: true },
      { t: 'Բանկային քարտ և հավելված 6-18 տարեկանների համար' },
    ],
    primary: 'Ներբեռնել',
    secondary: 'Իմանալ ավելին',
    img: 'https://ameriabank.am/Portals/0/Images/myameria-kids/mystar-girls.png',
  },
  {
    title: 'Անվճար քարտ՝ առանց բանկ գալու',
    lines: [
      { t: 'Դիմիր օնլայն, ստացիր անվճար Visa Classic կամ MasterCard Standard քարտ, բանկային հաշիվ և MyAmeria օնլայն/մոբայլ բանկինգ։' },
    ],
    primary: 'Դիմել օնլայն',
    secondary: 'Իմանալ ավելին',
    img: 'https://ameriabank.am/Portals/0/Images/New-home/card-banner.png',
  },
];
const offers = [
  {
    title: 'Սա ուրբաթը կանչում է',
    text: 'Գնիր կահույք, կենցաղային և համակարգչային տեխնիկա, շինանյութ մեր գործընկերներից՝ Ամերիայի 0% ապառիկով։',
    img: 'https://ameriabank.am/Portals/0/Images/special-offers/black-friday-offer.png',
    bg: '#2b2b2b',
  },
  {
    title: 'Բեր գույքի գրավով վարկ',
    text: 'Նվազեցրու գույքի գրավով վարկիդ տոկոսը',
    img: 'https://ameriabank.am/Portals/0/Images/special-offers/refinance-arm.png',
    bg: '#1f6fb5',
  },
  {
    title: 'Քո նոր մեքենան 0% կանխավճարով',
    text: 'Արի mycar.am, ընտրիր քո մեքենան առաջնային շուկայից և ձևակերպիր օնլայն ավտովարկ 0% կանխավճարով ու ավելի ցածր տոկոսադրույքով։',
    img: 'https://ameriabank.am/Portals/0/Images/special-offers/car-down-payment-offer-arm.png',
    bg: '#3c4a2f',
  },
  {
    title: 'Amazon-ի 115 նվեր քարտ',
    text: 'Միջազգային օնլայն գործարքներդ կատարի Mastercard քարտով',
    img: 'https://ameriabank.am/Portals/0/Images/campaigns/amazon-gift-card/amazon-special-offer-arm.png',
    bg: '#6bbf3a',
  },
];
const CURRENCIES = ['AMD', 'USD', 'EUR', 'GBP', 'RUB', 'GEL'];

// [առք, վաճառք]
const rates = {
  USD: { cash: [357.5, 362.5], non: [357.5, 362.5] },
  EUR: { cash: [388, 402], non: [388, 402] },
  GBP: { cash: [462, 482], non: [462, 482] },
  RUB: { cash: [4.13, 4.45], non: [4.24, 4.54] },
  GEL: { cash: [133.5, 144], non: null },
};

const fmt = (n) =>
  n == null ? '' : n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function convert(amount, from, to, mode) {
  if (!(amount >= 0)) return null;
  if (from === to) return amount;
  let amd = amount;
  if (from !== 'AMD') {
    const r = rates[from][mode];
    if (!r) return null;
    amd = amount * r[0];
  }
  if (to === 'AMD') return amd;
  const r = rates[to][mode];
  if (!r) return null;
  return amd / r[1];
}
export default function Glxavor() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(null);
  const moved = useRef(false);
  const offersRef = useRef(null);
const scrollOffers = (dir) => {
  const el = offersRef.current;
  if (el) el.scrollBy({ left: dir * 354, behavior: 'smooth' });
};
const [rateTab, setRateTab] = useState('rates');
const [convMode, setConvMode] = useState('non');
const [amount, setAmount] = useState('');
const [from, setFrom] = useState('AMD');
const [to, setTo] = useState('USD');

const result = convert(parseFloat(amount.replace(',', '.')), from, to, convMode);
  const go = (dir) => setActive((i) => (i + dir + slides.length) % slides.length);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (paused || dragging || reduce) return undefined;
    const id = setInterval(() => go(1), 5000);
    return () => clearInterval(id);
  }, [paused, dragging, active]);

  const onDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    startX.current = e.clientX;
    moved.current = false;
  };
  const onMove = (e) => {
    if (startX.current === null) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 5) {
      moved.current = true;
      setDragging(true);
    }
    setDragX(dx);
  };
  const onUp = () => {
    if (startX.current === null) return;
    if (Math.abs(dragX) > 60) go(dragX < 0 ? 1 : -1);
    startX.current = null;
    setDragX(0);
    setDragging(false);
  };
  const onClickCapture = (e) => {
    if (moved.current) {
      e.preventDefault();
      e.stopPropagation();
      moved.current = false;
    }
  };

  const slide = slides[active];

  return (
    <section className="glxavor-page">

    </section>
  );
}