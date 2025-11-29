import React from "react";

const Suggestion = ({ data, handleClick }) => {
  return (
    <ul>
      {data?.length ? (
        data.map((item, index) => (
          <li key={index} onClick={handleClick}>
            {item}
          </li>
        ))
      ) : (
        <li>No Suggestions Found</li>
      )}
    </ul>
  );
};

export default Suggestion;
