import React from "react";
import { selector, useRecoilValue } from "recoil";
import { textState } from "./Counter";

const filtered = selector({
  key: "filteredCounter",
  get: ({ get }) => {
    const num = get(textState);
    return {
      basic: num,
      double: num * 2, // 값의 두배.
      squared: num * num, // 값의 제곱.
    };
  },
  // Selector는 @computed와 비슷하지만, setter를 설정할 수 있음.
  // 즉, selector는 atom으로 부터 계산된 값을 얻을 수 있으며, 또한 복수의 atom에도 영향을 줄 수 있다.
  set: ({ set }) => {
    set(textState, 3);
  },
});
const CalculatedCounter = () => {
  const data = useRecoilValue(filtered);
  return (
    <div>
      2배
      <p>
        {data.basic} * 2: {data.double}
      </p>
      제곱셈
      <p>
        {data.basic} * {data.basic}: {data.squared}
      </p>
    </div>
  );
};

export default CalculatedCounter;
