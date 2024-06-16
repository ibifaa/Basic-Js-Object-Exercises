// Exercise 1
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York",
};

function introduce(person) {
  return `Hello, my name is ${person.firstName} ${person.lastName}.
   I am ${person.age} and i live in ${person.city}`;
}

console.log(introduce(person));

// Exercise 2

function updateCity(person, newCity) {
  person.city = newCity;
  return person;
}

console.log(updateCity(person, "Los Angeles"));

// Exercise 3

const car = {};
car.make = "Benz";
car.model = "c300w";
car.year = 2024;
car.color = "white";

console.log(car);

function removeProperty(car, property) {
    delete car.property
}

removeProperty(car, car.color)
console.log(car)

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

// Exercise 5

const library={
    name:"",
    books:[{
        title:"",
        year:0,
        author:"",
        pages:0
    }],
}

function addBook(library, newBook){
    const {name, books}= library
    books.push(newBook)
    console.log(books)

}

addBook(library, {
    title:"The Lion and the Unicorn",
    year:1984,
    author:"George Orwell",
    pages:328
})