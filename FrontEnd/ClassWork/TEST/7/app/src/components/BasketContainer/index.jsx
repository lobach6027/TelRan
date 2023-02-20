import React from "react";
import BasketCalculation from "../BasketCalculation";
import BasketItem from "../BasketItem";

export default function BasketContainer({
  basket,
  increment,
  decrement,
  clearBasket,
  deleteBasketItem,
}) {
  return (
    <div>
      {basket.map((item) => (
        <BasketItem
          key={item.id}
          {...item}
          increment={increment}
          decrement={decrement}
          deleteBasketItem={deleteBasketItem}
        />
      ))}
      <div>
        <BasketCalculation basket={basket} clearBasket={clearBasket} />
      </div>
    </div>
  );
}
