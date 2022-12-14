const laptops = [
  {
    id: 1,
    name: "Aser",
    img: "https://lh3.googleusercontent.com/spp/AM1yTs5w6mIJTIJFFq2PURPoPr1OhDmC0UNOcj5eRSdLKu78qRFiwScveyOu2BV61rVYXec5l3Oiwf7CGaG8W32qKSTnsOww-MlxdMFnp9PBM9fAprxOrhaAi7tuQWHcJKMJcxJS-UMPzP-S2sS1fRVKlw3zqyB27j7Ot35wWDV1yJZxLIwBqo6vRnL2Rx9KPq8BYH5pAdttA3Y=s512-rw-pd-pc0x00ffffff",
    price: 25000,
    category: "laptop",
  },
  {
    id: 2,
    name: "Asus",
    img: "https://lh3.googleusercontent.com/spp/AM1yTs5w6mIJTIJFFq2PURPoPr1OhDmC0UNOcj5eRSdLKu78qRFiwScveyOu2BV61rVYXec5l3Oiwf7CGaG8W32qKSTnsOww-MlxdMFnp9PBM9fAprxOrhaAi7tuQWHcJKMJcxJS-UMPzP-S2sS1fRVKlw3zqyB27j7Ot35wWDV1yJZxLIwBqo6vRnL2Rx9KPq8BYH5pAdttA3Y=s512-rw-pd-pc0x00ffffff",
    price: 2000,
    category: "phone",
  },
  {
    id: 3,
    name: "Aser",
    img: "https://lh3.googleusercontent.com/spp/AM1yTs5w6mIJTIJFFq2PURPoPr1OhDmC0UNOcj5eRSdLKu78qRFiwScveyOu2BV61rVYXec5l3Oiwf7CGaG8W32qKSTnsOww-MlxdMFnp9PBM9fAprxOrhaAi7tuQWHcJKMJcxJS-UMPzP-S2sS1fRVKlw3zqyB27j7Ot35wWDV1yJZxLIwBqo6vRnL2Rx9KPq8BYH5pAdttA3Y=s512-rw-pd-pc0x00ffffff",
    price: 27000,
    category: "computer",
  },
  {
    id: 4,
    name: "Mokia",
    img: "https://lh3.googleusercontent.com/spp/AM1yTs5w6mIJTIJFFq2PURPoPr1OhDmC0UNOcj5eRSdLKu78qRFiwScveyOu2BV61rVYXec5l3Oiwf7CGaG8W32qKSTnsOww-MlxdMFnp9PBM9fAprxOrhaAi7tuQWHcJKMJcxJS-UMPzP-S2sS1fRVKlw3zqyB27j7Ot35wWDV1yJZxLIwBqo6vRnL2Rx9KPq8BYH5pAdttA3Y=s512-rw-pd-pc0x00ffffff",
    price: 2000,
    category: "laptop",
  },
  {
    id: 5,
    name: "HP",
    img: "https://lh3.googleusercontent.com/spp/AM1yTs5w6mIJTIJFFq2PURPoPr1OhDmC0UNOcj5eRSdLKu78qRFiwScveyOu2BV61rVYXec5l3Oiwf7CGaG8W32qKSTnsOww-MlxdMFnp9PBM9fAprxOrhaAi7tuQWHcJKMJcxJS-UMPzP-S2sS1fRVKlw3zqyB27j7Ot35wWDV1yJZxLIwBqo6vRnL2Rx9KPq8BYH5pAdttA3Y=s512-rw-pd-pc0x00ffffff",
    price: 251000,
    category: "computer",
  },
  {
    id: 6,
    name: "DS",
    img: "https://lh3.googleusercontent.com/spp/AM1yTs5w6mIJTIJFFq2PURPoPr1OhDmC0UNOcj5eRSdLKu78qRFiwScveyOu2BV61rVYXec5l3Oiwf7CGaG8W32qKSTnsOww-MlxdMFnp9PBM9fAprxOrhaAi7tuQWHcJKMJcxJS-UMPzP-S2sS1fRVKlw3zqyB27j7Ot35wWDV1yJZxLIwBqo6vRnL2Rx9KPq8BYH5pAdttA3Y=s512-rw-pd-pc0x00ffffff",
    price: 175000,
    category: "phone",
  },
  {
    id: 7,
    name: "Aser",
    img: "https://lh3.googleusercontent.com/spp/AM1yTs5w6mIJTIJFFq2PURPoPr1OhDmC0UNOcj5eRSdLKu78qRFiwScveyOu2BV61rVYXec5l3Oiwf7CGaG8W32qKSTnsOww-MlxdMFnp9PBM9fAprxOrhaAi7tuQWHcJKMJcxJS-UMPzP-S2sS1fRVKlw3zqyB27j7Ot35wWDV1yJZxLIwBqo6vRnL2Rx9KPq8BYH5pAdttA3Y=s512-rw-pd-pc0x00ffffff",
    price: 78000,
    category: "monoblock",
  },
];

const productContainer = document.querySelector(".products");

const showProducts = (laptops) => {
  productContainer.innerHTML = laptops.map(
    (laptops) => `
        <div class="product">
                <img class="product-img" src="${laptops.img}" alt="">
            <h5 class="product-name">${laptops.name}</h5>
            <p class="product-price">${laptops.price}</p>
            </div>
        `
  ).join("");
};
showProducts(laptops);
