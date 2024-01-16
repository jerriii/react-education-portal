import AliceCarousel from "react-alice-carousel";
import PropTypes from "prop-types";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: {
    items: 1,
  },
  768: {
    items: 2,
  },
  1024: {
    items: 3,
  },
  1536: {
    items: 4,
  },
};

const AdvertisementSection = ({ data }) => {
  return (
    <div className="advertisement-section flex cursor-pointer justify-between">
      <AliceCarousel
        disableDotsControls
        autoPlay
        infinite
        autoPlayInterval={2000}
        autoPlayStrategy="all"
        disableButtonsControls
        responsive={responsive}
        items={data}
      />
    </div>
  );
};

AdvertisementSection.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string,
    })
  ),
};

export default AdvertisementSection;
