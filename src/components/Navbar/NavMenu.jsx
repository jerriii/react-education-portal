import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AllContext } from "../../App";

const NavMenu = () => {
  const { Navbar } = useContext(AllContext);
  const menuItems = Navbar.menuItems;
  const handleNavbarClick = Navbar.handleNavbarClick;
  const navMenu = Navbar.navMenu;
  const handleDropDown = Navbar.handleDropDown;
  const dropDownMenu = Navbar.dropDownMenu;
  const isDropDown = Navbar.isDropDown;
  const location = useLocation().pathname;

  return (
    <div className="navbar-links py-4 hidden lg:block">
      <ul className="inline-flex gap-4">
        {menuItems.slice(0, navMenu).map((item, index) => (
          <li
            key={index}
            className={`text-[var(--primary-700, #0E0F3B)] cursor-pointer${
              location === item.href
                ? " text-[#19A948] transition ease-linear duration-200"
                : ""
            }`}
          >
            <Link to={item.href} onClick={() => handleNavbarClick(item.href)}>
              {item.name}
            </Link>
          </li>
        ))}
        <li
          onClick={handleDropDown}
          className="text-[var(--primary-700, #0E0F3B)]"
        >
          {isDropDown ? (
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
              <div className="absolute bg-[#f9f9f9] shadow-md z-10 flex flex-col w-56 px-4 h-auto">
                <ul>
                  {menuItems
                    .slice(navMenu, navMenu + dropDownMenu)
                    .map((item, index) => (
                      <li
                        key={index}
                        className={`border-b-[1px] text-[var(--primary-700, #0E0F3B)] ${
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
              </div>
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
  );
};

export default NavMenu;
