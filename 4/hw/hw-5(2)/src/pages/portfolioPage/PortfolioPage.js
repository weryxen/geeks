import React, { useState } from "react";

function PortfolioPage() {
  const [show, setState] = useState([]);
  const obj = ["Work1", "Work2"];

  const btn = () => {
    setState(!show);
  };
  return (
    <>
      <p>{show ? obj : ""}</p>
      <button onClick={btn}>get </button>
    </>
  );
}

export default PortfolioPage;
