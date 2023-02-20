import { useEffect, useState } from "react";
import ProductCart from "../ProductCart";






function App() {
  const [products, setProducts] = useState([])
useEffect(()=>{
  (async()=>{
    const resp = await fetch('https://dummyjson.com/products')
    const data = await resp.json()
   setProducts(data.products)
  })
  ()
},[])

  return (
    <div>
      {products.map((item)=><ProductCart key={item.id} {...item}/>)}
    </div>
  );
}

export default App;
