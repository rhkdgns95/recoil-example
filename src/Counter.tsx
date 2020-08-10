import React from "react";
import { atom, useRecoilState } from "recoil";

export const textState = atom({
  key: "counterState",
  default: 3,
});

const Counter = () => {
  const [count, setCount] = useRecoilState(textState);
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
