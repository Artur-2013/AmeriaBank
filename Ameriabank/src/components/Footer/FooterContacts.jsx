import { Landmark, Phone, Mail } from "lucide-react";

export default function FooterContacts() {
  return (
    <div className="footer-contacts">
      <div className="footer-contacts__item">
        <Landmark size={16} />
        <div>
          <strong>ԳԼԽԱՎՈՐ ԳՐԱՍԵՆՅԱԿ</strong>
          <p>Վազգեն Սարգսյան 2, Երևան 0010, ՀՀ</p>
        </div>
      </div>

      <div className="footer-contacts__item">
        <Phone size={16} />
        <div>
          <p>Հեռախոսահամար՝</p>
          <strong>(+37410) 56 11 11 կամ (+37412) 561111</strong>
        </div>
      </div>

      <div className="footer-contacts__item">
        <Mail size={16} />
        <a href="mailto:info@ameriabank.am">
          <strong>info@ameriabank.am</strong>
        </a>
      </div>
    </div>
  );
}