import { useContext } from "react";
import { AllContext } from "../App";

const CoursesResults = () => {
  const { Courses } = useContext(AllContext);
  const images = Courses.images;

  return (
    <section className="flex flex-col bg-white px-5">
      <section className="flex flex-col ">
        <h1 className="text-2xl font-semibold py-3 border-b">
          Search Results:
        </h1>
        <div className="grid grid-flow-col grid-col-2 gap-4">
          <div className="w-56 h-auto bg-white flex flex-col items-center text-center">
            <div className="w-28 h-28 absolute bg-white p-4 rounded-full flex items-center shadow-lg">
              <img
                src={images.tribhuvanuniversitylogo}
                alt="imglogo"
                className="w-24 h-24"
              />
            </div>
            <div className="bg-[#D9D9D9] px-4 pb-4 pt-10 rounded-lg mt-20">
              <h1>Science and Information Technology</h1>
              <p>Affiliation: Tribhuwan University</p>
              <p>Duration: 48 months</p>
            </div>
          </div>
          <div className="w-56 h-auto bg-white flex flex-col items-center text-center">
            <div className="w-28 h-28 absolute bg-white p-4 rounded-full flex items-center shadow-lg">
              <img
                src={images.tribhuvanuniversitylogo}
                alt="imglogo"
                className="w-24 h-24"
              />
            </div>
            <div className="bg-[#D9D9D9] px-4 pb-4 pt-10 rounded-lg mt-20">
              <h1>Science and Information Technology</h1>
              <p>Affiliation: Tribhuwan University</p>
              <p>Duration: 48 months</p>
            </div>
          </div>
        </div>
      </section>
      <section>college inquiry form</section>
    </section>
  );
};

export default CoursesResults;
