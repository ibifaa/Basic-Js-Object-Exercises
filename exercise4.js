
 // Exercise 4
 const book ={
    tile:"Mark",
    author:"",
    pages:"",
    publisher:"",
}

function listProperties(book){
    for(const props in book){
   
        console.log(props)
    }
}

console.log(listProperties(book))