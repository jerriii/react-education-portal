import PropTypes from "prop-types";

const Input = ({
  type,
  name,
  id,
  value,
  children,
  customClass,
  onChange,
  inputProps,
}) => {
  return (
    <div className="flex flex-col flex-nowrap w-full">
      <label htmlFor={id} className="ml-3">
        {children}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className={`border p-4 bg-[#D9D9D9] rounded-lg ${
          customClass ? customClass : ""
        }`}
        {...inputProps}
      />
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  value: PropTypes.any,
  customClass: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func,
  children: PropTypes.node.isRequired,
  inputProps: PropTypes.object,
};

export default Input;
