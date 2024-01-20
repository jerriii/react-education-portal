import AdvertisementSection from "../components/AdvertisementSection";
import AdmissionsAndNotifications from "../components/AdmissionsAndNotifications";
import AdvertisementBanner from "../components/AdvertisementBanner";
import StudyField from "../components/StudyField";
import CollegeSearchGuide from "../components/CollegeSearchGuide";
import AdmissionFairs from "../components/AdmissionFairs";
import Container from "../components/Container";
import { useContext, useEffect, useState } from "react";
import { AllContext } from "../App";
import { Link } from "react-router-dom";

const Home = () => {
  const { Home } = useContext(AllContext);
  const { advertisements } = Home;
  const [advertisement, setAdvertisement] = useState();

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

  // console.log(advertisement);
  return (
    <Container customClassName={"flex flex-col"}>
      <AdvertisementSection data={advertisement} />
      <AdmissionsAndNotifications />
      <AdvertisementBanner />
      <StudyField />
      <AdmissionFairs />
      <CollegeSearchGuide />
      <AdvertisementBanner />
    </Container>
  );
};

export default Home;
