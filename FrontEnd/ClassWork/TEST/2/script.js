/*class Dog{
constructor(name,age,height,speed){
    this.name = name
    this.age = age
    this.height = height
    this.speed = speed
}

hi(){
    console.log(this)
    console.log('hi  '+ this.name)
}
init(name){
    this.name = name;
}
}

const dog_1 = new Dog();
const dog_2 = new Dog();

dog_1.init('bob');
dog_2.init('lon');

dog_1('bob',21,124,320)
dog_2('bob',20,120,320)
*/
/*
class User{
    constructor(name,user_name,age){
        this.name = name
        this.user_name = user_name
        this.age = age
    }
    hi(){
        //const{name,user_name,age}  = this;
        //console.log(`Hi, ${name}, your user_name: ${user_name}, age: ${age}`)
        //or
console.log(`Hi, ${this.name}, your user_name: ${this.user_name}, age: ${this.age}`)

    }
    update(){
        this.age++
    }
    change_name(new_name){
        this.name = new_name;

    }
} 
const user_1 = new User('anna','Ann',21)
const user_2 = new User('Donna','Do',25)
const user_3 = new User('Ranni','rai',56)

user_1.update();
user_1.update();
user_1.update();
user_1.change_name('non')
console.log(user_1);
*/
class Product{
    constructor(title, price,count, role = 'guest'){
        const roles = ['manager','user','superUser','root','guest']
        this.title = title
        this.price = price
        this.count = count
        this.income = 0;
        if(roles.includes(role)){
            this.role = role
        }else{
            this.role = null; 
        }
    }
    change_price(newPrice){
        if(newPrice>0){
            this.price = newPrice 
        }else{
            console.log('false new price')
        }

    }

    sale(){
        if(this.count ===0){
            console.log('product is over')
        }else{
          
            this.income+=this.price

            this.count --
        }
   
    }



}

const bike = new Product('bicycle',15000,140,'gst');
console.log(bike);
bike.change_price(50);
bike.sale();
bike.sale();
bike.sale();
bike.sale();
bike.sale();
bike.sale();
bike.sale();
bike.sale();

console.log(bike)
