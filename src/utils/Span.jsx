import PropTypes from "prop-types";

const Span = ({ onClick, children, customClassName }) => {
  return (
    <span
      role="button"
      className={`text-[#022D2F] font-sans text-base not-italic font-bold ${customClassName}`}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

Span.propTypes = {
  onClick: PropTypes.any,
  children: PropTypes.node.isRequired,
  customClassName: PropTypes.any,
};

export default Span;
