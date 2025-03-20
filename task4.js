const person = {
    frstName: "Maksym",
    lastName: "Nazarok",
    age: 27
};

console.log(person);

person.email = "mnazarok5@gmail.com";
delete person.age;

console.log(person);
