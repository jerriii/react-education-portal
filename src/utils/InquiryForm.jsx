import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import PropTypes from "prop-types";

const InquiryForm = ({ customFormClass, sendChildData }) => {
  const [useForm, setUseForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    phone: "",
    academy: "",
    interestedCourse: "",
    query: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    sendChildData(useForm);
  }

  function handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setUseForm((prevData) => ({ ...prevData, [name]: value }));
  }

  return (
    <form
      method="post"
      className={`flex flex-col gap-3 ${
        customFormClass ? customFormClass : ""
      }`}
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="flex flex-row gap-4">
        <Input
          type="text"
          name="firstName"
          id="firstName"
          value={useForm.firstName}
          onChange={(e) => handleInputChange(e)}
        >
          First name *
        </Input>
        <Input
          type="text"
          name="lastName"
          id="lastName"
          value={useForm.lastName}
          onChange={(e) => handleInputChange(e)}
        >
          Last Name
        </Input>
      </div>
      <Input
        type="text"
        name="email"
        id="email"
        value={useForm.email}
        onChange={(e) => handleInputChange(e)}
      >
        Email Address *
      </Input>
      <div className="flex flex-row gap-4">
        <Input
          type="text"
          name="country"
          id="country"
          value={useForm.country}
          onChange={(e) => handleInputChange(e)}
        >
          Country *
        </Input>
        <Input
          type="tel"
          name="phone"
          id="phone"
          value={useForm.phone}
          onChange={(e) => handleInputChange(e)}
        >
          Phone number
        </Input>
      </div>
      <Input
        type="text"
        name="academy"
        id="academy"
        value={useForm.academy}
        onChange={(e) => handleInputChange(e)}
      >
        Academic background *
      </Input>
      <Input
        type="text"
        name="interestedCourse"
        id="interestedCourse"
        value={useForm.interestedCourse}
        onChange={(e) => handleInputChange(e)}
      >
        Interested course *
      </Input>
      <div className="flex flex-col">
        <label htmlFor="query" className="ml-3">
          Post your query
        </label>
        <textarea
          id="query"
          name="query"
          rows={5}
          value={useForm.query}
          onChange={(e) => handleInputChange(e)}
          className="p-4 bg-[#d9d9d9] rounded-lg"
        />
      </div>

      <Button type={"submit"} customClass={"w-fit !rounded-2xl"}>
        Submit
      </Button>
    </form>
  );
};

InquiryForm.propTypes = {
  customFormClass: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  sendChildData: PropTypes.func,
};

export default InquiryForm;
