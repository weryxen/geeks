import React, { useState } from "react";

function ContactsPage() {
  const [inputValue, setInputValue] = useState("");
  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddClick = () => {
    console.log(`Input value: ${inputValue}`);
    setInputValue("");
  };

  const handleClearClick = () => {
    setInputValue("");
  };

  return (
    <>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddClick}>Add</button>
      <button onClick={handleClearClick}>Clear</button>
    </>
  );
}

export default ContactsPage;
