import "./Footer.css";

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
        {/* սյունակները կավելացվեն հաջորդ քայլերում */}
      </div>
    </footer>
  );
}