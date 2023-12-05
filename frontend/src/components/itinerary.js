import React, { useEffect, useState } from "react";
import airplane from "../../src/flight-loader.svg";

export default function Itinerary() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://api.sampleapis.com/coffee/hot")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          console.log(data);
          setData(data);
          setIsLoading(false);
        }, 10000);
      });
  }, []);

  return (
    <div>
      {isLoading ? <img src={airplane} /> : null}
      {data.map((x) => {
        return x.title;
      })}
    </div>
  );
}
