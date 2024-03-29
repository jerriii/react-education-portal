import { useContext } from "react";
import { AllContext } from "../App";
import { capitalizeFirstLetter, handleFilter } from "../utils/Utils";
const CoursesFilter = () => {
  const { Courses } = useContext(AllContext);
  const {
    setAffiliationFilter,
    setDegreeFilter,
    setStudyFieldFilter,
    allCourses,
  } = Courses;

  return (
    <main role="search" className="hidden lg:flex flex-col gap-5">
      <section className="flex flex-col bg-white p-5 rounded-lg gap-5 h-fit w-max">
        <h1 className=" text-3xl font-semibold">Search Course&apos;s</h1>
        <section className="grid grid-flow-row grid-cols-1">
          <>
            <h1 className="font-normal text-2xl">Affiliation</h1>
            <div className="flex flex-col w-auto pr-2 h-56 overflow-auto custom-scrollbar">
              {Courses.affiliationData.map((data) => (
                <div
                  className="flex flex-row gap-2 hover:cursor-pointer"
                  key={data}
                >
                  <input
                    type="checkbox"
                    name={data}
                    value={data}
                    id={data}
                    onChange={(e) => handleFilter(e, setAffiliationFilter)}
                    className="hover:cursor-pointer"
                  />{" "}
                  <label
                    htmlFor={data}
                    className="group hover:text-[#19A948] transition ease-linear duration-200 cursor-pointer"
                  >
                    {capitalizeFirstLetter(data)}
                  </label>
                </div>
              ))}
            </div>
            <h1 className="font-normal text-2xl">Degree</h1>
            <div className="flex flex-col w-auto pr-2 h-56 overflow-auto custom-scrollbar">
              {Courses.degreeData.map((data) => (
                <div
                  className="flex flex-row gap-2 hover:cursor-pointer"
                  key={data}
                >
                  <input
                    type="checkbox"
                    name={data}
                    value={data}
                    id={data}
                    className="hover:cursor-pointer"
                    onChange={(e) => handleFilter(e, setDegreeFilter)}
                  />{" "}
                  <label
                    htmlFor={data}
                    className="group hover:text-[#19A948] transition ease-linear duration-200 cursor-pointer"
                  >
                    {capitalizeFirstLetter(data)}
                  </label>
                </div>
              ))}
            </div>
            <h1 className="font-normal text-2xl">Field of Study</h1>
            <div className="flex flex-col w-auto pr-2 h-56 overflow-auto custom-scrollbar">
              {Courses.studyFieldData?.map((data, index) => (
                <div
                  className="flex flex-row gap-2 hover:cursor-pointer"
                  key={`${data} + ${index}`}
                >
                  <input
                    type="checkbox"
                    name={data}
                    value={data}
                    id={data}
                    className="hover:cursor-pointer"
                    onChange={(e) => handleFilter(e, setStudyFieldFilter)}
                  />{" "}
                  <label
                    htmlFor={data}
                    className="group hover:text-[#19A948] transition ease-linear duration-200 cursor-pointer"
                  >
                    {capitalizeFirstLetter(data)}
                  </label>
                </div>
              ))}
            </div>
          </>
        </section>
      </section>
      <section role="feed" className="flex flex-col bg-transparent gap-4">
        <h1 className="text-center font-normal text-xl">
          Most searched course&apos;s
        </h1>
        {allCourses.slice(0, 3).map((course, index) => (
          <div
            key={index}
            className="flex flex-row bg-white px-4 py-2 rounded-lg items-center gap-3 hover:cursor-pointer"
          >
            <img src={course.logo} alt={index} className="w-20 h-20" />
            <article>
              <h1 className="font-semibold">{course.title}</h1>
              <p>{course.affiliation}</p>
            </article>
          </div>
        ))}
      </section>
    </main>
  );
};

export default CoursesFilter;
