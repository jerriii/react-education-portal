import PropTypes from "prop-types";

const Container = ({ children, customClassName }) => {
  return (
    <main
      className={`container px-2 sm:px-20 min-w-full ${
        customClassName ? customClassName : ""
      }`}
    >
      {children}
    </main>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  customClassName: PropTypes.any,
};

export default Container;
