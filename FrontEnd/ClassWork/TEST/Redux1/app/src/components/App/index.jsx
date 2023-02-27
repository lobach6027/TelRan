import { useDispatch, useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const inc = () => {
    dispatch({ type: "INCREMENT" });
  };
  const dec = () => {
    dispatch({ type: "DECREMENT" });
  };
  const submit = (e) => {
    e.preventDefault();
    const { number } = e.target;
    dispatch({ type: "INPUTVALUE", payload: +number.value });
    number.value = "";
  };

  const submitminus = (e) => {
    e.preventDefault();
    const { number } = e.target;
    dispatch({ type: "INPUTVALUEMINUS", payload: +number.value });
    number.value = "";
  };

  useSelector((state) => state);
  return (
    <div>
      <div>
        <p>{state}</p>
        <button onClick={dec}>-</button>
        <button onClick={inc}>+</button>
        <button onClick={() => dispatch({ type: "CLEAR" })}>clear</button>
      </div>
      <form onSubmit={submit}>
        <input type="number" name="number" />
        <button>plus value</button>
      </form>
      <form onSubmit={submitminus}>
        <input type="number" name="number" />
        <button>minus value</button>
      </form>
    </div>
  );
}

export default App;
