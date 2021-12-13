import React from "react";

const Input = (props) => {
  return (
    <div className="input_container">
      <input
        type="text"
        name="searchInput"
        onChange={props.onChange}
        placeholder=""
      />
    </div>
  );
};

export default Input;
