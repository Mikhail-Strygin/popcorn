import React, { useState } from "react";

export function Search({ onSearch }) {
  const [value, setValue] = useState("");

  function changeHandler(e) {
    setValue(e.target.value);
    // console.log("state^ ", value);

    onSearch(e.target.value);
    // console.log("e.target ", e.target.value);
  }

  return (
    <input
      onChange={changeHandler}
      value={value}
      className="search"
      type="text"
      placeholder="Search movies..."
    />
  );
}
