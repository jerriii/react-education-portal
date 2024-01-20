import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Banner = ({ to, src, alt, customClass = "" }) => {
  return (
    <Link to={to} key={alt}>
      <div
        className={`advertisement-banner hidden lg:flex flex-col items-end w-auto ${customClass}`}
      >
        <img src={src} alt={alt} className="w-full" />
      </div>
    </Link>
  );
};

Banner.propTypes = {
  to: PropTypes.any,
  keyIndex: PropTypes.any,
  src: PropTypes.any,
  alt: PropTypes.any,
  customClass: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default Banner;
