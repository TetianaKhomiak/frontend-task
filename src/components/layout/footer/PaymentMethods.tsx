import { Link } from "react-router-dom";

import type { PaymentMethod } from "../../../types/payment";
import {
  AmericanExpressIcon,
  ApplePayIcon,
  InvoiceIcon,
  MasterCardIcon,
  ValuIcon,
  VisaIcon,
} from "../../../assets/icons/payments";

const PAYMENT_METHODS: PaymentMethod[] = [
  { icon: AmericanExpressIcon, alt: "American Express kartica" },
  { icon: ApplePayIcon, alt: "Apple Pay" },
  { icon: MasterCardIcon, alt: "MasterCard kartica" },
  { icon: InvoiceIcon, alt: "Plačilo po fakturi" },
  { icon: ValuIcon, alt: "Valu plačilo" },
  { icon: VisaIcon, alt: "Visa kartica" },
];

const PaymentMethods = () => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="uppercase font-bold text-sm font-(family-name:--font-anonymous) text-white text-center ml-5">
        Možnosti plačila
      </h3>
      <div className="flex gap-5 mx-auto mb-5">
        {PAYMENT_METHODS.map(({ icon, alt }) => (
          <img key={alt} src={icon} alt={alt} />
        ))}
      </div>
      <div className="flex mx-auto text-sm font-(family-name:--font-anonymous) text-white font-normal gap-4">
        <p>Copyright © Zabec.net d.o.o.</p>
        <p>·</p>
        <p>Član skupine ZGroup</p>
      </div>
      <div className="flex mx-auto text-sm font-(family-name:--font-anonymous) text-white font-normal gap-4">
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
