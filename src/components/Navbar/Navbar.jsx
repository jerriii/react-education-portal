import MainNavigation from "./MainNavigation";
import NavMenu from "./NavMenu";

const NavBar = () => {
  return (
    <div className="navbar px-2 sm:px-20 text-[#0E0F3B]">
      <MainNavigation />
      <NavMenu />
    </div>
  );
};

export default NavBar;
