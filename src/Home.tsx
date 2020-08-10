import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import Counter, { textState } from "./Counter";
import HooksCounter from "./HooksCounter";
import CalculatedCounter from "./CalculatedCounter";

const Home = () => {
  const [useStateCount, setUseStateCount] = useState(3);
  const [recoilStateCount, setRecoilStateCount] = useRecoilState(textState);
  return (
    <div>
      <button>
        <Link to="/about">Go About</Link>
      </button>
      <h1>Counter</h1>
      <button onClick={() => setUseStateCount(useStateCount + 1)}>
        useState: {useStateCount}
      </button>
      <button onClick={() => setRecoilStateCount(recoilStateCount + 1)}>
        recoilState: {recoilStateCount}
      </button>
      <Counter />
      <HooksCounter />
      <CalculatedCounter />
    </div>
  );
};

export default Home;
