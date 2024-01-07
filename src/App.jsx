import "./App.css";
import NavBar from "../src/components/Navbar/Navbar";
import images from "../src/assets/img/index";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "../src/Pages/Home";
import School from "./Pages/School";
import Courses from "./components/Courses";
import { createContext, useState } from "react";
import Footer from "./components/Footer";

export const AllContext = createContext({
  Navbar: {},
  Home: {},
  Courses: {},
  Footer: {},
});
function App() {
  const navigate = useNavigate();
  const handleNavbarClick = (path) => {
    navigate(path);
  };

  const menuItems = [
    {
      name: "Home",
      href: "/",
      path: "",
    },
    {
      name: "Vacancies",
      href: "/vacancies",
      path: "vacancies",
    },
    {
      name: "Colleges",
      href: "/colleges",
      path: "colleges",
    },
    {
      name: "School",
      href: "/school",
      path: "school",
    },
    {
      name: "Courses",
      href: "/courses",
      path: "courses",
    },
    {
      name: "Link 1",
      href: "/link1",
      path: "link1",
    },
    {
      name: "Link 2",
      href: "/link2",
      path: "link2",
    },
    {
      name: "Link 3",
      href: "/link3",
      path: "link3",
    },
  ];

  const featuredItems = [
    {
      id: 1,
      name: "Kathmandu University School of Education (KUSoEd)",
      description:
        "MPhil in Development Studies MPhil in Educational Leadership..",
      image: images.admissionslogo,
      href: "/feature1",
    },
    {
      id: 2,
      name: "Kathmandu University School of Education (KUSoEd)",
      description:
        "MPhil in Development Studies MPhil in Educational Leadership..",
      image: images.admissionslogo,
      href: "/feature2",
    },
    {
      id: 3,
      name: "Kathmandu University School of Education (KUSoEd)",
      description:
        "MPhil in Development Studies MPhil in Educational Leadership..",
      image: images.admissionslogo,
      href: "/feature3",
    },
    {
      id: 4,
      name: "Kathmandu University School of Education (KUSoEd)",
      description:
        "MPhil in Development Studies MPhil in Educational Leadership..",
      image: images.admissionslogo,
      href: "/feature4",
    },
    {
      id: 5,
      name: "Kathmandu University School of Education (KUSoEd)",
      description:
        "MPhil in Development Studies MPhil in Educational Leadership..",
      image: images.admissionslogo,
      href: "/feature5",
    },
    {
      id: 6,
      name: "Kathmandu University School of Education (KUSoEd)",
      description:
        "MPhil in Development Studies MPhil in Educational Leadership..",
      image: images.admissionslogo,
      href: "/feature6",
    },
    {
      id: 7,
      name: "Kathmandu University School of Education (KUSoEd)",
      description:
        "MPhil in Development Studies MPhil in Educational Leadership..",
      image: images.admissionslogo,
      href: "/feature7",
    },
  ];

  const studyFieldItems = [
    {
      id: 1,
      field_name: "IT",
      total_colleges: "30",
      image: images.facultyLogo1,
      courses: ["BCA", "BIM", "BIT"],
      href: "/faculty1",
    },
    {
      id: 2,
      field_name: "IT",
      total_colleges: "30",
      image: images.facultyLogo1,
      courses: ["BCA", "BIM", "BIT"],
      href: "/faculty2",
    },
    {
      id: 3,
      field_name: "IT",
      total_colleges: "30",
      image: images.facultyLogo1,
      courses: ["BCA", "BIM", "BIT"],
      href: "/faculty3",
    },
    {
      id: 4,
      field_name: "IT",
      total_colleges: "30",
      image: images.facultyLogo1,
      courses: ["BCA", "BIM", "BIT"],
      href: "/faculty4",
    },
    {
      id: 5,
      field_name: "IT",
      total_colleges: "30",
      image: images.facultyLogo1,
      courses: ["BCA", "BIM", "BIT"],
      href: "/faculty5",
    },
  ];

  const advertisements = [
    {
      name: "Advertisement 1",
      href: "/advertisement1",
    },
    {
      name: "Advertisement 2",
      href: "/advertisement2",
    },
    {
      name: "Advertisement 3",
      href: "/advertisement3",
    },
    {
      name: "Advertisement 4",
      href: "/advertisement4",
    },
  ];

  const collegeDatas = [
    {
      id: 1,
      name: "People Campus",
      address: "Paknajol, Kathmandu",
      images: images.collegeimage1,
      href: "colleges",
    },
    {
      id: 2,
      name: "People Campus",
      address: "Paknajol, Kathmandu",
      images: images.collegeimage1,
      href: `colleges`,
    },
    {
      id: 3,
      name: "People Campus",
      address: "Paknajol, Kathmandu",
      images: images.collegeimage1,
      href: `colleges`,
    },
    {
      id: 4,
      name: "People Campus",
      address: "Paknajol, Kathmandu",
      images: images.collegeimage1,
      href: `colleges`,
    },
    {
      id: 5,
      name: "People Campus",
      address: "Paknajol, Kathmandu",
      images: images.collegeimage1,
      href: `colleges`,
    },
    {
      id: 6,
      name: "People Campus",
      address: "Paknajol, Kathmandu",
      images: images.collegeimage1,
      href: `colleges`,
    },
    {
      id: 7,
      name: "People Campus",
      address: "Paknajol, Kathmandu",
      images: images.collegeimage1,
      href: `colleges`,
    },
    {
      id: 8,
      name: "People Campus",
      address: "Paknajol, Kathmandu",
      images: images.collegeimage1,
      href: `colleges`,
    },
    {
      id: 9,
      name: "People Campus",
      address: "Paknajol, Kathmandu",
      images: images.collegeimage1,
      href: `colleges`,
    },
    {
      id: 10,
      name: "People Campus",
      address: "Paknajol, Kathmandu",
      images: images.collegeimage1,
      href: `colleges`,
    },
    {
      id: 11,
      name: "People Campus",
      address: "Paknajol, Kathmandu",
      images: images.collegeimage1,
      href: `colleges`,
    },
    {
      id: 12,
      name: "People Campus",
      address: "Paknajol, Kathmandu",
      images: images.collegeimage1,
      href: `colleges`,
    },
  ];

  const socialLinks = [
    {
      id: 1,
      name: "Facebook",
      href: "www.facebook.com",
      logo: images.facultyLogo1,
    },
    {
      id: 2,
      name: "Twitter",
      href: "www.facebook.com",
      logo: images.facultyLogo1,
    },
    {
      id: 3,
      name: "Instagram",
      href: "www.instagram.com",
      logo: images.facultyLogo1,
    },
    {
      id: 4,
      name: "Google",
      href: "www.google.com",
      logo: images.facultyLogo1,
    },
  ];

  const informationLinks = [
    { id: 1, name: "About us", href: "/about" },
    { id: 2, name: "Terms & Conditions", href: "/termsandconditions" },
  ];

  const courseFilters = [
    {
      id: 1,
      title: "Affiliation",
      content: [
        "Tribhuvan University",
        "Kathmandu University",
        "Pokhara University",
        "Purbanchal University",
        "Mid-Western University",
        "Far-Western University",
        "Harvard University",
      ],
    },
    {
      id: 2,
      title: "Degree",
      content: ["Bachelors", "Masters", "+2", "Diploma", "Doctorate", "CA"],
    },
    {
      id: 3,
      title: "Field of study",
      content: [
        "Management, Accounting, Administration & Business Studies",
        "Humanities, Languages, Religious Studies and Library Science",
        "Science General (Plus 2/A Level/Intermediate Level)",
        "Engineering, Architecture and Transportation Studies",
      ],
    },
  ];

  const navMenu = Math.min(menuItems.length, 5);
  const dropDownMenu = Math.max(menuItems.length - navMenu, 0);
  const [isDropDown, setIsDropDown] = useState(false);

  const handleDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  return (
    <AllContext.Provider
      value={{
        Navbar: {
          images,
          handleNavbarClick,
          menuItems,
          navMenu,
          isDropDown,
          dropDownMenu,
          handleDropDown,
          featuredItems,
        },
        Home: {
          featuredItems,
          studyFieldItems,
          advertisements,
          collegeDatas,
        },
        Courses: {
          images,
          courseFilters,
        },
        Footer: {
          socialLinks,
          informationLinks,
        },
      }}
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/school" element={<School />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
      <Footer />
    </AllContext.Provider>
  );
}

export default App;
