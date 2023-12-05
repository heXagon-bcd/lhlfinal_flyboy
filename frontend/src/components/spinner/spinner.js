import React, { useState, useEffect } from "react";
import airplaneLoader from "../../flight-loader.svg";

export const Spinner = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      {isLoading ? <img src={airplaneLoader} alt="Loading" /> : null}
      <h1>Hello</h1>
    </div>
  );
};
