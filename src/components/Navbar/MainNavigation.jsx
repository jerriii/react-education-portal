import Button from "../../utils/Button";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AllContext } from "../../App";
import data from "../DummyData.json";
import Icons from "./Icons";

const MainNavigation = () => {
  const { Navbar } = useContext(AllContext);
  const {
    menuItems,
    handleNavbarClick,
    navMenu,
    handleDropDown,
    isDropDown,
    dropDownMenu,
    images,
  } = Navbar;
  const { featuredItems } = data;
  const [isOpen, setIsOpen] = useState(false);
  const [viewNotification, setViewNotification] = useState(false);

  const [activeTab, setActiveTab] = useState(0);
  const indication = String(70 * activeTab + 8 * activeTab);

  const location = useLocation().pathname;

  useEffect(() => {
    const index = menuItems.findIndex((item) => item.href === location);
    setActiveTab(navMenu > index ? index : null);
  }, [menuItems, navMenu, location]);

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

  function handleActiveTab(index) {
    setActiveTab(index);
  }

  return (
    <>
      <div
        className={`flex items-center mb-2 p-2 lg:gap-4 sm:p-0 sm:justify-between`}
      >
        {/* logo */}
        <Link to="/">
          <h1 className=" bg-gradient-to-r from-[#0E0F3B] via-[#083B3F] to-[#007E46]  hidden md:inline-block text-transparent bg-clip-text text-[50px] font-bold tracking-wide">
            NepEduNavigator
          </h1>
        </Link>

        {/* logo mobile */}
        <div className="flex md:hidden mr-auto">
          <Link to="/" className="sm:mr-auto leading-normal">
            <h1 className=" bg-gradient-to-r from-[#0E0F3B] via-[#083B3F] to-[#007E46]  inline-block md:hidden text-transparent bg-clip-text text-10 font-bold tracking-wide">
              NepEduNavigator
            </h1>
          </Link>
        </div>

        <div className="flex flex-row gap-2">
          {/* notifications icon */}
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

          {/* notifications */}
          <div
            className={`hidden lg:hidden ${
              viewNotification ? "sm:hidden" : "sm:block"
            }`}
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

        {/* search input */}
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
          <Button
            customClass={`!rounded-custom-radius-10px ${
              location === "/sign-in"
                ? "!bg-[#19A948] !transition !ease-linear !duration-200"
                : ""
            }`}
            onSubmit={() => handleNavbarClick("/sign-in")}
          >
            Sign&nbsp;In
          </Button>
        </div>
      </div>

      {/* tablet navmenu */}
      <div
        className={`${
          isOpen ? "sm:flex" : "sm:hidden"
        } hidden lg:hidden bg-slate-50 w-full px-8 py-4 flex-col rounded-md z-10`}
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

      {/* mobile navmenu */}
      <section className="w-full fixed left-0 bottom-0 flex justify-center sm:hidden bg-custom-navbar-black-color rounded-ss-custom-radius-10px rounded-se-custom-radius-10px z-50">
        <div
          className={` inline-flex flex-row relative bottom-0 left-0 text-white  h-16 z-10 `}
        >
          <ul
            className={`flex flex-row relative justify-between items-center w-auto gap-2`}
          >
            {menuItems.slice(0, navMenu).map((item, index) => (
              <li key={index} className={`cursor-pointer w-custom-70px`}>
                <Link
                  className="flex justify-center items-center relative w-full text-center"
                  onClick={() => handleActiveTab(index)}
                  to={item.href}
                >
                  <span
                    className={`icon relative block leading-custom-75px duration-300 ${
                      activeTab === index ? "-translate-y-9" : ""
                    }`}
                  >
                    {<Icons data={item.logo} />}
                  </span>
                </Link>
              </li>
            ))}

            <li onClick={handleDropDown} className="w-custom-70px">
              <>
                <button
                  className="dropbtn flex items-center relative m-auto"
                  onClick={handleDropDown}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3ZM12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
                      fill="white"
                    />
                  </svg>
                </button>

                {/* mobile more menu  */}
                {isDropDown && (
                  <ul
                    className={`absolute right-0 bottom-14 bg-custom-navbar-black-color transition ease-linear duration-200`}
                  >
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
                            onClick={() => {
                              handleNavbarClick(`${item.href} `);
                              setActiveTab(null);
                            }}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                )}
              </>
            </li>
            <div
              className={`indicator ${
                activeTab ?? "hidden"
              } absolute w-custom-70px h-custom-70px border-8 border-white rounded-full -top-9 -z-10 bg-custom-green-color ease-in-out duration-500`}
              style={{
                left: `${indication}px`,
                transform: `translateX(calc(70*${activeTab}))`,
              }}
            >
              {" "}
            </div>
          </ul>
        </div>
      </section>
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
