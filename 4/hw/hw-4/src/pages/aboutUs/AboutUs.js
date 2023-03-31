import React, { useState } from 'react';

function Layout() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <p onClick={toggleVisibility} style={{ cursor: 'pointer' }}>
        {isVisible ? 'This is the visible text.' : 'Click me to show the text.'}
      </p>
      <button onClick={toggleVisibility}>Click me to show/hide text</button>
    </div>
  );
}

export default Layout;