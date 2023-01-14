class Dog {
  hi() {
    console.log("hi " + this.name);
  }
  constructor(name) {
    this.name = name;
  }
}
const dog_1 = new Dog("bob");
const dog_2 = new Dog("ron");

//dog_1.name = "Bob";
//dog_2.name = "Ron";

//dog_1.init('bob');
//dog_2.init('ron');

dog_1.hi();
dog_2.hi();

class User {
  constructor(name, age, job,role = 'guest') {
    this.name = name;
    this.age = age;
    this.job = job;
    this._roles = ['manager','admin','root','guest']
this.change_role(role)



  }

  hi() {
    const { name, age, job } = this;
    console.log(`Hi ${name}, your age: ${age}`);
  }
  date() {
    this.age += 1;
  }
  change_name(newName) {
    this.name = newName;
  }

  change_role(role){
    const roles = [];
    if(this._roles.includes(role)){
        this.role = role
    }else{
        this.role = null;
    }

  }
}
const user_1 = new User("Alex", 24, "teacher",'manager');
const user_2 = new User("Alla", 26, "teacher");

user_1.date();
user_1.date();
user_1.date();
user_1.date();
user_1.date();
user_1.change_name("Bob");
console.log(user_1);

class Product {
  constructor(title, price, amount) {
    this.title = title;
    this.price = price;
    this.amount = amount;
    this.income = 0
  }
  change_price(newPrice) {
    if (newPrice > 0) {
      this.price = newPrice;
    } else {
      console.log("price is uncorrect");
    }
  }
  sale() {
    if (this.amount === 0) {
      console.log("product is over");
    } else {
      this.income+=this.price;
      this.amount --;
    }
  }
}

const product_1 = new Product("phone", 7500, 5);

product_1.change_price(-215);
product_1.sale();
product_1.income(0)
console.log(product_1);
