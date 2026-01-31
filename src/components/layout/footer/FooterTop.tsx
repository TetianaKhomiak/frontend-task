import Logo from "../../../assets/images/logo.png";
import ShieldStandard from "../../../assets/icons/ui/shield-standard.svg";
import Tap from "../../../assets/icons/ui/tap.svg";
import Location from "../../../assets/icons/ui/location.svg";
import FacebookIcon from "../../../assets/icons/social/facebook.png";
import TwitterIcon from "../../../assets/icons/social/twitter.png";
import LinkedinIcon from "../../../assets/icons/social/linkedin.png";
import NetworkStatusIcon from "../../../assets/icons/ui/network-status.svg";

const FooterTop = () => {
  return (
    <div className="flex flex-col w-full max-w-[1216px] mx-auto gap-20">
      <div className="flex w-full gap-35">
        <img
          src={Logo}
          alt="Žabec Company Logo"
          className="w-[88px] h-[88px]"
        />
        <div className="flex flex-col items-center gap-4">
          <img
            src={ShieldStandard}
            alt="Najvišji standardi varnosti"
            className="w-[80px] h-[80px]"
          />
          <p className="text-[14px] font-(family-name:--font-anonymous) font-bold">
            Najvišji standardi varnosti
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img
            src={Tap}
            alt="Zadovoljni uporabniki"
            className="w-[80px] h-[80px]"
          />
          <p className="text-[14px] font-(family-name:--font-anonymous) font-bold">
            Zadovoljni uporabniki
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img
            src={Location}
            alt="Slovenski ponudnik gostovanja"
            className="w-[80px] h-[80px]"
          />
          <p className="text-[14px] font-(family-name:--font-anonymous) font-bold">
            Slovenski ponudnik gostovanja
          </p>
        </div>
      </div>
      <div className="flex w-full gap-15">
        <div className="flex gap-5 self-center">
          <img
            src={FacebookIcon}
            alt="FacebookIcon"
            className="w-[32px] h-[32px]"
          />
          <img
            src={TwitterIcon}
            alt="TwitterIcon"
            className="w-[32px] h-[32px]"
          />
          <img
            src={LinkedinIcon}
            alt="LinkedinIcon"
            className="w-[32px] h-[32px]"
          />
        </div>
        <div className="w-[270px] flex flex-col items-center gap-4 text-[14px] font-(family-name:--font-anonymous)">
          <p className="uppercase font-bold">Telefonska podpora</p>
          <div className="flex flex-col items-center">
            <p className="uppercase font-normal">01 / 600 10 50</p>
            <p className="font-normal">Delovniki: 8:00-20:00</p>
          </div>
        </div>
        <div className="w-[270px] flex flex-col items-center gap-4 text-[14px] font-(family-name:--font-anonymous)">
          <p className="uppercase font-bold">TPodpora po e-pošti</p>
          <div className="flex flex-col items-center">
            <a href="mailto:info@zabec.net" className="font-normal underline">
              info@zabec.net
            </a>
            <p className="font-normal">Non-stop 24/7</p>
          </div>
        </div>
        <div className="w-[270px] flex flex-col items-center gap-4">
          <p className="uppercase text-[14px] font-(family-name:--font-anonymous) font-bold">
            Stanje omrežja
          </p>
          <img
            src={NetworkStatusIcon}
            alt="Stanje omrežja"
            className="w-[32px] h-[32px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
