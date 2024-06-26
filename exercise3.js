 // Exercise 3
  
 const car = {};
 car.make = "Benz";
 car.model = "c300w";
 car.year = 2024;
 car.color = "white";
 
 console.log(car);
 
 function removeProperty(car, property) {
    delete car["color"]
    
 }
 
 removeProperty(car, car.color)
 console.log(car)
 