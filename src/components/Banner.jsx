import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Banner = ({ to, src, alt }) => {
  return (
    <Link to={to} key={alt}>
      <div className="advertisement-banner hidden lg:flex flex-col items-end w-auto my-4">
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
};
export default Banner;
