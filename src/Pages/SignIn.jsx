import { useState } from "react";
import Container from "../components/Container";
import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import Button from "../utils/Button";
import AdvertisementBanner from "../components/AdvertisementBanner";

const SignIn = () => {
  const [signinTab, setSigninTab] = useState(false);
  function handleTabSwitch() {
    setSigninTab(!signinTab);
  }
  return (
    <Container customClassName={"flex flex-col py-5 bg-custom-grey gap-5"}>
      <section className="hidden lg:flex flex-row w-full bg-white p-5 gap-5 relative rounded-custom-radius-10px">
        <div
          className={`flex flex-col rounded-custom-radius-10px w-full justify-center`}
        >
          <h1 className="text-[#007E46] text-center text-2xl font-semibold border-b border-[#847E84] py-2">
            Sign In
          </h1>
          <SignInForm customClass={"items-center w-full"} />
        </div>
        <div
          className={`flex flex-col absolute z-50 bg-custom-green-color w-1/2 h-full top-0
          left-0 right-0 justify-center items-center rounded-custom-radius-10px transition duration-500 ease-out ${
            signinTab ? "translate-x-full" : "translate-x-0"
          }`}
        >
          <article className="flex flex-col items-center break-words w-min text-center gap-5">
            <h1 className="text-4xl font-bold text-white">NepEduNavigator</h1>
            <p className="text-white">
              Enter your personal details and start your personal journey
            </p>
            <Button
              onSubmit={handleTabSwitch}
              customClass={
                "bg-white !text-custom-green-color w-fit my-7.5 !rounded-custom-radius-10px"
              }
            >
              {signinTab ? "Sign Up" : "Sign In"}
            </Button>
          </article>
        </div>
        <div className={`flex flex-col rounded-custom-radius-10px w-full`}>
          <h1 className="text-[#007E46] text-center text-2xl font-semibold border-b border-[#847E84] py-2">
            Sign Up
          </h1>
          <SignUpForm customClass={"items-center w-full"} />
        </div>
      </section>
      <AdvertisementBanner />
    </Container>
  );
};

export default SignIn;
