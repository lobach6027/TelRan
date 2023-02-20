import { useEffect, useState } from "react";
import BasketContainer from "../BasketContainer";
import Product from "../Product";
import s from "./style.module.css";

function ProductContainer() {
  const [product, setProduct] = useState([null]);
  const [basket, setBasket] = useState([]);
  
  useEffect(() => {
    (async () => {
      const resp = await fetch("https://dummyjson.com/products");
      const data = await resp.json();
      const result = data.products.map(
        ({ id, title, description, price, images }) => ({
          id,
          title,
          description,
          price,
          images,
        }));
      setProduct(result);
    })();
  }, []);

useEffect(()=>{
  if()
  const products_ids = product.map(({id})=>id)
 setBasket(pre=>pre.filter(({id})=>products_ids.includes(id)))
},[product])





  const deleteProduct = (dellId) => {
    setProduct(product.filter(({ id }) => id !== dellId));
  };

  const addToBasket = (id) => {
    const newProductFromBasket = basket.find((item) => id === item.id);
    if (newProductFromBasket) {
      newProductFromBasket.count++;
      setBasket([...basket]);
    } else {
      const newProduct = product.find((item) => id === item.id);
      setBasket([...basket, { ...newProduct, count: 1 }]);
    }
  };

  const increment = (id) => {
    basket.find((item) => id === item.id).count++;
    setBasket([...basket]);
  };

  const decrement = (id) => {
   const resalt =  basket.find((item) => id === item.id);
   resalt.count --;
    if (resalt.count === 0) {  
      setBasket(basket.filter((item) => item.id !== id));
    } else {
      setBasket([...basket]);
    }
  };

const clearBasket = ()=>{
    setBasket([])
}

const deleteBasketItem = id =>{
  setBasket(basket.filter((item)=>item.id !== id))
}



  console.log(basket);

  return (
    <div>
      <BasketContainer
        basket={basket}
        decrement={decrement}
        increment={increment}
        clearBasket = {clearBasket}
        deleteBasketItem = {deleteBasketItem}
      />
      <div className={s.container}>
        {product.map((item) => (
          <Product
            key={item.id}
            {...item}
            deleteProduct={deleteProduct}
            addToBasket={addToBasket}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductContainer;
