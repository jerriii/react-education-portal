import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import { useContext } from "react";
import { AllContext } from "../App";

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

const AdvertisementSection = () => {
  const { Home } = useContext(AllContext);
  const advertisements = Home.advertisements;
  const advertisementContent = advertisements.map((advertisement) => (
    <Link to={advertisement.href} key={advertisement.name}>
      <div
        className={`advertisement-box border-2 w-full py-12 bg-[lightgray] px-20
        text-center rounded-md`}
      >
        {advertisement.name}
      </div>
    </Link>
  ));
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
        items={advertisementContent}
      />
    </div>
  );
};

export default AdvertisementSection;
