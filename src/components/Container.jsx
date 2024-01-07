import PropTypes from "prop-types";

const Container = ({ children, customClassName }) => {
  return (
    <main
      className={`container px-2 sm:px-20 text-[#0E0F3B] min-w-full ${customClassName}`}
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
