import Container from "../components/Container";
import CoursesFilter from "../components/CoursesFilter";
import CoursesHeroSection from "../components/CoursesHeroSection";
import CoursesResults from "../components/CoursesResults";

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
