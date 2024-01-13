import PropTypes from "prop-types";

const Button = ({ children, customClass }) => {
  return (
    <button
      type="button"
      className={`rounded-md bg-[#007E46] py-2 text-sm font-semibold text-white shadow-sm px-8 h-14 hover:bg-[#0E0F3B]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${customClass}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  customClass: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Button;
