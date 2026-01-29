import Banner from "./Banner";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Logo from "../../../assets/images/logo.png";

const Header = () => {
  return (
    <header>
      <Banner />
      <div className="w-[85%] py-4 mx-auto flex justify-between items-center gap-20">
        <img src={Logo} alt="Company Logo" className="w-[88px] h-[88px]" />
        <div className="flex flex-col">
          <TopBar />
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
