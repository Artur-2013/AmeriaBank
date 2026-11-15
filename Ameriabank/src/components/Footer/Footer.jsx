import "./Footer.css";
import FooterColumn from "./FooterColumn";
import FooterContacts from "./FooterContacts";

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
  "Բաժետերեր և ներդրողներ",
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
  "Գեոմներ",
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
import { Facebook, Linkedin, Youtube, Instagram, Send, Twitter, Music2 } from "lucide-react";

const socials = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Telegram", icon: Send, href: "#" },
  { name: "X", icon: Twitter, href: "#" },
  { name: "TikTok", icon: Music2, href: "#" },
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
    </footer>
  );
}