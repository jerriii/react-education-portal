import AdvertisementSection from "../components/AdvertisementSection";
import AdmissionsAndNotifications from "../components/AdmissionsAndNotifications";
import AdvertisementBanner from "../components/AdvertisementBanner";
import StudyField from "../components/StudyField";
import CollegeSearchGuide from "../components/CollegeSearchGuide";
import AdmissionFairs from "../components/AdmissionFairs";
import Container from "../components/Container";

const Home = () => {
  return (
    <Container customClassName={"flex flex-col"}>
      <AdvertisementSection />
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
