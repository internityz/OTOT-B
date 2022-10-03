import React from "react";
import Weather from "./Weather";

export default function PsiList(props) {
  const { weatherList, getWeather } = props;

  return (
    <div>
      <div className="list">
        <h2> location psi list (2 hours)</h2>
        {weatherList.map((information) => (
          <div className="row">
            <Weather key={information.area} information={information} />
          </div>
        ))}
      </div>
      <button onClick={getWeather}> Get weather</button>
    </div>
  );
}
