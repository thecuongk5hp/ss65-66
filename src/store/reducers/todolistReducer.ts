// khởi tạo state
import { job } from '../../interface';

const initialJob: job[] = [
    {
        id: 1,
        name: "học redux",
        status: false,
    },
    {
        id: 2,
        name: "code redux",
        status: false,
    },
    {
        id: 3,
        name: "thực hành redux",
        status: false,
    },
];

// khởi tạo hàm reducer
const jobReducer=(state=initialJob,action:any)=>{
    switch (action.type) {
        case "ADD":
            // thêm vào
            return [...state];
        case "DELETE":
            // xóa
            return [...state];
        case "UPDATE":
            // cập nhật
            return [...state];
    
        default:
            return state;
    }
}
export default jobReducer;