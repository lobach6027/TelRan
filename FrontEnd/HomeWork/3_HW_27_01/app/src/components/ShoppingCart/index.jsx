import React from "react";

export default function ShoppingCart({ id, title, model, price }) {
  return (
    <div>
      <p>{id},{title},{model}{price}</p>
    </div>
  );
}
