import Container from "./Container";
import CoursesFilter from "./CoursesFilter";
import CoursesHeroSection from "./CoursesHeroSection";
import CoursesResults from "./CoursesResults";

const Courses = () => {
  return (
    <>
      <CoursesHeroSection />
      <Container customClassName={"bg-[#D9D9D9] flex flex-row lg:gap-6 py-5"}>
        <CoursesFilter />
        <CoursesResults />
      </Container>
    </>
  );
};

export default Courses;
