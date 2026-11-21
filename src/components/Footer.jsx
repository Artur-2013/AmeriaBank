import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="ameria-footer-wrapper">
      <button
        type="button"
        className="ameria-feedback-tab"
        aria-label="Ասա կարծիքդ"
      >
        Ասա կարծիքդ
      </button>

      <footer className="ameria-footer">
        <div className="ameria-footer-inner">
          <div className="ameria-footer-notice">
            <p className="ameria-footer-greeting">Հարգելի՛ օգտատեր,</p>
            <p className="ameria-footer-disclaimer">
              Կայքի որևէ տեղեկության վերաբերյալ տարբեր լեզուներում անհամապատասխանության, ինչպես նաև ռուսերեն և անգլերեն տեքստերում ոչ ամբողջական նյութ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով։
            </p>
          </div>

          <div className="ameria-footer-body">
            <div className="ameria-footer-columns">
              <div className="ameria-footer-col">
                <h3 className="ameria-footer-title">Հիմնական</h3>
                <ul className="ameria-footer-list">
                  <li><a href="#glxavor">Բանկի մասին</a></li>
                  <li><a href="#glxavor">Բանկի հիմնական ձեռքբերումները</a></li>
                  <li><a href="#glxavor">Հաշվետվություններ</a></li>
                  <li><a href="#glxavor">Էական փաստեր</a></li>
                  <li><a href="#glxavor">Էթիկայի կանոններ</a></li>
                  <li><a href="#glxavor">Բանկի ղեկավարները</a></li>
                  <li><a href="#glxavor">Կորպորատիվ կառավարում</a></li>
                  <li><a href="#glxavor">Նշանակալից մասնակցություն ունեցող անձինք</a></li>
                  <li><a href="#glxavor">Մասնաճյուղեր և բանկոմատներ</a></li>
                  <li><a href="#glxavor">Բաժնետերեր և ներդրողներ</a></li>
                  <li><a href="#glxavor">Բանկի կառուցվածքը</a></li>
                  <li><a href="#glxavor">Ամերիա Օգնական</a></li>
                  <li><a href="#glxavor">Հետադարձ կապ</a></li>
                </ul>
              </div>

              <div className="ameria-footer-col">
                <h3 className="ameria-footer-title">Այլ տեղեկատվություն</h3>
                <ul className="ameria-footer-list">
                  <li><a href="#glxavor">Նորություններ</a></li>
                  <li><a href="#glxavor">Բլոգ</a></li>
                  <li><a href="#glxavor">ԿՍՊ (CSR)</a></li>
                  <li><a href="#glxavor">Համագործակցության առաջարկ</a></li>
                  <li><a href="#glxavor">Ավելին</a></li>
                  <li><a href="#glxavor">Բանկի կողմից օտարվող գույք</a></li>
                  <li><a href="#glxavor">Գնումներ</a></li>
                  <li><a href="#glxavor">Իրավական ակտեր</a></li>
                  <li><a href="#glxavor">Հիմնական նոստրո հաշիվներ</a></li>
                  <li><a href="#glxavor">Հաճախորդների իրավունքները</a></li>
                  <li><a href="#glxavor">Կարծիքի/բողոքի օնլայն հայտ</a></li>
                  <li><a href="#glxavor">Ապահովագրական ընկերությունների ցանկ</a></li>
                  <li><a href="#glxavor">Համագործակցող գնահատող ընկերությունների ցանկ</a></li>
                  <li><a href="#glxavor">Օգտակար հղումներ</a></li>
                  <li><a href="#glxavor">Ֆինանսական անվտանգության խորհուրդներ</a></li>
                  <li><a href="#glxavor">Stop գործիքներ</a></li>
                </ul>
              </div>

              <div className="ameria-footer-col">
                <h3 className="ameria-footer-title">Աշխատանք</h3>
                <ul className="ameria-footer-list">
                  <li><a href="#glxavor">Ամերիա թիմ</a></li>
                  <li><a href="#glxavor">Ինչու մեզ հետ</a></li>
                  <li><a href="#glxavor">Երիտասարդներին</a></li>
                  <li><a href="#glxavor">Ամերիա սերունդ</a></li>
                  <li><a href="#glxavor">Աշխատատեղեր</a></li>
                </ul>
              </div>
            </div>

            <div className="ameria-footer-contacts">
              <div className="ameria-contact-item">
                <svg className="ameria-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 20s-5.5-4.8-5.5-9.2a5.5 5.5 0 1 1 11 0C17.5 15.2 12 20 12 20z" />
                  <circle cx="12" cy="10.8" r="2" />
                </svg>
                <div className="ameria-contact-text">
                  <div className="ameria-contact-heading">ԳԼԽԱՄԱՍԱՅԻՆ ԳՐԱՍԵՆՅԱԿ</div>
                  <div className="ameria-contact-value">Վազգեն Սարգսյան 2, Երևան 0010, ՀՀ</div>
                </div>
              </div>

              <div className="ameria-contact-item">
                <svg className="ameria-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M6.5 4h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4z" />
                </svg>
                <div className="ameria-contact-text">
                  <div className="ameria-contact-heading">Հեռախոսահամար ՝</div>
                  <div className="ameria-contact-value">(+37410) 56 11 11 կամ (+37412) 561111</div>
                </div>
              </div>

              <div className="ameria-contact-item">
                <svg className="ameria-contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M4 7l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="ameria-contact-text">
                  <a href="mailto:info@ameriabank.am" className="ameria-contact-mail">
                    info@ameriabank.am
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="ameria-floating-chat">
        <button type="button" className="ameria-chat-bubble-btn">
          Հարցեր ունե՞ս
        </button>

        <div className="ameria-chat-actions">
          <button type="button" className="ameria-chat-circle" aria-label="Առցանց չաթ">
            <svg className="ameria-chat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinejoin="round" />
              <path d="M8 9h8M8 13h5" strokeLinecap="round" />
            </svg>
          </button>

          <button
            type="button"
            className="ameria-scroll-top"
            onClick={scrollToTop}
            aria-label="Բարձրանալ վերև"
          >
            <svg className="ameria-up-arrow" viewBox="0 0 16 10" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 8L8 2L14 8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}