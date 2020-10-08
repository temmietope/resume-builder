import React from "react";

const InputTag = ({ info }) => {
  // console.log(info)
  return (
    <p>
      <label>{info.text}</label>
      {info.tag === "input" && <input type={info.type} />}
      {info.tag === "textarea" && <textarea rows="5" />}
    </p>
  );
};

export default InputTag;
