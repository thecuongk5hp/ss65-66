import { useDispatch, useSelector } from "react-redux";

export default function B5() {
  const stateNumbers: number[] = useSelector((state: any) => {
    return state.reducerRandom;
  });

  const dispath = useDispatch();
  const handleRandom = () => {
    dispath({
      type: "RANDOM",
      payload: Math.floor(Math.random() * 100),
    });
  };
  return (
    <>
      B5
      <p>[{stateNumbers.join(", ")}]</p>
      <button onClick={handleRandom}>ấn thêm</button>
    </>
  );
}