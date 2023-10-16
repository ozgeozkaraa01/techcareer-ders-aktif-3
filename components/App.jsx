import React, { useState } from "react";

const App = () => {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);
  const [inputWidth, setInputWidth] = useState();
  const [inputHeight, setInputHeight] = useState();

  const handleResize = () => {
    setWidth(inputWidth);
    setHeight(inputHeight);
  };

  return (
    <div>
      <div style={{ border: "3px solid #111827", width, height }}></div>
      <input
        type="number"
        value={inputWidth}
        onChange={(e) => setInputWidth(parseInt(e.target.value))}
      />
      <input
        type="number"
        value={inputHeight}
        onChange={(e) => setInputHeight(parseInt(e.target.value))}
      />
      <button onClick={handleResize}>Boyutu Değiştir</button>
    </div>
  );
};

export default App;
