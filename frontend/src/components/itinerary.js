import React, { useEffect, useState } from "react";
import airplane from "../../src/flight-loader.svg";

export default function Itinerary() {
<<<<<<< HEAD
  return <h1>"hello"</h1>;
=======
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
>>>>>>> 07bd56543dc67646d58bf6781b5a407acbb1297d
}
