import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AllContext } from "../App";
import Span from "./Span";
import useDynamicDisplay from "../CustomHooks/useDynamicDisplay";

const AdmissionsAndNotifications = () => {
  const { Home } = useContext(AllContext);
  const featuredItems = Home.featuredItems;
  const [viewMore, setViewMore] = useState(false);

  const [itemsToShow] = useDynamicDisplay(3, 3, 3, 5, 5);

  // const navigate = useNavigate();
  const handleViewMore = () => {
    setViewMore(!viewMore);
  };

  let totalFeaturedItems = featuredItems.length;

  return (
    <div className="admissions-and-notifications py-8 flex flex-col lg:flex-row flex-nowrap gap-2 max-h-full xl:justify-between">
      <div className="featured-admission flex flex-col w-full xl:w-fit 2xl:w-auto items-center gap-4 lg:gap-2 flex-wrap">
        <div className="flex flex-col lg:hidden justify-between w-full items-end">
          <div className="flex w-full flex-row justify-between">
            <p>Featured Admission</p>
          </div>
        </div>
        <p className="hidden lg:block mr-auto">Featured Admission</p>
        <main
          key={featuredItems.length}
          className="grid grid-cols-1 gap-2 sm:grid-cols-1 xl:grid-cols-2 w-full"
        >
          {featuredItems.map((items, index) =>
            viewMore ? (
              <Link to={items.href} key={index} state={items}>
                <div
                  className="featured-admission-card flex flex-row items-center break-words gap-x-4 xl:gap-x-2 border p-2 shadow-md rounded-lg"
                  key={index}
                >
                  <img src={items.image} alt={items.id} className="h-24" />
                  <div className="featured-admission-details">
                    <h1 className="font-bold text-xl">{items.name}</h1>
                    <p>{items.description}</p>
                  </div>
                </div>

                {/* <div onClick={()=> handleClick('./about', items)}>

              </div> */}
              </Link>
            ) : (
              index < itemsToShow && (
                <Link to={items.href} key={index}>
                  <div className="featured-admission-card flex flex-row items-center break-words gap-x-4 xl:gap-x-2 border p-2 shadow-md rounded-lg">
                    <img src={items.image} alt={items.id} className="h-24" />
                    <div className="featured-admission-details">
                      <h1 className="font-bold text-xl">{items.name}</h1>
                      <p>{items.description}</p>
                    </div>
                  </div>
                </Link>
              )
            )
          )}
        </main>

        {!viewMore ? (
          totalFeaturedItems > itemsToShow && (
            <Span onClick={handleViewMore} customClassName={"ml-auto"}>
              View all &gt;&gt;
            </Span>
          )
        ) : (
          <Span onClick={handleViewMore} customClassName={"ml-auto"}>
            Hide all &lt;&lt;
          </Span>
        )}
      </div>
      <div className="latest-notification max-h-auto overflow-x-auto hidden lg:block lg:w-fit">
        <p>Latest Notification</p>
        <div className="max-h-96 overflow-x-auto relative custom-scrollbar">
          {featuredItems.map((items, index) => (
            <div
              className="flex flex-row items-center gap-4 p-4 border border-solid bg-[#BDBEEB] my-2 rounded-md"
              key={index}
            >
              <img src={items.image} alt={index} className="h-12" />
              <h1 className="m-0 break-words w-96 font-semibold">
                Kathmandu University School of Education (KUSoEd)
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdmissionsAndNotifications;
