import React from "react";

export default function Form({createProduct}) {
  const onSubmit = (e) => {
    e.preventDefault();
    const { title, price } = e.target;
    createProduct(title.value,+price.value)
    title.value = "";
    price.value = "";
  };

  return (
    <form onSubmit = {onSubmit}>
      <input type="text" placeholder="enter name" name="title" />
      <input type="number" placeholder="price" name="price" />
      <button>add</button>
    </form>
  );
}
