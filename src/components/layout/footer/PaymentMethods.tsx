import { Link } from "react-router-dom";
import AmericanExpressIcon from "../../../assets/icons/payments/american-express.png";
import ApplePayIcon from "../../../assets/icons/payments/apple-pay.png";
import InvoiceIcon from "../../../assets/icons/payments/invoice.png";
import MasterCardIcon from "../../../assets/icons/payments/master-card.png";
import ValuIcon from "../../../assets/icons/payments/valu.png";
import VisaIcon from "../../../assets/icons/payments/visa.png";

const PaymentMethods = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="uppercase font-bold text-[14px] font-(family-name:--font-anonymous) text-white text-center ml-5">
        Možnosti plačila
      </h3>
      <div className="flex gap-5 mx-auto mb-5">
        <img src={AmericanExpressIcon} alt="American Express kartica" />
        <img src={ApplePayIcon} alt="Apple Pay" />
        <img src={MasterCardIcon} alt="MasterCard kartica" />
        <img src={InvoiceIcon} alt="Plačilo po fakturi" />
        <img src={ValuIcon} alt="Valu plačilo" />
        <img src={VisaIcon} alt="Visa kartica" />
      </div>
      <div className="flex mx-auto text-[14px] font-(family-name:--font-anonymous) text-white font-normal gap-4">
        <p>Copyright © Zabec.net d.o.o.</p>
        <p>·</p>
        <p>Član skupine ZGroup</p>
      </div>
      <div className="flex mx-auto text-[14px] font-(family-name:--font-anonymous) text-white font-normal gap-4">
        <Link to="#">Splošni pogoji</Link>
        <p>·</p>
        <p>Cene vključujejo DDV in so v EUR</p>
        <p>·</p>
        <Link to="#">Piškotki</Link>
        <p>·</p>
        <Link to="#">Pogoji nakupa</Link>
      </div>
    </div>
  );
};

export default PaymentMethods;
