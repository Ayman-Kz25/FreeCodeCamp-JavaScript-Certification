const tiger = {
    species: "Tiger",
    age: 5,
    isEndangered: true,
};

const elephant = {
    species: "Elephant",
    age: 10,
    isEndangered: true,
}

function getSpecies(animal) {
    return animal.species;
}

function getAge(animal) {
    return animal.age;
}

const addHabitat = (animal, habitat) => {
    animal.habitat = habitat;
    return animal;
}

const updateAge = (animal, newAge) => {
    animal.age = newAge;
    return animal;
}

const removeEndangeredStatus = (animal) => {
    delete animal.isEndangered;
    return animal;
}

const hasHabitat = (animal) => {
    return animal.hasOwnProperty("habitat");
}

function getProperty(animal, propertyName) {
    return animal[propertyName];
}

console.log(getSpecies(tiger));

console.log(getAge(tiger));

console.log(addHabitat(tiger, "Rainforest"));

console.log(updateAge(elephant, 12));

console.log(removeEndangeredStatus(tiger));

console.log(hasHabitat(tiger));
console.log(hasHabitat(elephant));

console.log(getProperty(tiger, "species"));
console.log(getProperty(elephant, "age"));