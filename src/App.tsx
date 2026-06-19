import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./redux/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

const App = () => {
  const { count } = useAppSelector((state: RootState) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="flex gap-3">
      <button
        onClick={() => dispatch(increment())}
        className="bolder border-2 p-4 text-green-600"
      >
        Increment
      </button>
      <div>{count}</div>
      <button
        onClick={() => dispatch(decrement())}
        className="bolder border-2 p-4 text-red-600"
      >
        Decrement
      </button>
      <button
        className="bolder border-2 p-4 text-green-600"
        onClick={() => dispatch(incrementByAmount(5))}
      >
        incrementByAmount
      </button>
    </div>
  );
};

export default App;
