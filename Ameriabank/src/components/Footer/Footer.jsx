import FooterColumn from "./FooterColumn";
import FooterContacts from "./FooterContacts";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaTelegramPlane,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css";

const mainLinks = [
  "Բանկի մասին",
  "Բանկի հիմնական ձեռքբերումները",
  "Հաշվետվություններ",
  "Էական փաստեր",
  "Էթիկայի կանոնները",
  "Բանկի ղեկավարները",
  "Կորպորատիվ կառավարում",
  "Նշանակալից մասնակցություն ունեցող անձինք",
  "Մասնաճյուղեր և բանկոմատներ",
  "Բաժնետերեր և ներդրողներ",
  "Բանկի կառուցվածքը",
  "Ամերիա Օգնական",
  "Հետադարձ կապ",
];

const infoLinks = [
  "Նորություններ",
  "Բլոգ",
  "ԿՍՊ (CSR)",
  "Համագործակցության առաջարկ",
  "Ավելին",
  "Բանկի կողմից օտարվող գույք",
  "Գնումներ",
  "Իրավական ակտեր",
  "Հիմնական նոստրո հաշիվներ",
  "Հաճախորդների իրավունքները",
  "Կարծիքի/բողոքի օնլայն հայտ",
  "Ապահովագրական ընկերությունների ցանկ",
  "Համագործակցող գնահատող ընկերությունների ցանկ",
  "Օգտակար հղումներ",
  "Ֆինանսական անվտանգության խորհուրդներ",
  "Stop գործիքներ",
];

const careerLinks = [
  "Ամերիա թիմ",
  "Ինչու մեզ հետ",
  "Երիտասարդներին",
  "Ամերիա սերունդ",
  "Աշխատատեղեր",
];

const socials = [
  { name: "Facebook", icon: FaFacebookF, href: "#" },
  { name: "LinkedIn", icon: FaLinkedinIn, href: "#" },
  { name: "YouTube", icon: FaYoutube, href: "#" },
  { name: "Instagram", icon: FaInstagram, href: "#" },
  { name: "Telegram", icon: FaTelegramPlane, href: "#" },
  { name: "X", icon: FaXTwitter, href: "#" },
  { name: "TikTok", icon: FaTiktok, href: "#" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__notice">
        <strong>Հարգելի՛ օգտատեր,</strong>
        Կայքի որևէ տեղեկատվական վերաբերյալ տարբեր լեզուներով անհամապատասխանություն,
        ինչպես նաև ռուսերեն և անգլերեն տեքստերում ոչ ամբողջական նյութ տեսնելու դեպքում
        խնդրում ենք առաջնորդվել հայերեն տարբերակով։
      </p>

      <div className="footer__grid">
        <FooterColumn title="Հիմնական" links={mainLinks} />
        <FooterColumn title="Այլ տեղեկատվություն" links={infoLinks} />
        <FooterColumn title="Աշխատանք" links={careerLinks} />
        <FooterContacts />
      </div>

      <div className="footer__socials">
        {socials.map(({ name, icon: Icon, href }) => (
          <a key={name} href={href} aria-label={name}>
            <Icon size={16} />
          </a>
        ))}
      </div>

      <p className="footer__legal">
        «Ամերիաբանկ» ՓԲԸ-ն լիցենզավորված է ՀՀ ԿԲ կողմից։
      </p>

      <p className="footer__copyright">
        © 2007-2026 ԱՄԵՐԻԱԲԱՆԿ. ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ։{" "}
        <a href="#">TERMS OF USE</a> : <a href="#">PRIVACY STATEMENT</a>
      </p>
    </footer>
  );
}