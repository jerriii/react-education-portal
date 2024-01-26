import { useContext, useState } from "react";
import AboutCoursesData from "./AboutCoursesData";
import Banner from "./Banner";
import { AllContext } from "../App";
import InquiryForm from "../utils/InquiryForm";
import Comments from "./Comments";
import data from "../components/DummyData.json";
import ReadMoreLessContent from "./ReadMoreLessContent";

const CoursesDetailsMain = () => {
  //useStates
  const [childData, setChildData] = useState();

  //destructured datas
  const { courseDetails } = data;
  const { Courses } = useContext(AllContext);
  const { images } = Courses;

  //Array datas
  const advertisement = [
    {
      name: "banner1",
      image: images.advertisementBanner2,
      href: "/banner2",
    },
  ];

  //functions
  function handleChildData(data) {
    setChildData(data);
  }

  return (
    <main className="bg-white flex flex-col p-5 rounded-custom-radius-28px sm:rounded-custom-radius-10px">
      <h1 className="font-bold text-center text-custom-42px">
        {courseDetails.title}
      </h1>
      <p className="text-[#262879] font-semibold text-2xl text-center">
        Affiliated to:{" "}
        <span className="text-[#0E0F3B]">{courseDetails.affiliation}</span>
      </p>
      <p className="text-2xl font-semibold p-6 border-b border-custom-border-color">
        About Course
      </p>
      <div className="flex flex-col gap-2 mt-custom-10px">
        <AboutCoursesData
          title={"Course Title"}
          content={courseDetails.title}
        />
        <AboutCoursesData
          title={"Category/ Level"}
          content={courseDetails.degree}
        />
        <AboutCoursesData
          title={"Course Duration (months)"}
          content={courseDetails.duration}
        />
        <AboutCoursesData
          title={"Cost Range"}
          content={courseDetails.cost_range}
        />
      </div>

      <ReadMoreLessContent
        heading={"Program Objective"}
        content={courseDetails.objective}
        wordLimit={200}
      />
      {advertisement.map((advertisement, index) => {
        return (
          <Banner
            to={advertisement.href}
            key={index}
            src={advertisement.image}
            alt={index}
          />
        );
      })}

      <ReadMoreLessContent
        heading={`${
          courseDetails.acronym ? `The ${courseDetails.acronym}` : "This"
        } programme specially attempt to`}
        content={courseDetails.speciality}
        wordLimit={200}
      />

      <h1 className="font-semibold text-2xl py-6 border-b border-custom-border-color">
        General Requirements
      </h1>
      <div className="px-5">
        <ol className="list-decimal text-justify py-4">
          {courseDetails.requirements.map((course, index) => (
            <li key={`requirements + ${index}`}>{course}</li>
          ))}
        </ol>
      </div>

      <section className="grid grid-cols-3 gap-custom-10px px-3 py-5 bg-white">
        {courseDetails.course_images.map((image, j) => (
          <img
            src={image}
            alt={`${image} + ${j}`}
            key={j}
            className="w-full h-full object-cover"
          />
        ))}
      </section>
      <ReadMoreLessContent
        heading={"Syllabus"}
        content={courseDetails.syllabus}
        wordLimit={200}
      />

      <ReadMoreLessContent
        heading={"Admission Information"}
        content={courseDetails.admission_info}
        wordLimit={200}
      />
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
            {childData.phone}, academy: {childData.academy} , interestedCourse:{" "}
            {childData.interestedCourse}, query: {childData.query},
          </p>
        )}
      </section>
      <Comments limit={500} />
    </main>
  );
};

export default CoursesDetailsMain;
