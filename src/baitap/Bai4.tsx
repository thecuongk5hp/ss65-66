import { useDispatch, useSelector } from "react-redux";

export default function B4() {
  const stateCount: any = useSelector((state: any) => {
    return state.reducerCount;
  });

  const dispath = useDispatch();
  const increase = () => {
    dispath({
      type: "INCREASE",
    });
  };
  const decrease = () => {
    dispath({
      type: "DECREASE",
    });
  };
  return (
    <div>
      B4
      <p>giá trị count: {stateCount}</p>
      <button onClick={increase}>Tăng</button>
      <button onClick={decrease}>Giảm</button>
    </div>
  );
}