import { Link } from "react-router-dom";
import Button from "../utils/Button";
import { useContext } from "react";
import { AllContext } from "../App";

const Footer = () => {
  const { Navbar, Footer } = useContext(AllContext);
  const socialLinks = Footer.socialLinks;
  const navMenu = Navbar.navMenu;
  const images = Navbar.images;
  const menuItems = Navbar.menuItems;
  const informationLinks = Footer.informationLinks;
  return (
    <div className="bg-[#A5A5A5]">
      <div className="flex flex-row justify-between px-2 sm:px-20 py-4 text-base">
        <div className="footer-details hidden lg:block">
          <Link to="/" className="mr-auto leading-normal">
            <h1 className=" bg-gradient-to-r from-[#0E0F3B] via-[#083B3F] to-[#007E46]  hidden sm:inline-block text-transparent bg-clip-text text-[40px] font-bold tracking-wide">
              NepEduNavigator
            </h1>
          </Link>
          <h1 className="text-xl font-semibold break-words w-56 mb-4">
            Charting Your Academic Journey, Seamlessly.
          </h1>
          <div className="flex flex-row gap-2">
            <div className="flex flex-row">
              <span className="absolute pl-3 pt-5 text-gray-500">
                <img
                  className="w-4 h-4 fill-current"
                  src={images.searchIcon}
                  alt="search icon"
                />
              </span>
              <input
                className="flex !bg-[#d9d9d9] h-14 rounded-md border border-black/30 bg-transparent px-8 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="search"
                placeholder="Search"
              />
            </div>
            <Button>Login</Button>
          </div>
        </div>
        <div className="footer-menu flex gap-2 sm:gap-8 flex-col sm:flex-row w-full lg:w-auto justify-between sm:justify-center lg:justify-start flex-wrap sm:flex-nowrap p-2 sm:p-0">
          <div className="flex flex-col sm:px-8">
            <h1 className="text-xl font-bold">Menus</h1>
            {menuItems.slice(0, navMenu).map((items) => (
              <Link to={items.href} key={items.name}>
                {items.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col sm:px-8">
            <h1 className="text-xl font-bold ">Information</h1>
            {informationLinks.map((info) => (
              <Link to={info.href} key={info.id}>
                {info.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col sm:px-8">
            <h1 className="text-xl font-bold">Socials</h1>
            {socialLinks.map((items) => (
              <Link
                to={items.href}
                key={items.name}
                className="flex flex-row gap-2 items-center"
              >
                <img className="h-4" src={items.logo} alt={items.id} />
                {items.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="footer-logo"></div>
        <div className="copyright"></div>
      </div>
    </div>
  );
};

export default Footer;
