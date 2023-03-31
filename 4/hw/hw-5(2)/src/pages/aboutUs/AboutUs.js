import React, {  useState } from "react";

const AboutUs = () => {
  const [state, setState] = useState(true);

  const btnClick = () => {
    setState(!state);
  };

  return (
    <div>
      <p>{state ? "тест" : ""}</p>
      <button onClick={btnClick}>click</button>
    </div>
  );
};

export default AboutUs;
