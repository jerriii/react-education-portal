import { useContext, useEffect, useState } from "react";
import AdvertisementSection from "../components/AdvertisementSection";
import { Link } from "react-router-dom";
import { AllContext } from "../App";
import CoursesDetailsMain from "../components/CoursesDetailsMain";
import Container from "../components/Container";
import TopColleges from "../components/TopColleges";

const CoursesDetails = () => {
  const [advertisement, setAdvertisement] = useState();
  const { Courses } = useContext(AllContext);
  const { advertisements } = Courses;

  useEffect(() => {
    const advertisementContent = advertisements.map((advertisement) => (
      <Link to={advertisement.href} key={advertisement.name}>
        <div
          className={`advertisement-box border-2 w-full py-12 bg-[lightgray] px-20
            text-center rounded-md`}
        >
          {advertisement.name}
        </div>
      </Link>
    ));

    setAdvertisement(advertisementContent);
  }, [advertisements]);

  return (
    <>
      <AdvertisementSection data={advertisement} />
      <Container customClassName={"bg-custom-grey py-5"}>
        <section className="flex flex-row gap-5">
          <CoursesDetailsMain />
          <TopColleges />
        </section>
      </Container>
    </>
  );
};

export default CoursesDetails;
