import Banner from "./Banner";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Logo from "../../../assets/images/logo.png";

const Header = () => {
  return (
    <header>
      <Banner />
      <div className="max-w-[1216px] mx-auto py-5 flex justify-between items-center">
        <img
          src={Logo}
          alt="Žabec Company Logo"
          className="w-[88px] h-[88px]"
        />
        <nav className="flex-1 max-w-[955px] h-[88px] flex flex-col justify-between">
          <TopBar />
          <Navbar />
        </nav>
      </div>
    </header>
  );
};

export default Header;
