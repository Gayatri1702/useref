import React, { useRef } from "react";
import "./Style.css"

function UseRefDemo() {
 
  const containerRef = useRef(null);


  const handleClick = () => {
    if (containerRef.current) {
      containerRef.current.innerHTML = "Content has been updated!";
      containerRef.current.style.border = "2px solid blue";
      containerRef.current.style.padding = "20px";
      containerRef.current.style.backgroundColor = "#e0f7fa";
    }
  };

  return (
    <div>
      {}
      <div
        ref={containerRef}
        style={{
          padding: "15px",
          border: "1px solid gray",
          marginBottom: "10px",
        }}
      >
        Click the button below to update this container.
      </div>
      {}
      <button onClick={handleClick}>Update Container</button>
    </div>
  );
}

export default UseRefDemo;


