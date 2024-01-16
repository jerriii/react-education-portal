import { Link } from "react-router-dom";
import { AllContext } from "../App";
import AdvertisementSection from "../components/AdvertisementSection";
import Container from "../components/Container";
import { useContext, useState } from "react";
import CourseInquiryDescription from "../components/CourseInquiryDescription";
import InquiryForm from "../utils/InquiryForm";
import AdvertisementBanner from "../components/AdvertisementBanner";

const CourseInquiry = () => {
  const { CourseInquiry } = useContext(AllContext);
  const { advertisements } = CourseInquiry;
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
  const [childData, setChildData] = useState();

  function handleData(data) {
    setChildData(data);
  }

  return (
    <Container customClassName={"flex flex-col bg-[#D9D9D9] gap-5 py-5"}>
      <AdvertisementSection data={advertisementContent} />
      <section className="bg-white px-8 rounded-lg">
        <CourseInquiryDescription />
        <section role="form">
          <h1 className="text-[#007E46] text-center text-2xl font-semibold border-b border-[#847E84] py-2">
            College-Course Inquiry Form
          </h1>
          <InquiryForm
            customFormClass={"p-4 lg:px-32"}
            sendChildData={handleData}
          />
          {childData && (
            <p>
              firstName:{childData.firstName}, lastName:{childData.lastName},
              email:
              {childData.email}, country: {childData.country}, phone:{" "}
              {childData.phone}, academy:{childData.academy} , interestedCourse:{" "}
              {childData.interestedCourse}, query: {childData.query},
            </p>
          )}
        </section>
      </section>

      <AdvertisementBanner />
    </Container>
  );
};

export default CourseInquiry;
