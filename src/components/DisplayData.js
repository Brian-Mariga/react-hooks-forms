import React from "react";

function DisplayData(props) {
  return (
    <>
      <h3>{props.firstName}</h3>
      <h3>{props.lastName}</h3>
    </>
  );
}

export default DisplayData;
