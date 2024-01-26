import PropTypes from "prop-types";
import Span from "../utils/Span";
import { useState } from "react";

const ReadMoreLessContent = ({ heading, content, wordLimit }) => {
  const [isOpen, setIsOpen] = useState(false);
  function handleViewMore() {
    setIsOpen(!isOpen);
  }
  return (
    <section className="flex flex-col sm:px-7.5 py-8 bg-transparent">
      <h1 className="text-2xl font-semibold pb-7.5 border-b border-custom-border-color">
        {heading}
      </h1>

      <p className="py-3 text-justify">
        {isOpen
          ? content
          : content.substring(0, wordLimit) +
            `${content.length > wordLimit ? "..." : ""}`}
      </p>

      {content.length > wordLimit && (
        <Span onClick={handleViewMore} customClassName={"ml-auto"}>
          {isOpen ? "Hide all <<" : "View all >>"}
        </Span>
      )}
    </section>
  );
};

ReadMoreLessContent.propTypes = {
  heading: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  wordLimit: PropTypes.number,
};

export default ReadMoreLessContent;
