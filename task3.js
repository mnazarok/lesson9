const car1 = {
    brand: "Skoda",
    model: "Octavia",
    year: "2006"
};

const car2 = {
    brand: "Audi",
    model: "A7",
    year: "2010"
};

const car3 = {car2, ...car1};

console.log(car3); 
