import { useSelector } from "react-redux";

export default function B1() {
  const sateUser: any = useSelector((state: any) => {
    return state.reducerUser;
  });
  console.log(sateUser);

  return (
    <div>
      B1
      <h1>Thông tin cá nhân</h1>
      <p>ID: {sateUser.id}</p>
      <p>User Name: {sateUser.userName}</p>
      <p>Gender: {sateUser.gender}</p>
      <p>Date of Birth: {sateUser.dateBirth}</p>
      <p>Address: {sateUser.address}</p>
    </div>
  );
}