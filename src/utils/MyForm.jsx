import { useForm } from "react-hook-form";

const MyForm = () => {
  const alluseforms = useForm();
  console.log(alluseforms);
  return (
    <form method="post" className="flex flex-col">
      <div className="name">
        <div>
          <label htmlFor="label">First Name</label>
          <input
            type="text"
            name="first_name"
            id="text"
            className="border"
            // {...register("first_name", { required: true, maxLength: 100 })}
          />
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
