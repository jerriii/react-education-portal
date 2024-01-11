import { useContext } from "react";
import { AllContext } from "../App";
import { capitalizeFirstLetter, handleFilter } from "../utils/Utils";

const CoursesFilter = () => {
  const { Courses } = useContext(AllContext);
  const { setAffiliationFilter, setDegreeFilter, setStudyFieldFilter } =
    Courses;

  return (
    <section className="hidden lg:flex flex-col bg-white p-5 rounded-lg gap-5 max-w-fit">
      <h1 className="text-center text-3xl font-semibold">
        Search Course&apos;s
      </h1>
      <section className="grid grid-flow-row grid-cols-1">
        <>
          <h1 className="font-normal text-2xl">Affiliation</h1>
          <div className="flex flex-col w-auto pr-2 h-56 overflow-auto custom-scrollbar">
            {Courses.affiliationData.map((data) => (
              <div className="flex flex-row gap-2" key={data}>
                <input
                  type="checkbox"
                  name={data}
                  value={data}
                  id={data}
                  onChange={(e) => handleFilter(e, setAffiliationFilter)}
                />{" "}
                <label htmlFor={data}>{capitalizeFirstLetter(data)}</label>
              </div>
            ))}
          </div>
          <h1 className="font-normal text-2xl">Degree</h1>
          <div className="flex flex-col w-auto pr-2 h-56 overflow-auto custom-scrollbar">
            {Courses.degreeData.map((data) => (
              <div className="flex flex-row gap-2" key={data}>
                <input
                  type="checkbox"
                  name={data}
                  value={data}
                  id={data}
                  onChange={(e) => handleFilter(e, setDegreeFilter)}
                />{" "}
                <label htmlFor={data}>{capitalizeFirstLetter(data)}</label>
              </div>
            ))}
          </div>
          <h1 className="font-normal text-2xl">Field of Study</h1>
          <div className="flex flex-col w-auto pr-2 h-56 overflow-auto custom-scrollbar">
            {Courses.studyFieldData?.map((data, index) => (
              <div className="flex flex-row gap-2" key={`${data} + ${index}`}>
                <input
                  type="checkbox"
                  name={data}
                  value={data}
                  id={data}
                  onChange={(e) => handleFilter(e, setStudyFieldFilter)}
                />{" "}
                <label htmlFor={data}>{capitalizeFirstLetter(data)}</label>
              </div>
            ))}
          </div>
        </>
      </section>
    </section>
  );
};

export default CoursesFilter;
