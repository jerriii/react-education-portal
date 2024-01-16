import { useContext } from "react";
import Hero from "../utils/Hero";
import { AllContext } from "../App";
import Container from "../components/Container";

import CollegesFilter from "../components/CollegesFilter";
import CollegesResults from "../components/CollegesResults";

const Colleges = () => {
  const { Colleges } = useContext(AllContext);
  const { images } = Colleges;
  return (
    <>
      <Hero
        heading="Need help finding the right college?"
        heroContent="We've got you covered!"
        heroImage={images.herosectionimagecollege}
      />
      <Container
        customClassName={
          "bg-[#D9D9D9] flex flex-row lg:gap-6 py-5 justify-between"
        }
      >
        <CollegesFilter />
        <CollegesResults />
      </Container>
    </>
  );
};

export default Colleges;
