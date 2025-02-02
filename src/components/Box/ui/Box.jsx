import React, { useState } from "react";

export function Box({ children }) {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <div className="box">
      <button
        onClick={() => setIsHidden((prevState) => !prevState)}
        className="btn-toggle"
      >
        {!isHidden ? "–" : "+"}
      </button>
      {!isHidden && children}
    </div>
  );
}
