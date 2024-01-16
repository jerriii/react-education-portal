import PropTypes from "prop-types";

const Hero = ({ heroImage, heading, heroContent }) => {
  return (
    <section className="hero flex flex-col lg:flex-row justify-between items-center p-20">
      <div className="hero-content flex flex-col gap-5 text-center lg:text-start">
        <h1 className="text-5xl font-bold break-words">{heading}</h1>
        <p className="text-2xl font-normal">{heroContent}</p>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="image" />
      </div>
    </section>
  );
};

Hero.propTypes = {
  heroImage: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  heading: PropTypes.string.isRequired,
  heroContent: PropTypes.string.isRequired,
};

export default Hero;
