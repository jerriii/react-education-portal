import { useContext } from "react";
import { AllContext } from "../App";
import { Fragment } from "react";

const CoursesFilter = () => {
  const { Courses } = useContext(AllContext);
  const courseFilters = Courses.courseFilters;
  return (
    <section className="flex flex-col bg-white p-5 rounded-lg gap-5">
      <h1 className="text-center text-3xl font-semibold">
        Search Course&apos;s
      </h1>
      <section className="grid grid-flow-row grid-cols-1">
        {courseFilters.map((filter) => (
          <Fragment key={filter.id}>
            <h1 className="font-normal text-2xl">{filter.title}</h1>
            <div
              className="flex flex-col w-60 h-56 overflow-auto custom-scrollbar"
              key={filter.id}
            >
              {filter.content.map((content, index) => (
                <label htmlFor={content} key={index}>
                  <input type="checkbox" name={content} id={content} />{" "}
                  {content}
                </label>
              ))}
            </div>
          </Fragment>
        ))}
      </section>
    </section>
  );
};

export default CoursesFilter;
