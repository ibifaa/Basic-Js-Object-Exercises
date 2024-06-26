
 // Exercise 4
 const book ={
    tile:"Introduction to JavaScript",
    author:"David",
    pages:"200",
    publisher:"inocentpintz",
}

function listProperties(book){
    for(const props in book){
   console.log(`${props}: ${book[props]}`)
    }
}

listProperties(book)