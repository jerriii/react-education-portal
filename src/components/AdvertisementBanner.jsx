import PropTypes from "prop-types";
import { useContext } from "react";
import { AllContext } from "../App";
import Banner from "./Banner";

const AdvertisementBanner = () => {
  const { Navbar } = useContext(AllContext);
  const images = Navbar.images;
  const advertisement = [
    {
      name: "banner1",
      image: images.advertisementBanner,
      href: "/banner1",
    },
  ];
  return advertisement.map((advertisement, index) => (
    <Banner
      to={advertisement.href}
      key={index}
      src={advertisement.image}
      alt={index}
    />
  ));
};

AdvertisementBanner.propTypes = {
  images: PropTypes.object,
};

export default AdvertisementBanner;
