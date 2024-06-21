
import Count from './components/Count'
import Job from './components/Job'
import Bai1 from './baitap/Bai1'
import Bai2 from './baitap/Bai2'
import Bai3 from './baitap/Bai3'
import Bai4 from './baitap/Bai4'
import Bai5 from './baitap/Bai5'
import Bai6 from './baitap/Bai6'
import Bai7 from './baitap/Bai7'

export default function App() {

  return (
    <div>
      {
        /*
         Redux: là một thư viện giúp cho react có thể quản lý dữ liệu tập trung 
         giúp tạo 1 cái kho chưas dữ liệu tập trung
         các components muốn tương tác với dữ liệu thì tương tác trực tiếp
         không cần phải truyền dữ liệu các component.
         redux là 1 thư viện ,reactjs cũng là thư viện
         redux có thể kết hợp với nhiều thư viện khác ,có thể kết hợp với js thuần
         chứ không phải redux là của react sinh ra.

      1.cài đặt được kho chứa dữ liệu bằng redux
         - xem các bước cài đặt như thế nào?
         - nhớ thứ tự luồng chạy cuả nó
        B1: cài đặt 2 thư viện
          * react-redux
            npm i redux react-redux
            npm run dev
          * redux
          sau khi cài xong vào package.json xem có chưa
        B2: đi thiết lập store
        - bên trong store chứa nhiều reducer
        - reducer là gì?
          + reducer bản chất là những cái hàm, function thôi
          + nhiệm vụ của reducer là tính toán , xử lý trả về state mới.
        B3: đi thiết lập store
        + import createStore from "redux"
        + import reducer from "./reducer"
        + import { Provider } from "react-redux"
        + const store = createStore(reducer)
      2.tương tác dữ liệu với kho chứa đấy.

        1. lấy ra state dùng thì dùng useSelector
        2. bắn action, hành động khi dùng useDispatch
        */

        
      }
      <Count></Count>
      <Job></Job>
      <Bai1></Bai1>
      <Bai2></Bai2>
      <Bai3></Bai3>
      <Bai4></Bai4>
      <Bai5></Bai5>
      <Bai6></Bai6>
      <Bai7></Bai7>
    </div>
  )
}
