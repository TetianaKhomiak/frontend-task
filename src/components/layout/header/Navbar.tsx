import KnowledgeAndNews from "../../../pages/KnowledgeAndNews/KnowledgeAndNews";
import Domains from "../../../pages/Domains";
import Hosting from "../../../pages/Hosting";
import OnlineStores from "../../../pages/OnlineStores";
import VpsHosting from "../../../pages/VpsHosting";
import WordPress from "../../../pages/WordPress";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between font-montserrat font-extrabold text-sm">
      <Domains />
      <Hosting />
      <WordPress />
      <OnlineStores />
      <VpsHosting />
      <KnowledgeAndNews />
    </div>
  );
};

export default Navbar;
