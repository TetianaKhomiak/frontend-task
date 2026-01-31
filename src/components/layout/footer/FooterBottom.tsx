import { Link } from "react-router-dom";
import ArrowTop from "../../../assets/icons/ui/arrow-top.png";
import LineFooter from "../../../assets/icons/ui/line-footer.png";
import PaymentMethods from "./PaymentMethods";

const FooterBottom = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#002A00] py-10">
      <div className="flex w-full max-w-[1216px] mx-auto gap-20 font-normal text-[14px] font-(family-name:--font-anonymous) text-white">
        <div className="flex flex-col gap-2">
          <h3 className="uppercase font-bold">Storitve</h3>
          <Link to="#">Domene</Link>
          <Link to="#">Gostovanje</Link>
          <Link to="#">E-mail</Link>
          <Link to="#">Spletne trgovine</Link>
          <Link to="#">Wordpress</Link>
          <Link to="#">VPS gostovanje</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="uppercase font-bold">Sodelovanje</h3>
          <Link to="#">Partnerstvo in sodelovanje</Link>
          <Link to="#">Parterski program za prodajo domen</Link>
          <Link to="#">Zaposlimo</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="uppercase font-bold">Strežniško okolje</h3>
          <Link to="#">Podatkovni centri</Link>
          <Link to="#">Kapacitete in strežniki</Link>
          <Link to="#">Zakaj Zabec?</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="uppercase font-bold">Podjetje</h3>
          <Link to="#">Vizitka</Link>
          <Link to="#">Lokacija</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="uppercase font-bold">Žabji sorodniki</h3>
          <Link to="#">SPRD.digital</Link>
          <Link to="#">DAT-IT</Link>
          <Link to="#">resentia</Link>
          <Link to="#">WooNinja</Link>
        </div>
        <div
          className="flex flex-col gap-3 cursor-pointer"
          onClick={scrollToTop}>
          <img src={ArrowTop} alt="Na vrh" className="w-[40px] h-[40px]" />
          <p className="underline">Na vrh</p>
        </div>
      </div>
      <img
        src={LineFooter}
        alt="Line"
        className="w-full max-w-[1216px] mx-auto my-7"
      />
      <PaymentMethods />
    </div>
  );
};

export default FooterBottom;
