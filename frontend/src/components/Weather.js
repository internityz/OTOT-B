import React from "react";

export default function Weather(props) {
  const { information } = props;
  return (
    <div>
      <h3>
        {information.area} {information.forecast}
      </h3>
    </div>
  );
}
