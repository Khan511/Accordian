import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <article className="question">
      <div>
        <h4>{title} </h4>
        <button className="btn" onClick={() => setIsTrue(!isTrue)}>
          {isTrue ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
        {isTrue && <p>{info} </p>}
      </div>
    </article>
  );
};

export default Question;
