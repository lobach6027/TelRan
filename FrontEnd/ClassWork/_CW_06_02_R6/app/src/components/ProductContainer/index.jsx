import React from "react";
import { useEffect } from "react";
import Product from "../Product";
import { useState } from "react";
import s from "./style.module.css";
import BasketContainer from "../BasketContainer";
import Modal from "../Modal";

export default function ProductContainer() {
  const [products, setProducts] = useState(null);
  const [basket, setBasket] = useState(
    () => JSON.parse(localStorage.getItem("basket")) ?? []
  );
  const [modal, setModal] = useState(false);

  useEffect(
    () => localStorage.setItem("basket", JSON.stringify(basket)),
    [basket]
  );

  useEffect(() => {
    (async () => {
      const resp = await fetch("https://dummyjson.com/products");
      const data = await resp.json();
      const res = data.products.map(
        ({ id, title, price, description, images, stock }) => ({
          id,
          title,
          price,
          images,
          imageIndex: 0,
          description,
          stock,
        })
      );
      console.log(res);
      setProducts(res);
    })();
  }, []);

  const changeFoto = (searchId) => {
    products.find(({ id }) => id === searchId).imageIndex++;
    setProducts([...products]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  useEffect(() => {
    if (products === null) {
      return;
    }
    const products_ids = products.map(({ id }) => id);
    setBasket((pre) => pre.filter(({ id }) => products_ids.includes(id)));
  }, [products]);

  const addProduct = (productId) => {
    const productFromBasket = basket.find(({ id }) => id === productId);
    if (productFromBasket) {
      productFromBasket.count++;
      setBasket([...basket]);
    } else {
      const searchProduct = {
        ...products.find((item) => productId === item.id),
        count: 1,
      };
      setBasket([...basket, searchProduct]);
    }
  };
  const increment = (idProduct) => {
    const target = basket.find(({ id }) => id === idProduct);
    target.count++;
    setBasket([...basket]);
  };

  const decrement = (idProduct) => {
    const target = basket.find(({ id }) => id === idProduct);

    if (target.count < 2) {
      setBasket(basket.filter((item) => item.id !== idProduct));
    } else {
      target.count--;
      setBasket([...basket]);
    }
  };
  const clearBasket = () => setBasket([]);

  const deleteItem = (id) => {
    setBasket(basket.filter((item) => item.id !== id));
  };

const openWindow = ()=> {
setModal(true)
}
const closeWindow = ()=> {
  setModal(false)
  }

  return (
    <div>
      <button onClick={openWindow}>Open basket</button>
      {modal === true ? (
        <Modal closeWindow = {closeWindow}>
          <BasketContainer
            basket={basket}
            increment={increment}
            decrement={decrement}
            clearBasket={clearBasket}
            deleteItem={deleteItem}
          />
        </Modal>
      ) : (
        ""
      )}

      <div className={s.page}>
        {products === null
          ? "please wait"
          : products.map((item) => (
              <Product
                key={item.id}
                {...item}
                deleteProduct={deleteProduct}
                addProduct={addProduct}
                changeFoto={changeFoto}
              />
            ))}
      </div>
    </div>
  );
}
