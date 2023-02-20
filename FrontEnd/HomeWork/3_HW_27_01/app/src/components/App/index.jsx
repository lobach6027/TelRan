import { useState } from "react";
import Card from "../Card";
import ShoppingCart from "../ShoppingCart";
import s from "./style.module.css";

function App() {
  const products = [
    {
      id: 1,
      title: "Laptop",
      model: "Razer Blade 15",
      img: "https://assets3.razerzone.com/Y9fv8qRtbhHgeb5h7pV3EMKBl5o=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh5c%2Fhd3%2F9286405095454%2F210104-blade-15-ch8-fhd-1500x1000-1.jpg",
      price: 80,
      count: 13,
    },

    {
      id: 3,
      title: "Mouse",
      model: "Razer Basilisk Ultimate & Mouse Dock",
      img: "https://static.razer.ru/213211/basilisk-ultimate-hero-desktop.jpg",
      price: 130,
      count: 13,
    },
    {
      id: 4,
      title: "Keybord",
      model: "Razer DeathStalker V2 Pro (Low-Profile Linear Optical Switch)",
      img: "https://static.razer.ru/public/VBN7FZrC9XTAiHNmjzqio3/deathstalker-v2-pro-1500x1000-1.jpg",
      price: 280,
      count: 13,
    },
    {
      id: 5,
      title: "Mini keybord",
      model: "Razer Tartarus Pro, Black",
      img: "https://static.razer.ru/217081/razer-tartarus-pro-gallery-photo-1.jpg",
      price: 280,
      count: 13,
    },
    {
      id: 6,
      title: "Cooler",
      model: "Razer Hanbo Chroma",
      img: "https://www.pcgameshardware.de/screenshots/970x546/2021/10/Razer-AiO-Kuehler-pcgh.jpg",
      price: 80,
      count: 13,
    },
    {
      id: 7,
      title: "Clock",
      model: "Razer Liminor",
      img: "https://www.watchtime.net/app/uploads/2022/11/Panerai-Luminor-Quaranta-Razer-Special-Edition-mood.jpg",
      price: 380,
      count: 13,
    },
  ];

  const [order, setOrder] = useState([]);

  const addToCard = (searchId) => {
    let res = products.find(({ id }) => id === searchId);
    order.push(res);
    setOrder(order);
    return order;
  };

  console.log(order);

  return (
    <div className={s.page}>
      
      <div>
        {products.map((item) => (
          <Card key={item.id} {...item} addToCard={addToCard} />
        ))}
      </div>

      <p>
      {order.map((item) => (
          <ShoppingCart key={item.id} {...item}/>
        ))}
      </p>
    </div>
  );
}

export default App;
