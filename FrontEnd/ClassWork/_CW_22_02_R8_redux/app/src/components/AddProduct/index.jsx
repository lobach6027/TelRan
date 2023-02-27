import React from "react";
import { useDispatch } from "react-redux";

export default function AddForm() {
  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();
    const { title, price, discount } = e.target;
    dispatch({
      type: "ADD",
      payload: {
        id: Date.now(),
        title: title.value,
        price: price.value,
        discount: discount.value,
      },
    });
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
