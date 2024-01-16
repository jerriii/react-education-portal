import { useNavigate } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "../../src/assets/css/carousel.css";
import { useContext, useRef } from "react";
import { AllContext } from "../App";
import images from "../assets/img/index";

const StudyField = () => {
  const { Home } = useContext(AllContext);
  const studyFieldItems = Home.studyFieldItems;
  const navigate = useNavigate();
  const ref = useRef(null);

  const handleClick = (path, data) => {
    navigate(path, data);
    window.scrollTo(0, 0);
  };

  const responsive = {
    0: { items: 1 },
    640: { items: 1 },
    1024: { items: 2 },
    1280: { items: 3 },
    1440: {
      items: 3,
    },
    1536: {
      items: 4,
    },
    2560: {
      items: 6,
    },
  };

  const NextBtn = () => {
    ref.current.slideNext();
  };

  const PrevBtn = () => {
    ref.current.slidePrev();
  };

  // const handleSlideChange = ({ index }) => {
  //   if (index === 0) {
  //     ref.current.isPrevDisabled = true;
  //   } else {
  //     ref.current.isPrevDisabled = false;
  //   }
  //   if (index === studyFieldItems.length - 1) {
  //     ref.current.isNextDisabled = true;
  //   } else {
  //     ref.current.isNextDisabled = false;
  //   }
  // };
  return (
    <section className="study-field w-auto gap-4 flex flex-col items-center my-8 bg-[#D9D9D93D] py-2 sm:py-4 md:px-20">
      <h1 className="text-[#000] text-center font-OpenSans font-semibold text-3xl">
        Field of Study
      </h1>
      <div className="w-full flex flex-row items-center gap-2 sm:gap-0 px-2 sm:px-0">
        <div
          className="flex hover:cursor-pointer items-center w-8 sm:w-auto h-8 sm:h-auto"
          onClick={PrevBtn}
        >
          <svg
            width="51"
            height="53"
            viewBox="0 0 51 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g id="Group 159">
              <ellipse
                id="Ellipse 10"
                cx="25.5"
                cy="26"
                rx="25.5"
                ry="26"
                transform="matrix(-1 0 0 1 51 0.43457)"
                fill="#CECBCE"
              />
              <rect
                id="15574942051535694868-64 1"
                width="21"
                height="21"
                transform="matrix(-1 0 0 1 36 15.4346)"
                fill="url(#pattern0)"
              />
            </g>
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlinkHref="#image0_365_2097" transform="scale(0.015625)" />
              </pattern>
              <image
                id="image0_365_2097"
                data-name="15574942051535694868-64.png"
                width="64"
                height="64"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAA8ElEQVR4nO3bIU4DYRgG4QdIAM0JKuAUYLlHBZJTcBkkCaKCy5AAp8AUgYE0VS27of9MsvbLO5P8comIPXCHFzzgdOYtk3OD9Y/v2WARln4HGC7CBd4MHmGBV5sRVjifb9a0LBShCBQBRUARUAQUAUVAEVAEFAFFQBFQBBQBRUARUAQUAUVAEVAEcIl3mxGecDTjrknZFuF218PHux6YmfXcA6Zg6CewTX6Fsxl3TULykk8+ecknf9Akb1D5K4PLf0g++eQln/xBk7zkk09e8ocvP/wvM0sDy8O1fyx/socb777f/xkecY/PPdyNiL/nC1HePJQ91OE3AAAAAElFTkSuQmCC"
              />
            </defs>
          </svg>
        </div>
        <div className="study-field-card-container w-full flex flex-row justify-start flex-nowrap gap-4 items-center overflow-hidden">
          <AliceCarousel
            disableDotsControls
            disableButtonsControls
            autoPlay
            infinite
            autoPlayStrategy="all"
            autoPlayInterval={2000}
            responsive={responsive}
            ref={ref}
          >
            {studyFieldItems.map((items, index) => (
              <div
                key={index}
                className="Faculty w-auto sm:w-64 h-auto sm:h-64 relative flex flex-col rounded-lg border mr-4 sm:mr-0 border-black hover:cursor-pointer"
                onClick={() => handleClick(items.href, items)}
              >
                <div className="flex flex-row flex-nowrap items-center justify-start gap-8 p-2 sm:p-4">
                  <div className="border-solid border-2 border-black rounded-full p-2">
                    <img src={images.facultyLogo1} alt={index + 1} />
                  </div>
                  <div>
                    <h1 className="font-semibold">{items.field_name}</h1>
                    <p>{items.total_colleges} Colleges</p>
                  </div>
                </div>
                <div className="flex w-full h-auto justify-center flex-col">
                  {items.courses.map((course, courseIndex) => (
                    <p
                      key={courseIndex}
                      className="border-b max-w-full text-left border-black mx-4 my-2"
                    >
                      {course}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </AliceCarousel>
        </div>
        <div
          className="flex hover:cursor-pointer items-center w-8 sm:w-auto h-8 sm:h-auto"
          onClick={NextBtn}
        >
          <svg
            width="51"
            height="53"
            viewBox="0 0 51 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g id="Group 158">
              <ellipse
                id="Ellipse 10"
                cx="25.5"
                cy="26.4346"
                rx="25.5"
                ry="26"
                fill="#CECBCE"
              />
              <rect
                id="15574942051535694868-64 1"
                x="15"
                y="15.4346"
                width="21"
                height="21"
                fill="url(#pattern0)"
              />
            </g>
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlinkHref="#image0_365_2096" transform="scale(0.015625)" />
              </pattern>
              <image
                id="image0_365_2096"
                data-name="15574942051535694868-64.png"
                width="64"
                height="64"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAA8ElEQVR4nO3bIU4DYRgG4QdIAM0JKuAUYLlHBZJTcBkkCaKCy5AAp8AUgYE0VS27of9MsvbLO5P8comIPXCHFzzgdOYtk3OD9Y/v2WARln4HGC7CBd4MHmGBV5sRVjifb9a0LBShCBQBRUARUAQUAUVAEVAEFAFFQBFQBBQBRUARUAQUAUVAEVAEcIl3mxGecDTjrknZFuF218PHux6YmfXcA6Zg6CewTX6Fsxl3TULykk8+ecknf9Akb1D5K4PLf0g++eQln/xBk7zkk09e8ocvP/wvM0sDy8O1fyx/socb777f/xkecY/PPdyNiL/nC1HePJQ91OE3AAAAAElFTkSuQmCC"
              />
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};
export default StudyField;
