import React from "react";

const InputTag = ({ info, onChange }) => {
  return (
    <p>
      <label>{info.text}</label>
      {info.tag === "input" && (
        <input type={info.type} name={info.name} onChange={onChange} />
      )}
      {info.tag === "textarea" && (
        <textarea rows="5" name={info.name} onChange={onChange} />
      )}
    </p>
  );
};

export default InputTag;
