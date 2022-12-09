const user = {
    name: "Oksana",
    job:"Frontend Dev"
}
const posts = [
    {title: "My first title",
    description:"My first description",
    autor: "Ann"
},
    {title: "My second title",
    description:"My second description",
    autor: "Bob"

},
    {title: "My third title",
    description:"My third description",
    autor: "Lon"

}]
//console.table(posts);

//const title = prompt("Enter title ")
//const description = prompt("Enter title ")
//const autor = prompt("Enter title ")

/*let newpost = {
    title,
    description,
    autor
}
const newPosts = [...posts,newpost];
//or
//let newPosts = posts.concat(newpost)

console.table(newPosts)
//const newPosts = [...posts,newData];*/

    for (let i = 0; i < posts.length; i++) {
        console.log(`<div class="post">
        <p>Titlle:${posts[i].title}</p>
        <p>Desrcription:${posts[i].description}</p>
        <p>Autor:${posts[i].autor}</p>
        </div>`)  
    }
    
    const book={
        autor:"pushkin",
        name:"Kapitanskaja dochka",
        count:"500"
    }



    const books = [{
        autor:"tolstoy",
        name:"Vojna i mir",
        count:"700"
    },{
        autor:"pushkin",
        name:"Kapitanskaja dochka",
        count:"500"
    },
    {
        autor:"Shevchenko",
        name:"Kobzar",
        count:"600"
    },{
        autor:"Lesia Ykrainka",
        name:"Lisova Pisnja",
        count:"500"
    }];



const newAutor = prompt("enter autor")
const newName = prompt("enter name")
const newCount = prompt("enter count")

const newBook = {
    autor:newAutor,
    name:newName,
    count:newCount 
};

const newBooks = books.concat(newBook)
console.table(newBooks)

for (let i = 0; i < newBooks.length; i++) {
    const element = newBooks[i];
    console.log(`
    <div class= "book"> 
    <p>Autor: ${newBooks[i].autor}</p> 
    <p>name: ${newBooks[i].name}</p> 
    <p>count:${newBooks[i].count}</p>
    </div>`)
}

//map
newBooks.map(book => {console.log(`<div class= "book"> 
<p>Autor: ${book.autor}</p> 
<p>name: ${book.name}</p> 
<p>count:${book.count}</p>
</div>`)})



console.log(`<div>Hello!</div>`)
const us = {
    name: "Anna",
    age: 25
}
console.log(`<div>
<p class ="user">${us.name}</p>
<p class ="age">${us.age}</p>
</div>`)
