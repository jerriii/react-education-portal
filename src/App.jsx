import { createContext, useState, Suspense, lazy } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import images from "../src/assets/img/index";
import useUniqueDataFilter from "./CustomHooks/useUniqueDataFilter";
import data from "../src/components/DummyData.json";
import LoadingSpinner from "./components/LoadingSpinner";
import CourseInquiry from "./Pages/CourseInquiry";
import CollegeDetails from "./Pages/CollegeDetails";
import CoursesDetails from "./Pages/CoursesDetails";
import SignIn from "./Pages/SignIn";
import useDynamicDisplay from "./CustomHooks/useDynamicDisplay";

export const AllContext = createContext({
  Navbar: {},
  Home: {},
  Colleges: {},
  Courses: {},
  CourseInquiry: {},
  Footer: {},
});
const NavBar = lazy(() => import("../src/components/Navbar/Navbar"));
const Home = lazy(() => import("../src/Pages/Home"));
const Colleges = lazy(() => import("../src/Pages/Colleges"));
const Courses = lazy(() => import("./Pages/Courses"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const navigate = useNavigate();
  const handleNavbarClick = (path) => {
    navigate(path);
  };

  const handleItemClick = (elementType, elementId) => {
    const path = `/${elementType}${elementId ? `/${elementId}` : ""}`;
    navigate(path);
  };

  const {
    menuItems,
    studyFieldItems,
    advertisements,
    collegeDatas,
    socialLinks,
    informationLinks,
    allCourses,
    collegeDetails,
  } = data;
  const [degreeData] = useUniqueDataFilter(allCourses, "degree");
  const [affiliationData] = useUniqueDataFilter(allCourses, "affiliation");
  const [studyFieldData] = useUniqueDataFilter(allCourses, "study_field");
  const [collegeAffiliationData] = useUniqueDataFilter(
    collegeDatas,
    "affiliation"
  );
  const [collegeAddressData] = useUniqueDataFilter(collegeDatas, "address");
  const [collegeCoursesData] = useUniqueDataFilter(collegeDatas, "courses");

  const navMenu = useDynamicDisplay({
    mobile: 3,
    tablet: 4,
    desktopsm: 4,
    desktopmd: 4,
    other: 4,
  });
  const dropDownMenu = Math.max(menuItems.length - navMenu, 0);
  const [isDropDown, setIsDropDown] = useState(false);
  const [affiliationFilter, setAffiliationFilter] = useState([]);
  const [degreeFilter, setDegreeFilter] = useState([]);
  const [studyFieldFilter, setStudyFieldFilter] = useState([]);
  const [collegeAffiliatedFilter, setCollegeAffiliatedFilter] = useState([]);
  const [collegeAddressFilter, setCollegeAddressFilter] = useState([]);
  const [collegeCoursesFilter, setCollegeCoursesFilter] = useState([]);

  const handleDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  return (
    <AllContext.Provider
      value={{
        Navbar: {
          images,
          handleNavbarClick,
          navMenu,
          isDropDown,
          dropDownMenu,
          handleDropDown,
          menuItems,
        },
        Home: {
          studyFieldItems,
          advertisements,
          collegeDatas,
        },
        Colleges: {
          images,
          setCollegeCoursesFilter,
          setCollegeAddressFilter,
          setCollegeAffiliatedFilter,
          collegeDatas,
          collegeAffiliationData,
          collegeAddressData,
          collegeCoursesData,
          collegeAffiliatedFilter,
          collegeAddressFilter,
          collegeCoursesFilter,
          handleItemClick,
          collegeDetails,
        },
        Courses: {
          images,
          allCourses,
          affiliationData,
          degreeData,
          studyFieldData,
          advertisements,
          affiliationFilter,
          setAffiliationFilter,
          degreeFilter,
          setDegreeFilter,
          studyFieldFilter,
          setStudyFieldFilter,
          handleItemClick,
        },
        CourseInquiry: {
          advertisements,
        },
        Footer: {
          socialLinks,
          informationLinks,
          handleItemClick,
        },
      }}
    >
      <Suspense fallback={<LoadingSpinner />}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course-inquiry" element={<CourseInquiry />} />
          <Route path="/colleges/:collegeId" element={<CollegeDetails />} />
          <Route path="/courses/:courseId" element={<CoursesDetails />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
        <Footer />
      </Suspense>
    </AllContext.Provider>
  );
}

export default App;
