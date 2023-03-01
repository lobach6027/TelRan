import React from "react";
import { useDispatch } from "react-redux";
import { addProductAction } from "../../store/reducer/clickerDeducer";

export default function AddForm() {
  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();
    const { title, price, discount } = e.target;
    dispatch(addProductAction(title.value,price.value,discount.value)
    );
    console.log(title.value, price.value, discount.value);

    title.value = "";
    price.value = "";
    discount.value = "";
  };
  return (
    <form onSubmit={submit}>
      <input type="text" name="title" placeholder=" enter title" />
      <input type="number" name="price" placeholder="enter price" />
      <input type="number" name="discount" placeholder="enter discount" />
      <button>add product</button>
    </form>
  );
}
