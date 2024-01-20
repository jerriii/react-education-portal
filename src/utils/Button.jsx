import PropTypes from "prop-types";

const Button = ({ type, children, customClass, onSubmit }) => {
  return (
    <button
      type={type ? type : "button"}
      className={`rounded-custom-radius-20px bg-[#007E46] py-2 text-sm font-semibold text-white shadow-sm px-8 h-14 hover:bg-[#0E0F3B]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${customClass}`}
      onClick={onSubmit}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  customClass: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSubmit: PropTypes.func,
};

export default Button;
