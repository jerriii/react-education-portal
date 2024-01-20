import { useContext } from "react";
import Button from "../utils/Button";
import { AllContext } from "../App";
import data from "../components/DummyData.json";
import useDynamicDisplay from "../CustomHooks/useDynamicDisplay";

const CollegeDetailsHero = () => {
  const { Colleges } = useContext(AllContext);
  const [totalContentShown] = useDynamicDisplay({
    mobile: 1,
    tablet: 3,
    desktopsm: 3,
    desktopmd: 4,
    other: 5,
  });
  const college_logo = data.collegeDatas
    .filter((data) => data.id === 1)
    .map((data) => {
      return data.college_logo;
    });

  const college_courses = data.collegeDatas
    .filter((college) => college.id === 1)
    .flatMap((data) => {
      return data.courses;
    });

  const { images, handleItemClick } = Colleges;
  return (
    <>
      <header
        className="bg-center bg-no-repeat flex bg-cover"
        style={{ backgroundImage: `url(${images.heroImage})` }}
      >
        <section className="hidden lg:flex flex-row mt-20 justify-between w-full items-end">
          <div className="flex flex-row py-12 px-20 bg-[#D9D9D9C2] items-center rounded-r-full backdrop-blur-sm gap-16">
            <img
              src={college_logo}
              alt="college logo"
              className="w-24 h-24 bg-white"
            />
            <article>
              <h1 className="text-4xl font-semibold">
                Kathmandu University <br />
                School of Education (KUSoEd)
              </h1>
              <p>Location, location, location</p>
            </article>
          </div>
          <Button
            type={"button"}
            customClass={"hidden lg:block mr-20 mb-7 rounded-[20px]"}
            onSubmit={() => handleItemClick("course-inquiry")}
          >
            Ask a Question
          </Button>
        </section>
        <section className="flex flex-col lg:hidden w-full items-center bg-[#D9D9D9C2] backdrop-blur-sm">
          <div className="flex flex-col md:flex-row py-12 px-2 sm:px-20 items-center justify-center w-full gap-8 md:gap-16">
            <img
              src={college_logo}
              alt="college logo"
              className="w-24 h-24 bg-white"
            />
            <article className="md:text-start text-center">
              <h1 className="text-4xl font-semibold">
                Kathmandu University <br />
                School of Education (KUSoEd)
              </h1>
              <p>Location, location, location</p>
            </article>
          </div>
          <Button
            type={"button"}
            customClass={"block lg:hidden rounded-[20px] w-fit mb-12"}
            onSubmit={() => handleItemClick("course-inquiry")}
          >
            Ask a Question
          </Button>
        </section>
      </header>
      <section className="flex flex-col lg:flex-row lg:gap-0 gap-10 px-2 sm:px-20 py-10 lg:py-0 justify-between items-center">
        <h1 className="text-4xl font-bold text-[#007E46]">
          Education <br /> Programs
        </h1>
        <div className="grid md:grid-cols-3 xl:grid-cols-4 list-none lg:py-20 gap-16">
          {college_courses.slice(0, totalContentShown).map((filter, index) => (
            <div key={index} className="flex flex-row items-center">
              <img src={images.book} alt="book" />
              <li className="font-semibold">{filter}</li>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CollegeDetailsHero;
