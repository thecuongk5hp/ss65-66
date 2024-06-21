import { useSelector } from "react-redux";

export default function B3() {
  const stateProducts: any = useSelector((state: any) => {
    return state.reducerProducts;
  });
  return (
    <>
      B3
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {stateProducts.map((product: any) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.product_name}</td>
                <td>{product.price} đ</td>
                <td>{product.quantity}</td>
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