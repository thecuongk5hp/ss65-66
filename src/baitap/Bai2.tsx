import { useSelector } from "react-redux";

export default function B2() {
  const sateUsers: any = useSelector((state: any) => {
    return state.reducerUsers;
  });
  return (
    <>
      B2
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {sateUsers.map((user: any) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.fullName}</td>
                <td>{user.gender}</td>
                <td>{user.dateBirth}</td>
                <td>{user.address}</td>
                <td>
                  <button>Sửa</button>
                  <button>Xóa</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
