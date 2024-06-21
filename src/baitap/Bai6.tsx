import { useDispatch, useSelector } from "react-redux";

export default function B6() {
  const stateChangeState = useSelector((state: any) => {
    return state.reducerChangeState;
  });
  const dispath = useDispatch();
  const changeState = () => {
    dispath({
      type: "CHANGE",
    });
  };
  return (
    <div>
      B6
      <h1>{stateChangeState}</h1>
      <button onClick={changeState}>Thay đổi</button>
    </div>
  );
}