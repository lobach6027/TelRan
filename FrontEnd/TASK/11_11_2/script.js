
/*const main = document.querySelector('main')
const book = {
    autor: "Rouling",
    name:"Harry Potter",
    count:378
}





main.innerHTML = `<div class = "book">
<h1>Book title: ${book.name}</h1>
<p>Autor:  ${book.autor}</p>
<p>Quantity page:  ${book.count}</p>
</div>`*/


const books = [{
    id:1,
    author : "Пушкин",
    name : "Капитанская дочка",
    count : 500
},
{
    id:2,
    author : "Толстой",
    name : "Война и мир",
    count : 1000
},
{
    id:3,
    author : "Достоевский",
    name : "Преступление и наказание",
    count : 700
}]
/*
main.innerHTML = `<div class = "book">
<h1>Book title: ${books[0].name}</h1>
<p>Autor:  ${books[0].autor}</p>
<p>Quantity page:  ${books[0].count}</p>
</div>`
*/
/*books.filter(book =>{
    return book.count>500
}).map(book =>{
    main.innerHTML += `<div class = "book">
    <h1>Book title: ${book.name}</h1>
    <p>Autor:  ${book.author}</p>
    <p>Quantity page:  ${book.count}</p>
    </div>`
})*/
function swowBooks(){
    books.map(book =>{
        main.innerHTML += `<div class = "book">
        <h1>Book title: ${book.name}</h1>
        <p>Autor:  ${book.author}</p>
        <p>Quantity page:  ${book.count}</p>
        <button class = "delete-btn" id = "${book.id}">Delete</button>
        </div>`
    })
}
swowBooks()

const buttons = document.querySelectorAll(".delete-btn")
console.log(buttons)

swowBooks();