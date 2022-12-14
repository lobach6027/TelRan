fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(resp=>resp.json())
.then(data=>console.log(data))

function someFn(id){
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(resp=>resp.json())
    .then(data=>create(data))
}
someFn(2)


const root = document.querySelector('.root')
function create(data){
const container = document.createElement('div')
const title = document.createElement('p')
const body = document.createElement('p')
container.append(title,body);
title.innerText = data.title;
body.innerText = data.body;
root.append(container)
}