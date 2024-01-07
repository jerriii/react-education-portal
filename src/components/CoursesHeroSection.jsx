import { useContext } from "react";
import { AllContext } from "../App";

const CoursesHeroSection = () => {
  const { Courses } = useContext(AllContext);
  const images = Courses.images;
  return (
    <section className="hero flex flex-col lg:flex-row justify-between items-center p-20">
      <div className="hero-content flex flex-col gap-5 text-center lg:text-start">
        <h1 className="text-5xl font-bold break-words">
          Need help finding the right courses?
        </h1>
        <p className="text-2xl font-normal">We&apos;ve got you covered!</p>
      </div>
      <div className="hero-image">
        <img src={images.herosectionimage} alt="image" />
      </div>
    </section>
  );
};

export default CoursesHeroSection;
