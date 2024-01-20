import { useState } from "react";
import Button from "../utils/Button";

const Comments = () => {
  const limit = 500;

  const [totalCharacter, setTotalCharacter] = useState(0);

  function handleLetterCount(event) {
    setTotalCharacter(event.target.value.length);
  }

  return (
    <div className="flex flex-col p-7 bg-white">
      <h1 className="py-6 text-2xl font-semibold border-b border-custom-border-color">
        Comments
      </h1>
      <textarea
        name="comments"
        id="comments"
        rows={5}
        className="w-full border p-8 placeholder:font-semibold mt-3 resize-none"
        maxLength={limit}
        placeholder="Write your comment here...."
        onChange={(e) => handleLetterCount(e)}
      />
      <p className="pt-8 pb-4 ml-auto">
        Character: {totalCharacter}/{limit}
      </p>
      <Button
        customClass={"px-8 py-4 !w-fit ml-auto !rounded-custom-radius-20px"}
      >
        Add Comment
      </Button>
    </div>
  );
};

export default Comments;
