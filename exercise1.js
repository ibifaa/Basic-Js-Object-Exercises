const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  city: "New York",
};

function introduce(person) {
  return `Hello, my name is ${person.firstName} ${person.lastName}. I am ${person.age} and i live in ${person.city}`;
}

console.log(introduce(person));

// Problem 2: Modifying Object Properties
// Given the person object from Problem 1, write a function called updateCity 
// that takes the person object and a new city as arguments. 
// The function should update the city property of the person object 
// and return the updated object.

// Example:
// javascript
// updateCity(person, 'Los Angeles');

function updateCity(person, newCity){
    person.city = newCity
    return person
}

console.log(updateCity(person, "Los Angeles"))