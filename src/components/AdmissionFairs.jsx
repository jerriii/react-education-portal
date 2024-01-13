import { useContext, useState } from "react";
import { AllContext } from "../App";
import Span from "../utils/Span";
import useDynamicDisplay from "../CustomHooks/useDynamicDisplay";
const AdmissionFairs = () => {
  const { Home } = useContext(AllContext);
  const [viewMore, setViewMore] = useState(false);
  const advertisements = Home.advertisements;
  const collegeDatas = Home.collegeDatas;
  let total_colleges_shown = collegeDatas.length;
  const [items_to_show] = useDynamicDisplay({
    desktopsm: 9,
    desktopmd: 9,
    other: 9,
  });
  const handleViewMore = () => {
    setViewMore(!viewMore);
  };

  return (
    <div className="flex flex-col xl:flex-row my-4 gap-2">
      <div className="advertisement hidden xl:flex flex-col gap-2 overflow-y-auto">
        {advertisements.map((item, index) => (
          <div
            key={index}
            className={`advertisement-box border-2 w-full py-14 px-20 bg-[lightgray]
          text-center`}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="admission-fair w-full flex flex-col gap-2">
        <h1 className="mx-auto font-semibold text-xl">Admission Fair</h1>
        {/* <div className="admission-cards flex flex-row flex-wrap gap-4 justify-center"> */}
        <div className="admission-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {collegeDatas.map((data, index) =>
            viewMore ? (
              <div key={data.id} className="rounded-md border shadow-lg w-auto">
                <img src={data.images} alt={data.name} className="w-full" />
                <div className="px-4">
                  <h1>{data.name}</h1>
                  <p className="border-b">{data.address}</p>
                  <p className="border-b">View all courses and fees</p>
                  <p>Brochure</p>
                </div>
              </div>
            ) : (
              index < items_to_show && (
                <div
                  key={data.id}
                  className="rounded-md border shadow-lg w-auto"
                >
                  <img src={data.images} alt={data.name} className="w-full" />
                  <div className="px-4">
                    <h1>{data.name}</h1>
                    <p className="border-b">{data.address}</p>
                    <p className="border-b">
                      View all courses and fees <span></span>
                    </p>
                    <p>Brochure</p>
                  </div>
                </div>
              )
            )
          )}
        </div>
        {!viewMore ? (
          total_colleges_shown > items_to_show && (
            <Span customClassName={"ml-auto"} onClick={handleViewMore}>
              View all &gt;&gt;
            </Span>
          )
        ) : (
          <Span customClassName={"ml-auto"} onClick={handleViewMore}>
            Hide all &lt;&lt;
          </Span>
        )}
      </div>
    </div>
  );
};

export default AdmissionFairs;
