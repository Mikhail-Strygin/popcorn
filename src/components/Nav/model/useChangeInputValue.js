import { useState } from "react";
export function useChangeInputValue(onSearch) {
  const [value, setValue] = useState("");

  function changeHandler(e) {
    setValue(e.target.value);
    // console.log("state^ ", value);

    onSearch(e.target.value);
    // console.log("e.target ", e.target.value);
  }
  return { value, changeHandler };
}
