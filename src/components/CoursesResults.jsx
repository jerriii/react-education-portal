import { useContext, useState, useEffect } from "react";
import { AllContext } from "../App";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import allCourses from "./DummyData.json";
import {
  capitalizeFirstLetter,
  courseTypeFilter,
  handleFilter,
} from "../utils/Utils";
import useDynamicDisplay from "../CustomHooks/useDynamicDisplay";
import usePagination from "../CustomHooks/usePagination";
import InquiryForm from "../utils/InquiryForm";

const CoursesResults = () => {
  const { Courses } = useContext(AllContext);
  const {
    affiliationFilter,
    degreeFilter,
    studyFieldFilter,
    setAffiliationFilter,
    setDegreeFilter,
    setStudyFieldFilter,
    handleItemClick,
  } = Courses;
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [affiliationIsOpen, setAffiliationIsOpen] = useState(false);
  const [degreeIsOpen, setDegreeIsOpen] = useState(false);
  const [studyFieldIsOpen, setStudyFieldIsOpen] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState(allCourses.allCourses);
  const [totalContentShown] = useDynamicDisplay({
    desktopsm: 6,
    desktopmd: 9,
    other: 12,
  });
  const [currentPage, setCurrentPage] = useState(1);

  const prevButton = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M16 8L17.43 9.393L11.85 15H24V17H11.85L17.43 22.573L16 24L8 16L16 8Z"
        fill="black"
      />
      <path
        d="M16 30C13.2311 30 10.5243 29.1789 8.22202 27.6406C5.91973 26.1022 4.12532 23.9157 3.06569 21.3576C2.00607 18.7994 1.72882 15.9845 2.26901 13.2687C2.80921 10.553 4.14258 8.05845 6.10051 6.10051C8.05845 4.14258 10.553 2.80921 13.2687 2.26901C15.9845 1.72882 18.7994 2.00607 21.3576 3.06569C23.9157 4.12532 26.1022 5.91973 27.6406 8.22202C29.1789 10.5243 30 13.2311 30 16C29.9958 19.7117 28.5194 23.2702 25.8948 25.8948C23.2702 28.5194 19.7117 29.9958 16 30ZM16 4.00001C13.6266 4.00001 11.3066 4.70379 9.33316 6.02237C7.35977 7.34095 5.8217 9.21509 4.91345 11.4078C4.0052 13.6005 3.76756 16.0133 4.23058 18.3411C4.69361 20.6689 5.83649 22.8071 7.51472 24.4853C9.19296 26.1635 11.3312 27.3064 13.6589 27.7694C15.9867 28.2325 18.3995 27.9948 20.5922 27.0866C22.7849 26.1783 24.6591 24.6402 25.9776 22.6668C27.2962 20.6935 28 18.3734 28 16C27.9963 12.8185 26.7308 9.76845 24.4812 7.51882C22.2316 5.26918 19.1815 4.00371 16 4.00001Z"
        fill="black"
      />
    </svg>
  );
  const nextButton = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M16 8L14.57 9.393L20.15 15H8V17H20.15L14.57 22.573L16 24L24 16L16 8Z"
        fill="black"
      />
      <path
        d="M16 30C13.2311 30 10.5243 29.1789 8.22202 27.6406C5.91973 26.1022 4.12532 23.9157 3.06569 21.3576C2.00607 18.7994 1.72882 15.9845 2.26901 13.2687C2.80921 10.553 4.14258 8.05845 6.10051 6.10051C8.05845 4.14258 10.553 2.80921 13.2687 2.26901C15.9845 1.72882 18.7994 2.00607 21.3576 3.06569C23.9157 4.12532 26.1022 5.91973 27.6406 8.22202C29.1789 10.5243 30 13.2311 30 16C29.9958 19.7117 28.5194 23.2702 25.8948 25.8948C23.2702 28.5194 19.7117 29.9958 16 30ZM16 4.00001C13.6266 4.00001 11.3066 4.70379 9.33316 6.02237C7.35977 7.34095 5.8217 9.21509 4.91345 11.4078C4.0052 13.6005 3.76756 16.0133 4.23058 18.3411C4.69361 20.6689 5.83649 22.8071 7.51472 24.4853C9.19296 26.1635 11.3312 27.3064 13.6589 27.7694C15.9867 28.2325 18.3995 27.9948 20.5922 27.0866C22.7849 26.1783 24.6591 24.6402 25.9776 22.6668C27.2962 20.6935 28 18.3734 28 16C27.9963 12.8185 26.7308 9.76845 24.4812 7.51882C22.2316 5.26918 19.1815 4.00371 16 4.00001Z"
        fill="black"
      />
    </svg>
  );
  const [childData, setChildData] = useState();

  function handleChildData(data) {
    setChildData(data);
  }

  const [firstPostIndex, lastPostIndex, pagination] = usePagination({
    totalPosts: filteredCourses.length,
    postsPerPage: totalContentShown,
    currentPage: currentPage,
    setCurrentPage: setCurrentPage,
    paginationClassName: "flex w-full justify-end",
    pageNumberClassName: "hidden",
    previousChildren: prevButton,
    nextChildren: nextButton,
  });

  useEffect(() => {
    const courses = allCourses.allCourses.filter((filter) => {
      return (
        courseTypeFilter(affiliationFilter, filter.affiliation) &&
        courseTypeFilter(degreeFilter, filter.degree) &&
        courseTypeFilter(studyFieldFilter, filter.study_field)
      );
    });
    setFilteredCourses(courses);
  }, [affiliationFilter, degreeFilter, studyFieldFilter]);

  const handleContentVisibility = (section) => {
    switch (section) {
      case "affiliation":
        setAffiliationIsOpen(!affiliationIsOpen);
        break;
      case "degree":
        setDegreeIsOpen(!degreeIsOpen);
        break;
      case "study_field":
        setStudyFieldIsOpen(!studyFieldIsOpen);
        break;
      default:
        break;
    }
  };

  const handleSearchFilter = () => {
    setFilterIsOpen(!filterIsOpen);
  };

  return (
    <section className="flex flex-col bg-white rounded-lg px-5 w-full">
      <section role="feed" className="flex flex-col gap-4 relative">
        <div className="flex flex-row justify-between lg:justify-start border-b items-center">
          <h1 className="text-2xl font-semibold py-3">Search Results:</h1>
          {filterIsOpen ? (
            <span
              role="button"
              onClick={handleSearchFilter}
              className="block lg:hidden w-5 h-5"
            >
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
            </span>
          ) : (
            <span
              onClick={handleSearchFilter}
              role="button"
              className="block lg:hidden bg-contain w-5 h-5 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="21"
                viewBox="0 0 23 21"
                fill="none"
              >
                <path
                  d="M17.7905 11.2242L21.2831 11.2242C21.4777 11.2242 21.6643 11.1469 21.8019 11.0093C21.9395 10.8717 22.0168 10.685 22.0168 10.4904C22.0168 10.2958 21.9395 10.1092 21.8019 9.97159C21.6643 9.83399 21.4777 9.75669 21.2831 9.75669L17.7905 9.75669C17.6235 9.12245 17.2513 8.56133 16.7318 8.16094C16.2124 7.76054 15.575 7.5434 14.9191 7.5434C14.2633 7.5434 13.6259 7.76054 13.1065 8.16094C12.587 8.56133 12.2148 9.12245 12.0478 9.75669L1.71674 9.75669C1.52214 9.75669 1.33551 9.83399 1.19791 9.97159C1.06031 10.1092 0.983001 10.2958 0.983001 10.4904C0.983001 10.685 1.06031 10.8717 1.19791 11.0093C1.33551 11.1469 1.52214 11.2242 1.71674 11.2242L12.0478 11.2242C12.8011 14.1689 17.0421 14.1689 17.7905 11.2242Z"
                  fill="#0E0F3B"
                />
                <path
                  d="M14.3713 18.7768L21.2831 18.7768C21.4777 18.7768 21.6643 18.6995 21.8019 18.5619C21.9395 18.4243 22.0168 18.2376 22.0168 18.043C22.0168 17.8484 21.9395 17.6618 21.8019 17.5242C21.6643 17.3866 21.4777 17.3093 21.2831 17.3093L14.3713 17.3093C14.2043 16.6751 13.8321 16.1139 13.3126 15.7136C12.7932 15.3132 12.1558 15.096 11.4999 15.096C10.8441 15.096 10.2067 15.3132 9.68723 15.7136C9.16779 16.1139 8.79553 16.6751 8.62856 17.3093L1.71674 17.3093C1.52214 17.3093 1.33551 17.3866 1.19791 17.5242C1.06031 17.6618 0.983001 17.8484 0.983001 18.043C0.983001 18.2376 1.06031 18.4243 1.19791 18.5619C1.33551 18.6995 1.52214 18.7768 1.71674 18.7768L8.62856 18.7768C9.38186 21.7411 13.6229 21.7411 14.3713 18.7768Z"
                  fill="#0E0F3B"
                />
                <path
                  d="M9.05413 3.67154L21.2831 3.67154C21.4777 3.67154 21.6643 3.59423 21.8019 3.45663C21.9395 3.31903 22.0168 3.1324 22.0168 2.9378C22.0168 2.7432 21.9395 2.55657 21.8019 2.41897C21.6643 2.28137 21.4777 2.20406 21.2831 2.20406L9.05413 2.20406C8.88554 1.57194 8.51291 1.01319 7.99412 0.614629C7.47532 0.216065 6.83942 -6.63426e-07 6.18521 -6.92023e-07C5.53099 -7.20619e-07 4.89509 0.216065 4.3763 0.614629C3.85751 1.01319 3.48488 1.57194 3.31629 2.20406L1.71674 2.20406C1.52214 2.20406 1.33551 2.28136 1.19791 2.41897C1.06031 2.55657 0.983001 2.7432 0.983001 2.9378C0.983001 3.1324 1.06031 3.31903 1.19791 3.45663C1.33551 3.59423 1.52214 3.67154 1.71674 3.67154L3.3114 3.67154C3.47837 4.30578 3.85063 4.86689 4.37007 5.26729C4.88952 5.66768 5.52691 5.88483 6.18276 5.88483C6.83861 5.88483 7.47601 5.66768 7.99545 5.26729C8.5149 4.86689 8.88716 4.30578 9.05413 3.67154Z"
                  fill="#0E0F3B"
                />
              </svg>
            </span>
          )}
        </div>

        {filterIsOpen && (
          <section className="lg:hidden flex flex-col absolute z-10 bg-white mt-16 sm:right-20 p-4 shadow-lg rounded-lg top-0 left-0 right-0">
            <>
              <div
                onClick={() => handleContentVisibility("affiliation")}
                className="flex flex-row flex-nowrap justify-between items-center border-b border-black hover:cursor-pointer"
              >
                <h1 className="font-normal text-2xl">Affiliation</h1>{" "}
                {affiliationIsOpen ? <FaChevronDown /> : <FaChevronUp />}
              </div>
              <div
                className={`${
                  affiliationIsOpen ? "hidden" : "flex"
                } flex-col w-auto pr-2 h-auto overflow-auto custom-scrollbar`}
              >
                {Courses.affiliationData.map((filter) => (
                  <label htmlFor={filter} key={filter}>
                    <input
                      type="checkbox"
                      name={filter}
                      id={filter}
                      value={filter}
                      onChange={(e) => handleFilter(e, setAffiliationFilter)}
                    />{" "}
                    {capitalizeFirstLetter(filter)}
                  </label>
                ))}
              </div>
              <div
                onClick={() => handleContentVisibility("degree")}
                className="flex flex-row flex-nowrap justify-between items-center border-b border-black hover:cursor-pointer"
              >
                <h1 className="font-normal text-2xl">Degree</h1>{" "}
                {degreeIsOpen ? <FaChevronDown /> : <FaChevronUp />}
              </div>
              <div
                className={`${
                  degreeIsOpen ? "hidden" : "flex"
                } flex-col w-auto pr-2 h-auto overflow-auto custom-scrollbar`}
              >
                {Courses.degreeData.map((filter) => (
                  <label htmlFor={filter} key={filter}>
                    <input
                      type="checkbox"
                      name={filter}
                      id={filter}
                      value={filter}
                      onChange={(e) => handleFilter(e, setDegreeFilter)}
                    />{" "}
                    {capitalizeFirstLetter(filter)}
                  </label>
                ))}
              </div>
              <div
                onClick={() => handleContentVisibility("study_field")}
                className="flex flex-row flex-nowrap justify-between items-center border-b border-black hover:cursor-pointer"
              >
                <h1 className="font-normal text-2xl">Field of Study</h1>{" "}
                {studyFieldIsOpen ? <FaChevronDown /> : <FaChevronUp />}
              </div>
              <div
                className={`${
                  studyFieldIsOpen ? "hidden" : "flex"
                } flex-col w-auto pr-2 h-auto overflow-auto custom-scrollbar`}
              >
                {Courses.studyFieldData.map((filter) => (
                  <label htmlFor={filter} key={filter}>
                    <input
                      type="checkbox"
                      name={filter}
                      id={filter}
                      value={filter}
                      onChange={(e) => handleFilter(e, setStudyFieldFilter)}
                    />{" "}
                    {capitalizeFirstLetter(filter)}
                  </label>
                ))}
              </div>
            </>
          </section>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 w-full">
          {filteredCourses
            .slice(firstPostIndex, lastPostIndex)
            .map((course) => (
              <div
                key={course.id}
                className="w-auto h-auto bg-white flex flex-col items-center text-center"
                onClick={() => handleItemClick("courses", course.id, course)}
              >
                <div className="w-28 h-28 absolute bg-white rounded-full flex items-center shadow-lg hover:cursor-pointer">
                  <img
                    src={course.logo}
                    alt="imglogo"
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
                <div className="bg-[#D9D9D9] px-4 py-14 md:pb-4 md:pt-10 rounded-lg mt-20 h-full w-full hover:cursor-pointer shadow-md">
                  <h1 className="font-bold">{course.title}</h1>
                  <p>Affiliation: {course.affiliation}</p>
                  <p>Duration: {course.duration}</p>
                </div>
              </div>
            ))}
        </div>
        {pagination}
      </section>
      <section role="form">
        <h1 className="text-[#007E46] text-center text-2xl font-semibold border-b py-2">
          College-Course Inquiry Form
        </h1>
        <InquiryForm
          customFormClass={"p-4 xl:px-32"}
          sendChildData={handleChildData}
        />
        {childData && (
          <p>
            firstName:{childData.firstName}, lastName:{childData.lastName},
            email:
            {childData.email}, country: {childData.country}, phone:{" "}
            {childData.phone}, academy:{childData.academy} , interestedCourse:{" "}
            {childData.interestedCourse}, query: {childData.query},
          </p>
        )}
      </section>
    </section>
  );
};

export default CoursesResults;
