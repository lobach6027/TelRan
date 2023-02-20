import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card";
import Form from "../Form";

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
      setProducts(newArray);
    })();
  }, []);

  const productsDefault = [
    {
      id: 1,
      title: "Laptop",
      model: "Razer Blade 15",
      img: "https://assets3.razerzone.com/Y9fv8qRtbhHgeb5h7pV3EMKBl5o=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh5c%2Fhd3%2F9286405095454%2F210104-blade-15-ch8-fhd-1500x1000-1.jpg",
      price: 2080,
      count: 3,
    },

    {
      id: 3,
      title: "Mouse",
      model: "Razer Basilisk Ultimate & Mouse Dock",
      img: "https://static.razer.ru/213211/basilisk-ultimate-hero-desktop.jpg",
      price: 130,
      count: 2,
    },
    {
      id: 4,
      title: "Keybord",
      model: "Razer DeathStalker V2 Pro (Low-Profile Linear Optical Switch)",
      img: "https://static.razer.ru/public/VBN7FZrC9XTAiHNmjzqio3/deathstalker-v2-pro-1500x1000-1.jpg",
      price: 280,
      count: 5,
    },
    {
      id: 5,
      title: "Mini keybord",
      model: "Razer Tartarus Pro, Black",
      img: "https://static.razer.ru/217081/razer-tartarus-pro-gallery-photo-1.jpg",
      price: 340,
      count: 1,
    },
    {
      id: 6,
      title: "Cooler",
      model: "Razer Hanbo Chroma",
      img: "https://www.pcgameshardware.de/screenshots/970x546/2021/10/Razer-AiO-Kuehler-pcgh.jpg",
      price: 650,
      count: 2,
    },
    {
      id: 7,
      title: "Clock",
      model: "Razer Liminor",
      img: "https://www.watchtime.net/app/uploads/2022/11/Panerai-Luminor-Quaranta-Razer-Special-Edition-mood.jpg",
      price: 520,
      count: 1,
    },
  ];
  const [products, setProducts] = useState(productsDefault);

  const deleteProduct = async(dellid) =>{
      const resp = await fetch(`https://fakestoreapi.com/products/${dellid}`, {
        method: "DELETE",
      });
      const { id } = resp.json();
      setProducts(products.filter((item) => item.id !== id));
  };

  const createProduct = async (title, price) => {
    price = price.toFixed(2);
      const resp = await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify({ title, price }),
      });
      const data = await resp.json();
      const newProduct = { id: data.id, title, price };
      setProducts([...products, newProduct]);
  
  };

  const changePrice = (id, num) => {
    const priceOfObj = products.find((item) => item.id === id);
    if (priceOfObj.price + num > 0) {
      priceOfObj.price += num;
    } else {
      priceOfObj.price = 0;
    }
    priceOfObj.price = +priceOfObj.price.toFixed(2);
    setProducts([...products]);
  };
  return (
    <div>
      <Form createProduct={createProduct} />
      <div>
        {products.map((item) => (
          <Card
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
