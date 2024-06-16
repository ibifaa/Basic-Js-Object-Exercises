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

