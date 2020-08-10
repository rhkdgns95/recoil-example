import React from "react";
import { useRecoilState } from "recoil";
import { textState } from "./Counter";
import { Link } from "react-router-dom";
import View from "./View";

const About = () => {
  const [value, setValue] = useRecoilState(textState);
  return (
    <div>
      <button>
        <Link to="/">Go About</Link>
      </button>
      <h1>About</h1>
      <button onClick={() => setValue(value + 2)}>
        Recoil Number - {value}
      </button>
      <h1>Recoil Family View</h1>
      <View />
    </div>
  );
};

export default About;
