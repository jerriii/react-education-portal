import { Fragment, useContext, useState } from "react";
import Banner from "./Banner";
import { AllContext } from "../App";
import "../App.css";
import ReadMoreLessContent from "./ReadMoreLessContent";
import Comments from "./Comments";
import Span from "../utils/Span";
import useDynamicDisplay from "../CustomHooks/useDynamicDisplay";
import Button from "../utils/Button";

const CollegeDetailsMain = () => {
  //useStates
  const [isOpen, setIsOpen] = useState(false);
  //destructured data
  const { Colleges } = useContext(AllContext);
  const { images, collegeDetails } = Colleges;

  //custom hook
  const [itemsToShow] = useDynamicDisplay({
    tablet: 3,
    desktopsm: 3,
    desktopmd: 4,
    other: 4,
  });

  const totalItemsToDisplay = isOpen
    ? collegeDetails.education.length
    : itemsToShow;

  //array datas
  const advertisement = [
    {
      name: "banner1",
      image: images.advertisementBanner,
      href: "/banner1",
    },
  ];

  function handleViewMore() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="flex flex-col rounded-custom-radius-10px bg-white">
      <ReadMoreLessContent
        heading={"Profile"}
        content={collegeDetails.description}
        wordLimit={500}
      />

      {advertisement.map((advertisement, index) => (
        <Banner
          to={advertisement.href}
          key={index}
          src={advertisement.image}
          alt={index}
          customClass={"!my-0 px-5 pt-15 bg-white"}
        />
      ))}

      <ReadMoreLessContent
        heading={"Principal Remarks"}
        content={collegeDetails.principal_remarks}
        wordLimit={500}
      />

      <div className="flex flex-row gap-5 px-7.5 py-2">
        <img
          src={collegeDetails.principal_image}
          alt="principal"
          className="w-custom-50px h-custom-50px "
          style={{
            objectFit:
              collegeDetails.principal_image.width > 50 ||
              collegeDetails.principal_image.height > 50
                ? "contain"
                : "cover",
          }}
        />
        <div>
          <h1 className="font-bold">{collegeDetails.principal_name}</h1>
          <p className="font-semibold text-xs">Principal</p>
        </div>
      </div>
      <section className="grid grid-cols-3 gap-custom-10px px-3 py-5 bg-white">
        {collegeDetails.college_images.map((image, j) => (
          <img
            src={image}
            alt={`${image} + ${j}`}
            key={j}
            className="w-full h-full object-cover"
          />
        ))}
      </section>
      <div className="bg-white px-7 flex flex-col">
        <section className="grid grid-cols-1 xl:grid-cols-2 lg:justify-items-start justify-items-center bg-white pb-3 pt-32 relative gap-custom-18px">
          <h1 className="absolute top-0 left-0 right-0 pt-custom-50px lg:px-28 px-2 pb-32 text-2xl text-center lg:text-start text-white font-bold bg-custom-green-color">
            Education Programs
          </h1>
          {collegeDetails.education
            .slice(0, totalItemsToDisplay)
            .map((items, index) => (
              <Fragment key={`${items.subject} + ${index}`}>
                <div className="flex flex-col gap-2 py-8 px-7.5 shadow-2xl w-fit lg:w-full h-full relative bg-white">
                  <h1 className="text-2xl font-semibold">{items.subject}</h1>
                  <div className="pl-4 flex flex-col gap-2 w-auto">
                    <ul className="list-disc break-words">
                      <li>Application Form Distribution and Submission</li>
                      <li>
                        Deadline: {items.deadline.start} to {items.deadline.end}
                      </li>
                      <li>Entrance Examination: {items.exam_date}</li>
                      <li>Exam Time: {items.exam_time}</li>
                      <li>Class Start: {items.class_start}, onwards</li>
                      <li>Entrance Exam Fee: {items.entrance_fee}/-</li>
                    </ul>
                  </div>
                  <Button
                    customClass={
                      "px-10 py-custom-18px w-fit !rounded-custom-radius-20px"
                    }
                  >
                    Apply Now
                  </Button>
                </div>
              </Fragment>
            ))}
        </section>
        <Span onClick={() => handleViewMore()} customClassName={"ml-auto"}>
          {collegeDetails.education.length > itemsToShow &&
            (isOpen ? "Hide all <<" : "View all >>")}
        </Span>
      </div>
      <Comments limit={500} />
    </div>
  );
};

export default CollegeDetailsMain;
