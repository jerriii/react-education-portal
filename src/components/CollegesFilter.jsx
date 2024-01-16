import { useContext } from "react";
import { AllContext } from "../App";
import { capitalizeFirstLetter, handleFilter } from "../utils/Utils";
const CollegesFilter = () => {
  const { Colleges } = useContext(AllContext);
  const {
    setCollegeCoursesFilter,
    setCollegeAddressFilter,
    setCollegeAffiliatedFilter,
    collegeAddressData,
    collegeCoursesData,
    collegeAffiliationData,
    collegeDatas,
  } = Colleges;

  return (
    <main role="search" className="hidden lg:flex flex-col gap-5">
      <section className="flex flex-col bg-white p-5 rounded-lg gap-5 h-fit w-max">
        <h1 className=" text-3xl font-semibold">Search Course&apos;s</h1>
        <section className="grid grid-flow-row grid-cols-1">
          <>
            <h1 className="font-normal text-2xl">Affiliation</h1>
            <div className="flex flex-col w-auto pr-2 h-56 items-start overflow-auto custom-scrollbar">
              {collegeAffiliationData.map((data, i) => (
                <div
                  className="flex flex-row gap-2 hover:cursor-pointer"
                  key={`${data} + ${i}`}
                >
                  <input
                    type="checkbox"
                    name={data}
                    value={data}
                    id={`checkbox_${i}_${data}`}
                    onChange={(e) =>
                      handleFilter(e, setCollegeAffiliatedFilter)
                    }
                    className="hover:cursor-pointer"
                  />{" "}
                  <label
                    htmlFor={`checkbox_${i}_${data}`}
                    className="group hover:text-[#19A948] transition ease-linear duration-200 cursor-pointer"
                  >
                    {capitalizeFirstLetter(data)}
                  </label>
                </div>
              ))}
            </div>
            <h1 className="font-normal text-2xl">Address</h1>
            <div className="flex flex-col w-auto items-start pr-2 h-56 overflow-auto custom-scrollbar">
              {collegeAddressData.map((data, i) => (
                <div
                  className="flex flex-row gap-2 hover:cursor-pointer"
                  key={`${data} + ${i}`}
                >
                  <input
                    type="checkbox"
                    name={data}
                    value={data}
                    id={`checkbox_${i}_${data}`}
                    onChange={(e) => handleFilter(e, setCollegeAddressFilter)}
                  />{" "}
                  <label
                    htmlFor={`checkbox_${i}_${data}`}
                    className="group hover:text-[#19A948] transition ease-linear duration-200 cursor-pointer"
                  >
                    {capitalizeFirstLetter(data)}
                  </label>
                </div>
              ))}
            </div>
            <h1 className="font-normal text-2xl">Courses</h1>
            <div className="flex flex-col w-auto pr-2 h-56 items-start overflow-auto custom-scrollbar">
              {collegeCoursesData.map((data, i) => (
                <div
                  className="flex flex-row gap-2 hover:cursor-pointer"
                  key={`${data} + ${i}`}
                >
                  <input
                    type="checkbox"
                    name={data}
                    value={data}
                    id={`checkbox_${i}_${data}`}
                    onChange={(e) => handleFilter(e, setCollegeCoursesFilter)}
                  />{" "}
                  <label
                    htmlFor={`checkbox_${i}_${data}`}
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
        {collegeDatas.slice(0, 3).map((college, index) => (
          <div
            key={index}
            className="flex flex-row bg-white px-4 py-2 rounded-lg items-center gap-3 hover:cursor-pointer"
          >
            <img
              src={college.college_images}
              alt={index}
              className="w-20 h-20"
            />
            <article>
              <h1 className="font-semibold">{college.name}</h1>
              <p>{college.affiliation}</p>
            </article>
          </div>
        ))}
      </section>
    </main>
  );
};

export default CollegesFilter;
