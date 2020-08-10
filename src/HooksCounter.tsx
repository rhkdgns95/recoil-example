import React, { useState } from "react";

const HooksCounter = () => {
  const [count, setCount] = useState<number>(3);
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default HooksCounter;
