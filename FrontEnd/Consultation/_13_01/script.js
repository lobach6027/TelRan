

//console.log(fetch("http://localhost:3000/posts"))
fetch("http://localhost:3000/posts")
.then((response)=>{
    return response.json()
})
.then(data=>console.log(data))