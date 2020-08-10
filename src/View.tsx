import React from "react";
import { atomFamily, useRecoilValue } from "recoil";

const textFamilyState = atomFamily({
  key: "counterStateFamily",
  default: [3, 2, 1],
});
const View = () => {
  const value = useRecoilValue(textFamilyState("counterState"));
  
  return <div>{...value}</div>;
};

export default View;
