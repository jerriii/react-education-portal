import PropTypes from "prop-types";

const AboutCoursesData = ({ title, content }) => {
  return (
    <div className="grid grid-cols-3 gap-2 ">
      <h1 className="flex justify-center items-center border text-custom-purple-color-bold font-semibold p-1 sm:py-3 sm:px-custom-10px bg-[#EDEDED]">
        {title}:
      </h1>{" "}
      <p className="flex items-center col-span-2 border border-custom-purple-border-color text-custom-text-purple-color py-3 px-2 bg-[#F7F7F7]">
        {content}
      </p>
    </div>
  );
};

AboutCoursesData.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default AboutCoursesData;
