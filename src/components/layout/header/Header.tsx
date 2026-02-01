import Logo from "../../../assets/images/logo.png";
import Banner from "./Banner";
import Navbar from "./Navbar";
import TopBar from "./TopBar";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  return (
    <>
      <header className="hidden lg:block">
        <Banner />
        <div className=" mx-auto py-5 flex lg:gap-10 xl:gap-25 lg:max-w-[950px] xl:max-w-[1216px] items-center">
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
      <HamburgerMenu />
    </>
  );
};

export default Header;
