import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import style from "./StarRating.module.css";

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    // console.log("Clicked star index:", index);
    setRating(index);
  };
  const handleMouseMove = (index) => {
    setHover(index);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };

  return (
    <div className={style.starrating}>
      {[...Array(noOfStars)].map(
        (_, index) => (
          (index += 1),
          (
            <FaStar
              key={index}
              className={
                index <= (hover || rating) ? style.active : style.inactive
              }
              onClick={() => handleClick(index)}
              onMouseMove={() => handleMouseMove(index)}
              onMouseLeave={handleMouseLeave}
              size={40}
            />
          )
        )
      )}
    </div>
  );
};

export default StarRating;
