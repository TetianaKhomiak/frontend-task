import UserIcon from "../../../assets/icons/user.svg";
import NetworkStatusIcon from "../../../assets/icons/network-status.svg";
import CartIcon from "../../../assets/icons/cart.svg";

const TopBar = () => {
  return (
    <div className="w-[95%] mx-auto flex items-center gap-4 font-(family-name:--font-anonymous) text-[14px] font-bold">
      {/* First group (2 rows stacked) */}
      <div className="flex flex-col">
        <div>Non-stop 24/7</div>
        <div>podpora@zabec.net</div>
      </div>

      {/* Second group (2 rows stacked) */}
      <div className="flex flex-col">
        <div>Delovniki 8:00-20:00</div>
        <div>040 333 666</div>
      </div>

      {/* Remaining 5 items, 1 row each */}
      <div className="flex items-center gap-2">
        <img src={NetworkStatusIcon} alt="Stanje omrežja" className="w-4 h-4" />
        <span>Stanje omrežja</span>
      </div>
      <div className="flex items-center gap-2">
        <img src={UserIcon} alt="Moj Žabec" className="w-4 h-4" />
        <span>Moj Žabec</span>
      </div>
      <div className="flex items-center gap-2">
        <img src={CartIcon} alt="Košarica" className="w-4 h-4" />
        <span>Košarica</span>
      </div>

      <div>EN</div>
      <button>Nočni način</button>
    </div>
  );
};

export default TopBar;
