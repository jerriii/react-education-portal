import { Fragment, useContext, useState } from "react";
import Button from "../utils/Button";
import Banner from "./Banner";
import { AllContext } from "../App";
import { useParams } from "react-router-dom";
import useDynamicDisplay from "../CustomHooks/useDynamicDisplay";
import Span from "../utils/Span";
import Comments from "./Comments";
import "../App.css";

const CollegeDetailsMain = () => {
  //useStates
  const [isOpen, setIsOpen] = useState({
    educationData: false,
    description: false,
    principal_remarks: false,
  });

  //destructured datas
  const { collegeId } = useParams();
  const { Colleges } = useContext(AllContext);
  const { images, collegeDetails } = Colleges;

  //custom hook
  const [itemsToShow] = useDynamicDisplay({
    tablet: 3,
    desktopsm: 3,
    desktopmd: 4,
    other: 4,
  });

  //array datas
  const advertisement = [
    {
      name: "banner1",
      image: images.advertisementBanner,
      href: "/banner1",
    },
  ];

  //other datas
  const length = 500;
  const collegeData = collegeDetails.filter(
    (college) => college.college_id === parseInt(collegeId, 10)
  );
  const educationData = collegeData.flatMap((college) => {
    return college.education;
  });
  const totalItemsToDisplay = isOpen.educationData
    ? educationData.length
    : itemsToShow;
  const [descriptionLength] = collegeData.map((items) => {
    return items.description.length;
  });

  //functions
  function handleViewMore(type) {
    switch (type) {
      case "educationData":
        setIsOpen((prev) => ({
          ...prev,
          educationData: !prev.educationData,
        }));
        break;
      case "description":
        setIsOpen((prev) => ({ ...prev, description: !prev.description }));
        break;
      case "principal_remarks":
        setIsOpen((prev) => ({
          ...prev,
          principal_remarks: !prev.principal_remarks,
        }));
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <section className="flex flex-col px-7.5 py-8 bg-white ">
        <h1 className="hidden lg:block text-2xl font-semibold pb-7.5 border-b border-custom-border-color">
          Profile
        </h1>
        <div className="flex lg:hidden border-b border-custom-border-color items-center pb-7.5 justify-between">
          <h1 className="text-2xl font-semibold">Profile</h1>
          <div className="flex flex-row gap-4">
            <span
              role="button"
              className="flex flex-row flex-nowrap items-center bg-custom-green-color rounded-custom-radius-20px transition-transform duration-300 transform hover:scale-110"
            >
              <span className="px-5 py-4 rounded-custom-radius-20px bg-[#00D066]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="33"
                  viewBox="0 0 31 33"
                  fill="none"
                >
                  <path
                    d="M21.4506 9.71767C21.3612 9.81064 21.2901 9.92124 21.2417 10.0431C21.1932 10.165 21.1682 10.2957 21.1682 10.4277C21.1682 10.5597 21.1932 10.6904 21.2417 10.8123C21.2901 10.9341 21.3612 11.0447 21.4506 11.1377L25.8422 15.7377H3.36876C3.11555 15.7377 2.87273 15.843 2.69369 16.0306C2.51465 16.2181 2.41406 16.4725 2.41406 16.7377C2.41406 17.0029 2.51465 17.2572 2.69369 17.4448C2.87273 17.6323 3.11555 17.7377 3.36876 17.7377H25.8231L21.4506 22.3077C21.2728 22.495 21.173 22.7485 21.173 23.0127C21.173 23.2769 21.2728 23.5303 21.4506 23.7177C21.6295 23.9039 21.8715 24.0085 22.1237 24.0085C22.3759 24.0085 22.6179 23.9039 22.7967 23.7177L28.8686 17.3577C28.9503 17.2755 29.0153 17.177 29.0598 17.0678C29.1042 16.9587 29.1271 16.8413 29.1271 16.7227C29.1271 16.604 29.1042 16.4866 29.0598 16.3775C29.0153 16.2684 28.9503 16.1698 28.8686 16.0877L22.8063 9.71767C22.7175 9.62394 22.612 9.54955 22.4956 9.49878C22.3793 9.44801 22.2545 9.42188 22.1285 9.42188C22.0024 9.42188 21.8777 9.44801 21.7613 9.49878C21.645 9.54955 21.5394 9.62394 21.4506 9.71767Z"
                    fill="#E8E8F8"
                  />
                </svg>
              </span>
            </span>
            <span
              role="button"
              className="flex flex-row flex-nowrap items-center bg-[#CCCCCC] rounded-custom-radius-20px transition-transform duration-300 transform hover:scale-110"
            >
              <span className="px-5 py-4 rounded-custom-radius-20px bg-[#A5A5A5]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="33"
                  viewBox="0 0 31 33"
                  fill="none"
                >
                  <path
                    d="M22.7042 21.7543C22.6112 21.6649 22.5006 21.5938 22.3788 21.5454C22.2569 21.4969 22.1262 21.4719 21.9942 21.4719C21.8622 21.4719 21.7315 21.4969 21.6096 21.5454C21.4878 21.5938 21.3772 21.6649 21.2842 21.7543L16.6842 26.1459L16.6842 3.67247C16.6842 3.41927 16.5788 3.17644 16.3913 2.9974C16.2038 2.81836 15.9494 2.71777 15.6842 2.71777C15.419 2.71777 15.1646 2.81836 14.9771 2.9974C14.7896 3.17644 14.6842 3.41927 14.6842 3.67247L14.6842 26.1268L10.1142 21.7543C9.92684 21.5765 9.67339 21.4767 9.4092 21.4767C9.14501 21.4767 8.89156 21.5765 8.7042 21.7543C8.51795 21.9332 8.41341 22.1752 8.41341 22.4274C8.41341 22.6796 8.51795 22.9216 8.7042 23.1005L15.0642 29.1723C15.1463 29.254 15.2449 29.3191 15.354 29.3635C15.4632 29.4079 15.5806 29.4308 15.6992 29.4308C15.8178 29.4308 15.9352 29.4079 16.0444 29.3635C16.1535 29.3191 16.2521 29.254 16.3342 29.1723L22.7042 23.11C22.7979 23.0213 22.8723 22.9157 22.9231 22.7993C22.9739 22.683 23 22.5582 23 22.4322C23 22.3061 22.9739 22.1814 22.9231 22.065C22.8723 21.9487 22.7979 21.8431 22.7042 21.7543Z"
                    fill="#007E46"
                  />
                </svg>
              </span>
            </span>
          </div>
        </div>
        {collegeData.map((data, i) => (
          <p key={i} className="py-3">
            {isOpen.description
              ? data.description
              : data.description.substring(0, length) +
                `${data.description.length > length ? "..." : ""}`}
          </p>
        ))}

        {descriptionLength > length && (
          <Span
            onClick={() => handleViewMore("description")}
            customClassName={"ml-auto"}
          >
            {isOpen.description ? "Hide all <<" : "View all >>"}
          </Span>
        )}
      </section>

      {advertisement.map((advertisement, index) => (
        <Banner
          to={advertisement.href}
          key={index}
          src={advertisement.image}
          alt={index}
          customClass={"!my-0 px-5 pt-15 bg-white"}
        />
      ))}
      <section className="bg-white px-7.5 flex flex-col">
        {collegeData?.map((item, index) => (
          <Fragment key={index}>
            <h1 className="py-5 text-2xl font-semibold border-b border-b-custom-border-color">
              Principal Remarks
            </h1>
            <p className="py-7.5">
              &quot;
              {isOpen.principal_remarks
                ? item.principal_remarks
                : item.principal_remarks.substring(0, length) +
                  `${item.principal_remarks.length > length ? "..." : ""}`}
              &quot;
            </p>
            {item.principal_remarks.length > length && (
              <Span
                onClick={() => handleViewMore("principal_remarks")}
                customClassName={"ml-auto"}
              >
                {isOpen.principal_remarks ? "Hide all <<" : "View all >>"}
              </Span>
            )}
            <div className="flex flex-row gap-5 py-2">
              <img
                src={item.principal_image}
                alt="principal"
                className="w-custom-50px h-custom-50px "
                style={{
                  objectFit:
                    item.principal_image.width > 50 ||
                    item.principal_image.height > 50
                      ? "contain"
                      : "cover",
                }}
              />
              <div>
                <h1 className="font-bold">{item.principal_name}</h1>
                <p className="font-semibold text-xs">Principal</p>
              </div>
            </div>
          </Fragment>
        ))}
      </section>
      <section className="grid grid-cols-3 gap-custom-10px px-3 py-5 bg-white">
        {collegeData.flatMap((college) =>
          college.college_images.map((image, j) => (
            <img
              src={image}
              alt={`${college} + ${j}`}
              key={j}
              className="w-full h-full object-cover"
            />
          ))
        )}
      </section>
      <div className="bg-white px-7 flex flex-col">
        <section className="grid grid-cols-1 xl:grid-cols-2 lg:justify-items-start justify-items-center bg-white pb-3 pt-32 relative gap-custom-18px">
          <h1 className="absolute top-0 left-0 right-0 pt-custom-50px lg:px-28 px-2 pb-32 text-2xl text-center lg:text-start text-white font-bold bg-custom-green-color">
            Education Programs
          </h1>
          {educationData.slice(0, totalItemsToDisplay).map((items, index) => (
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
        <Span
          onClick={() => handleViewMore("educationData")}
          customClassName={"ml-auto"}
        >
          {educationData.length > itemsToShow && isOpen.educationData
            ? "Hide all <<"
            : "View all >>"}
        </Span>
      </div>
      <Comments />
    </div>
  );
};

export default CollegeDetailsMain;
