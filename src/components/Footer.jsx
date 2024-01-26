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
      <div className="flex flex-col lg:flex-row justify-between px-2 sm:px-20 py-4 text-base xl:gap-20 lg:gap-0">
        <div className="footer-details flex flex-col items-center lg:items-start w-full lg:mr-4">
          <div className="flex flex-col text-center sm:text-start w-min gap-3 sm:gap-0">
            <Link to="/">
              <h1 className=" bg-gradient-to-r from-[#0E0F3B] via-[#083B3F] to-[#007E46] inline-block text-transparent bg-clip-text text-2xl sm:text-custom-42px font-bold tracking-wide leading-normal">
                NepEduNavigator
              </h1>
            </Link>
            <h1 className="text-xl font-semibold break-words w-full sm:w-fit mb-3 sm:mb-4">
              Charting Your Academic Journey, Seamlessly.
            </h1>
          </div>
          <div className="flex flex-row gap-2 w-fit lg:w-full">
            <div className="grid grid-cols-1 sm:grid-cols-4 grid-rows-2 sm:grid-rows-1 relative gap-3 w-full">
              <span className="absolute text-gray-500 top-5 left-custom-10px">
                <img
                  className="w-4 h-4 fill-current"
                  src={images.searchIcon}
                  alt="search icon"
                />
              </span>
              <input
                className="flex col-span-2 sm:col-span-3 !bg-[#d9d9d9] h-14 rounded-md border border-black/30 bg-transparent px-8 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="search"
                placeholder="Search"
                id="footer_search"
                name="footer_search"
              />
              <Button
                customClass={"!rounded-custom-radius-10px w-fit m-auto sm:!m-0"}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
        <div className="footer-menu flex gap-2 sm:gap-8 lg:gap-0 xl:gap-20 flex-col lg:flex-row w-full lg:w-auto justify-between sm:justify-center lg:justify-start flex-wrap sm:flex-nowrap p-2 sm:p-0">
          <div className="flex flex-col sm:px-4 xl:px-8 w-full lg:w-auto items-center lg:items-start">
            <h1 className="text-xl font-bold">Menus</h1>
            {menuItems.slice(0, navMenu).map((items) => (
              <Link to={items.href} key={items.name}>
                {items.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col sm:px-8 xl:px-8 w-full lg:w-auto items-center lg:items-start">
            <h1 className="text-xl font-bold ">Information</h1>
            {informationLinks.map((info) => (
              <Link to={info.href} key={info.id}>
                {info.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col sm:px-8 xl:px-8 w-full lg:w-auto items-center lg:items-start">
            <h1 className="text-xl font-bold">Socials</h1>
            {socialLinks.map((items) => (
              <Link
                to={items.href}
                key={items.name}
                className="flex flex-row gap-2 items-center"
              >
                <img className="h-4" src={images.facultyLogo1} alt={items.id} />
                {items.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="footer-logo flex flex-row px-2 sm:px-20 items-center justify-center lg:justify-between">
          <Link to="/">
            <h1 className=" bg-gradient-to-r from-[#0E0F3B] via-[#083B3F] to-[#007E46] hidden lg:inline-block text-transparent bg-clip-text text-2xl font-bold tracking-wide leading-normal">
              NepEduNavigator
            </h1>
          </Link>
          <p className="sm:text-base text-xs text-center pb-3">
            © 2023 Education Navigator Pvt. Ltd. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
