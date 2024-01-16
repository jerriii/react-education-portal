import CoursesResults from "../components/CoursesResults";
import CoursesFilter from "../components/CoursesFilter";
import Container from "../components/Container";
import Hero from "../utils/Hero";
import { AllContext } from "../App";
import { useContext } from "react";

const Courses = () => {
  const { Courses } = useContext(AllContext);
  const images = Courses.images;
  return (
    <>
      <Hero
        heading="Need help finding the right courses?"
        heroContent="We've got you covered!"
        heroImage={images.herosectionimage}
      />
      <Container
        customClassName={
          "bg-[#D9D9D9] flex flex-row lg:gap-6 py-5 justify-between"
        }
      >
        <CoursesFilter />
        <CoursesResults />
      </Container>
    </>
  );
};

export default Courses;
