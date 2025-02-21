import React from "react";
import { Star } from "./Star";

export function StarRating({ rating, setRating }) {
  // const [rating, setRating] = React.useState(0);
  const [tempRating, setTempRating] = React.useState(rating);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        {Array.from({ length: 10 }, (_, ind) => (
          <Star
            key={ind}
            fill={ind < tempRating || ind < rating ? "gold" : "transparent"}
            ind={ind}
            onHover={setTempRating}
            onMark={setRating}
          />
        ))}
      </div>
      <span
        style={{
          verticalAlign: "5px",
          color: "white",
        }}
      >
        {rating < tempRating ? tempRating : rating}/10
      </span>
    </div>
  );
}
