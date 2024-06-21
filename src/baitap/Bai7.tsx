import { useDispatch, useSelector } from "react-redux";

export default function B7() {
  const sateTheme = useSelector((state: any) => {
    return state.reducerTheme;
  });
  const dispath = useDispatch();
  const handleChangeTheme = (e: any) => {
    dispath({
      type: "TOGGLETTHEME",
      payload: e.target.value,
    });
  };
  return (
    <>
      B7
      {sateTheme ? (
        <div
          style={{ width: "50%", height: "200px", backgroundColor: "black" }}
        >
          <input type="checkbox" onChange={handleChangeTheme} />
          <p style={{ color: "white" }}>Tối</p>
        </div>
      ) : (
        <div
          style={{ width: "50%", height: "200px", backgroundColor: "white" }}
        >
          <input type="checkbox" onChange={handleChangeTheme} />
          <p style={{ color: "black" }}>Sáng</p>
        </div>
      )}
    </>
  );
}