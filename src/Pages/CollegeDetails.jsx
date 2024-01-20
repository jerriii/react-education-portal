import CollegeDetailsHero from "../components/CollegeDetailsHero";
import CollegeDetailsMain from "../components/CollegeDetailsMain";
import Container from "../components/Container";
import TopColleges from "../components/TopColleges";
const CollegeDetails = () => {
  return (
    <>
      <CollegeDetailsHero />
      <Container customClassName={"bg-custom-grey p-7"}>
        <section className="flex flex-row gap-5">
          <CollegeDetailsMain />
          <TopColleges />
        </section>
      </Container>
    </>
  );
};
export default CollegeDetails;
