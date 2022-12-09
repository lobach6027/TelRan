const laptops = [
  {
    id: 1,
    name: "Aser",
    img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=fe80&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
    price: 200000,
    category: "laptop",
  },
  {
    id: 2,
    name: "ApplePro",
    img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=fe80&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
    price: 180000,
    category: "laptop",
  },
  {
    id: 3,
    name: "Asus",
    img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=fe80&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
    price: 160000,
    category: "laptop",
  },
  {
    id: 4,
    name: "HP",
    img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=fe80&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
    price: 1500000,
    category: "laptop",
  },
  {
    id: 5,
    name: "Apple",
    img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=fe80&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
    price: 100000,
    category: "laptop",
  },
  {
    id: 6,
    name: "Sony",
    img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=fe80&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
    price: 15000,
    category: "phone",
  },
  {
    id: 7,
    name: "HP",
    img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=fe80&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
    price: 19000,
    category: "Phone",
  },
  {
    id: 8,
    name: "HP",
    img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=fe80&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
    price: 190000,
    category: "computer",
  },
  {
    id: 9,
    name: "HP",
    img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=fe80&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
    price: 2700000,
    category: "computer",
  },
  {
    id: 10,
    name: "HP",
    img: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LqQX?ver=fe80&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
    price: 260000,
    category: "Monoblock",
  },
];
/*<div class="product">
            <img  class="product-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW143YguiRN9OPFZGBX-Oyk4drvAv2FTB-HbJOAq08NsvWynalveYy1sfd1_VuOoEPDlU&usqp=CAU" alt="">
        <h5 class="product-name">Aser</h5>
        <p class="product-price">15000</p>
        </div>
        */
const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search-input");
const categories = document.querySelectorAll(".category");
const showproducts = (laptops) => {
  productsContainer.innerHTML = laptops
    .map(
      (product) =>
        `<div class="product">
            <img  class="product-img" src="${product.img}" alt="">
        <h5 class="product-name">${product.name}</h5>
        <p class="product-price">${product.price}</p>
        </div>
            `
    )
    .join("");
};
showproducts(laptops);

searchInput.addEventListener("input", (event) => {
  const value = event.target.value;
  let newLaptops = laptops.filter((item) =>
    item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  );
  showproducts(newLaptops);
});

categories.forEach((category) => {
  category.addEventListener("click", (event) => {
    
      event.target.textContent == "All"
    
      ? showproducts(laptops)
      : showproducts(
          laptops.filter((laptop) =>
            laptop.category
              .toLocaleLowerCase()
              .includes(event.target.textContent.toLocaleLowerCase())
          )
        );
  });
});
