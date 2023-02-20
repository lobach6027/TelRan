import React from "react";
import { useDispatch} from "react-redux";
import { sumAction } from "../../store/reducer/clickerReducer";

export default function AddForm() {
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    const { number } = e.target;
//dispatch({ type: INC, payload: + number.value })
dispatch(sumAction(number.value))
    number.value = "";
  };
  return (
    <form onSubmit={submit}>
      <input type="number" name="number" />
      <button>send +</button>
    </form>
  );
}
