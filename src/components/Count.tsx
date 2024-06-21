import { useSelector,useDispatch } from 'react-redux'
export default function Count() {
    const countStae:any=useSelector(state=>{
        return state;
    })
    console.log(11111,countStae);
    
    const dispatch=useDispatch();
    // console.log(11111,countStae);
    const increase=()=>{
        dispatch(
            {
                type:"INCREASE"
            }
        )
    }

    const decrease=()=>{
        dispatch(
            {
                type:"DECREASE"
            }
        )
    }
    
  return (
    <div>Count
        <p>giá trị biến count : {countStae.countReducer} </p>
        <button onClick={increase}>tăng</button>
        <button onClick={decrease}>giảm</button>
    </div>
  )
}
