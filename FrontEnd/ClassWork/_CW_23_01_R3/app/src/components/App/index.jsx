import { useState, useEffect } from "react";
import AddProduct from "../AddProduct";
import Product from "../Product";

function App() {
  useEffect(() => {
    (async () => {
      const resp = await fetch("https://fakestoreapi.com/products");
      const data = await resp.json();
      const newArray = data.map(({ id, title, price }) => ({
        id,
        title,
        price,
      }));
      setProduct(newArray);
    })();
  }, []);

  const [products, setProduct] = useState([]);

  const deleteProduct = async (delId) => {
    const resp = await fetch(`https://fakestoreapi.com/carts/${delId}`, {method:"DELETE" })
    const {id} = await resp.json();
            setProduct(products.filter(product => product.id !== id));
  };


  /*async () => {
      const resp = await fetch("https://fakestoreapi.com/products");
      const data = await resp.json();
      const newArray = data.map(({ id, title, price }) => ({
        id,
        title,
        price,
      }));
      setProduct(newArray);
    } */
  const createProduct = async (title, price) => {
    price =+price.toFixed(2)
  const resp =  await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({ title, price}),
    })

    const {id} = await resp.json();
    setProduct([...products, {id,title,price}])
  };

  const changePrice = (id, num) => {
    //products.find((item) => item.id === id).price += num;
    const targ = products.find((item) => item.id === id);

    if (targ.price + num < 0) {
      targ.price = 0;
    } else {
      targ.price += num;
    }
    targ.price = +targ.price.toFixed(2)
    setProduct([...products]);
  };

  return (
    <div>
      <AddProduct createProduct={createProduct} />
      <div>
        {products.map((item) => (
          <Product
            key={item.id}
            {...item}
            deleteProduct={deleteProduct}
            changePrice={changePrice}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
