import { useState } from "react";
import { Link } from "react-router-dom";
import Span from "../utils/Span";
import useDynamicDisplay from "../CustomHooks/useDynamicDisplay";
import data from "../components/DummyData.json";
import images from "../assets/img/index";
const AdmissionsAndNotifications = () => {
  const featuredItems = data.featuredItems;
  const [viewMore, setViewMore] = useState(false);

  const [itemsToShow] = useDynamicDisplay({
    tablet: 3,
    desktopsm: 3,
    desktopmd: 5,
    other: 5,
  });

  // const navigate = useNavigate();
  const handleViewMore = () => {
    setViewMore(!viewMore);
  };

  let totalFeaturedItems = featuredItems.length;

  return (
    <main className="admissions-and-notifications py-8 flex flex-col lg:flex-row flex-nowrap gap-2 max-h-full xl:justify-between">
      <section className="featured-admission flex flex-col w-full xl:w-fit 2xl:w-auto items-center gap-4 lg:gap-2 flex-wrap">
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
          {featuredItems
            .slice(0, viewMore ? featuredItems.length : itemsToShow)
            .map((items, index) => (
              <Link to={items.href} key={index} state={items}>
                <div
                  className="featured-admission-card flex flex-row items-center break-words gap-x-4 xl:gap-x-2 border p-2 shadow-md rounded-lg"
                  key={index}
                >
                  <img
                    src={images.admissionslogo}
                    alt={items.id}
                    className="h-24"
                  />
                  <div className="featured-admission-details">
                    <h1 className="font-bold text-xl">{items.name}</h1>
                    <p>{items.description}</p>
                  </div>
                </div>
              </Link>
            ))}
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
      </section>
      <section className="latest-notification max-h-auto overflow-x-auto hidden lg:block lg:w-fit ">
        <p>Latest Notification</p>
        <div className="max-h-96 overflow-x-auto relative custom-scrollbar">
          {featuredItems.map((items, index) => (
            <div
              className="flex flex-row items-center gap-4 p-4 border border-solid bg-[#BDBEEB] my-2 rounded-md"
              key={index}
            >
              <img src={images.admissionslogo} alt={index} className="h-12" />
              <h1 className="m-0 break-words w-96 font-semibold">
                {items.name}
              </h1>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AdmissionsAndNotifications;
