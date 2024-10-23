import { useState } from "react";

const ClickEx = () => {
  const [num, setNum] = useState(0);

  const onPlus = () => {
    setNum(num + 1);
  };

  const onMinus = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  return (
    <div>
      <h3>클릭할 때 숫자증가</h3>
      <p>{num}</p>
      <button onClick={onPlus}>+</button>
      <button onClick={onMinus}>-</button>
    </div>
  );
};

export default ClickEx;
