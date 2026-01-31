import Logo from "../../../assets/images/logo.png";
import Banner from "./Banner";
import Navbar from "./Navbar";
import TopBar from "./TopBar";

const Header = () => {
  return (
    <header>
      <Banner />
      <div className="max-w-[1216px] mx-auto py-7 flex gap-25 items-center">
        <img
          src={Logo}
          alt="Žabec Company Logo"
          className="w-[88px] h-[88px]"
        />
        <nav className="flex-1 max-w-[955px] h-[88px] flex flex-col gap-5">
          <TopBar />
          <Navbar />
        </nav>
      </div>
    </header>
  );
};

export default Header;
