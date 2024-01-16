import { useForm } from "react-hook-form";

const MyForm = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();
  return (
    <form method="post" className="flex flex-col">
      <div className="name">
        <div>
          <label htmlFor="label">label</label>
          <input type="text" name="text" id="text" className="border" />
        </div>
        <div>
          <label htmlFor="label">label</label>
          <input type="text" name="text" id="text" className="border" />
        </div>
      </div>

      <div>
        <label htmlFor="label">label</label>
        <input type="text" name="text" id="text" />
      </div>

      <div>
        <div>
          <label htmlFor="label">label</label>
          <input type="text" name="text" id="text" className="border" />
        </div>
        <div>
          <label htmlFor="label">label</label>
          <input type="text" name="text" id="text" className="border" />
        </div>
      </div>

      <div>
        <label htmlFor="label">label</label>
        <input type="text" name="text" id="text" />
      </div>

      <div>
        <label htmlFor="label">label</label>
        <input type="text" name="text" id="text" />
      </div>

      <div>
        <label htmlFor="label">label</label>
        <input type="" name="text" id="text" />
      </div>
    </form>
  );
};

export default MyForm;
