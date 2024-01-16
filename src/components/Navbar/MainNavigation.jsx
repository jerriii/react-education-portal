import Button from "../../utils/Button";
import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AllContext } from "../../App";
import data from "../DummyData.json";

const MainNavigation = () => {
  const { Navbar } = useContext(AllContext);
  const featuredItems = data.featuredItems;
  const [isOpen, setIsOpen] = useState(false);
  const [viewNotification, setViewNotification] = useState(false);
  const menuItems = Navbar.menuItems;
  const handleNavbarClick = Navbar.handleNavbarClick;
  const navMenu = Navbar.navMenu;
  const handleDropDown = Navbar.handleDropDown;
  const isDropDown = Navbar.isDropDown;
  const dropDownMenu = Navbar.dropDownMenu;
  const images = Navbar.images;
  const location = useLocation().pathname;
  const handleNotification = () => {
    setViewNotification(!viewNotification);
  };
  const handleHamburgerClick = (path) => {
    handleNavbarClick(path);
    setIsOpen(false);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className={`flex items-center mb-2 p-2 lg:gap-4 sm:p-0 sm:justify-between`}
      >
        <Link to="/">
          <h1 className=" bg-gradient-to-r from-[#0E0F3B] via-[#083B3F] to-[#007E46]  hidden md:inline-block text-transparent bg-clip-text text-[50px] font-bold tracking-wide">
            NepEduNavigator
          </h1>
        </Link>
        <div className="flex md:hidden mr-auto">
          <Link to="/" className="sm:mr-auto leading-normal">
            <h1 className=" bg-gradient-to-r from-[#0E0F3B] via-[#083B3F] to-[#007E46]  inline-block md:hidden text-transparent bg-clip-text text-10 font-bold tracking-wide">
              NepEduNavigator
            </h1>
          </Link>
        </div>

        <div className="flex flex-row gap-2">
          <div
            className={`visibility lg:hidden ${isOpen ? "hidden" : "visible"}`}
            onClick={handleNotification}
          >
            {viewNotification ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 6L6 18"
                  stroke="#33363F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#33363F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6.44784 8.96942C6.76219 6.14032 9.15349 4 12 4V4C14.8465 4 17.2378 6.14032 17.5522 8.96942L17.804 11.2356C17.8072 11.2645 17.8088 11.279 17.8104 11.2933C17.9394 12.4169 18.3051 13.5005 18.8836 14.4725C18.8909 14.4849 18.8984 14.4973 18.9133 14.5222L19.4914 15.4856C20.0159 16.3599 20.2782 16.797 20.2216 17.1559C20.1839 17.3946 20.061 17.6117 19.8757 17.7668C19.5971 18 19.0873 18 18.0678 18H5.93223C4.91268 18 4.40291 18 4.12434 17.7668C3.93897 17.6117 3.81609 17.3946 3.77841 17.1559C3.72179 16.797 3.98407 16.3599 4.50862 15.4856L5.08665 14.5222C5.10161 14.4973 5.10909 14.4849 5.11644 14.4725C5.69488 13.5005 6.06064 12.4169 6.18959 11.2933C6.19123 11.279 6.19283 11.2645 6.19604 11.2356L6.44784 8.96942Z"
                  stroke="#222222"
                />
                <path
                  d="M9.10222 18.4059C9.27315 19.1501 9.64978 19.8077 10.1737 20.2767C10.6976 20.7458 11.3396 21 12 21C12.6604 21 13.3024 20.7458 13.8263 20.2767C14.3502 19.8077 14.7269 19.1501 14.8978 18.4059"
                  stroke="#222222"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
          <div
            className={`lg:hidden ${viewNotification ? "hidden" : "visible"}`}
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 6L6 18"
                  stroke="#33363F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#33363F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.0646 7.75H3.45259C3.05142 7.75 2.71875 7.41 2.71875 7C2.71875 6.59 3.05142 6.25 3.45259 6.25H21.0646C21.4658 6.25 21.7985 6.59 21.7985 7C21.7985 7.41 21.4658 7.75 21.0646 7.75Z"
                  fill="#171717"
                />
                <path
                  d="M21.0646 12.75H3.45259C3.05142 12.75 2.71875 12.41 2.71875 12C2.71875 11.59 3.05142 11.25 3.45259 11.25H21.0646C21.4658 11.25 21.7985 11.59 21.7985 12C21.7985 12.41 21.4658 12.75 21.0646 12.75Z"
                  fill="#171717"
                />
                <path
                  d="M21.0646 17.75H3.45259C3.05142 17.75 2.71875 17.41 2.71875 17C2.71875 16.59 3.05142 16.25 3.45259 16.25H21.0646C21.4658 16.25 21.7985 16.59 21.7985 17C21.7985 17.41 21.4658 17.75 21.0646 17.75Z"
                  fill="#171717"
                />
              </svg>
            )}
          </div>
        </div>

        <div
          className={`search hidden lg:inline-flex relative items-center gap-6 w-1/2 `}
        >
          <input
            className="flex !bg-[#d9d9d9] h-14 w-full rounded-md border border-black/30 bg-transparent px-8 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="search"
            placeholder="Search"
            name="search"
            id="search"
          />
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
            <img
              className="w-4 h-4 fill-current"
              src={images.searchIcon}
              alt="search icon"
            />
          </span>
          <Button>Login</Button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } lg:hidden bg-slate-50 w-full px-8 py-4 flex-col rounded-md z-10`}
      >
        <ul className={`gap-4 ${isOpen ? "visible" : "hidden"}`}>
          {menuItems.slice(0, navMenu).map((item, index) => (
            <li
              key={index}
              className={`text-[var(--primary-700, #0E0F3B)] cursor-pointer ${
                location === item.href
                  ? " text-[#19A948] transition ease-linear duration-200"
                  : ""
              }`}
            >
              <Link
                to={item.href}
                onClick={() => handleHamburgerClick(item.href)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li
            onClick={handleDropDown}
            className="text-[var(--primary-700, #0E0F3B)]"
          >
            {isOpen && isDropDown ? (
              <>
                <button
                  className="dropbtn flex items-center relative"
                  onClick={handleDropDown}
                >
                  More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-4 w-4"
                  >
                    <polyline points="6 15 12 9 18 15"></polyline>
                  </svg>
                </button>
                <ul>
                  {menuItems
                    .slice(navMenu, navMenu + dropDownMenu)
                    .map((item, index) => (
                      <li
                        key={index}
                        className={`text-[var(--primary-700, #0E0F3B)] px-4 ${
                          location === item.href
                            ? " text-[#19A948] transition ease-linear duration-200"
                            : ""
                        }`}
                      >
                        <Link
                          to={item.href}
                          onClick={() => handleNavbarClick(`${item.href}`)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </>
            ) : (
              <button className="dropbtn flex items-center">
                More
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-4 w-4"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>
            )}
          </li>
        </ul>
      </div>
      {viewNotification && (
        <div className="absolute z-10 flex flex-col right-2 sm:right-20 bg-[#D9D9D9] overflow-scroll h-[35vh] p-2 lg:hidden rounded-md w-fit">
          {featuredItems.map((items, index) => (
            <div
              className="flex flex-row items-center gap-4 p-2 border border-solid bg-[#BDBEEB] mb-2 rounded-md"
              key={index}
            >
              <img src={items.image} alt={index} className="h-12" />
              <h1 className="m-0 break-words w-64 sm:w-80 font-semibold">
                Kathmandu University School of Education (KUSoEd)
              </h1>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MainNavigation;
