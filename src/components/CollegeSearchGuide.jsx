import AliceCarousel from "react-alice-carousel";
import images from "../assets/img/index";
import Button from "./Button";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useRef } from "react";
import "../../src/assets/css/custom-carousel.css";

const responsive = {
  0: { items: 1 },
  768: { items: 2 },
  1024: { items: 3 },
  2560: { items: 4 },
};

const items = [
  { id: 1, image: images.dummy1 },
  { id: 2, image: images.dummy2 },
  { id: 3, image: images.dummy3 },
  { id: 4, image: images.dummy4 },
  { id: 5, image: images.dummy5 },
];

const CollegeSearchGuide = () => {
  const ref = useRef(null);

  const handleLeft = () => {
    return (
      <button className="hidden xl:inline-block absolute border-2 p-2 rounded-full right-[60%] bottom-[6%]">
        <FiChevronLeft />
      </button>
    );
  };

  const handleRight = () => {
    return (
      <button className="hidden xl:inline-block absolute border-2 p-2 rounded-full right-[36%] bottom-[6%]">
        <FiChevronRight />
      </button>
    );
  };

  return (
    <div className="college-search-guide flex flex-col lg:flex-row flex-wrap justify-between items-start gap-4 sm:gap-2 bg-[#D9D9D957] py-8 px-4 my-2 sm:my-4">
      <div className="college-description sm:w-96 h-64 m-auto xl:m-0 flex-col items-center sm:items-start gap-1.5 justify-between lg:justify-start text-center sm:text-start inline-flex">
        <div className="w-full sm:w-96 h-20 text-black text-3xl font-semibold">
          Need help finding the right college?
        </div>
        <div className="w-full sm:w-80 h-28 text-zinc-800 text-base font-normal leading-normal tracking-tight">
          Lorem Ipsum is slechts een proeftekst uit het drukkerij- en
          zetterijwezen. <br />
          Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds.
        </div>
        <Button>Sign Up</Button>
      </div>
      <div className=" w-full xl:w-[54vw] 2xl:w-[60vw] m-auto xl:m-0">
        <AliceCarousel
          mouseTracking
          keyboardNavigation
          infinite
          autoPlay
          autoPlayInterval={2000}
          autoPlayStrategy="all"
          renderPrevButton={handleLeft}
          renderNextButton={handleRight}
          responsive={responsive}
          controlsStrategy="alternate"
          ref={ref}
        >
          {items.map((item, index) => (
            <img
              src={item.image}
              alt={item.id}
              key={index}
              className="h-60 w-11/12 rounded-lg"
            />
          ))}
        </AliceCarousel>
      </div>
    </div>
  );
};

export default CollegeSearchGuide;
