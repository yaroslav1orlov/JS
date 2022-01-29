var dinosaurs = ["T-rex", "Velccirator", "Stegosaurus", "Triceratops", "Brachiosaurus",
    "Pteranodon", "Apatosaurus", "Diplodocus", "Compsognathus"];

var print = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(i + ". item: " + element);
    }
}
//_______________________________________________
var din1 = [
    "T-rex",
    "Velccirator",
    "Stegosaurus",
    "Triceratops",
    "Brachiosaurus",
    "Pteranodon",
    "Apatosaurus",
    "Diplodocus",
    "Compsognathus"
];

print(din1)
// ______________________________________________
var dinosaur1 = "T-rex";
console.log(dinosaur1);
var dinosaur3 = "Stegosaurus";
console.log(dinosaur3);
//_______________________________________________
var din2 = []
din2[1] = "T-rex";
din2[2] = "Velccirator";
din2[3] = "Stegosaurus";
din2[4] = "Triceratops";
din2[5] = "Brachiosaurus";
din2[6] = "Pteranodon";
din2[7] = "Apatosaurus";
din2[8] = "Diplodocus";
din2[9] = "Compsognathus";

print(din2)
//_______________________________________________
var maniacs = ['Yakko', 'Wakko', 'Dot'];
console.log(maniacs[0]);
console.log(maniacs[1]);
console.log(maniacs[2]);
//_______________________________________________
var animals = [];
for (let i = 0; i < animals.length; i++) {
    const element = animals[i];
}
console.log(animals);
animals.push("Cat");
console.log(animals.length);
animals.push("Dog");
console.log(animals.length);
animals.push("Llama");
console.log(animals.length);
var cat = 0
var dog = 1
var llama = 2
console.log('animals[0]: ' + animals[cat]);
console.log('animals[1]: ' + animals[dog]);
console.log('animals[2]: ' + animals[llama]);
print(animals);
//_______________________________________________
animals.push("Cat");
console.log(animals.length);
animals.push("Dog");
console.log(animals.length);
animals.push("Llama");
console.log(animals.length);
animals.push("monkey");
console.log(animals.length);
animals.push("polarBear");
console.log(animals.length);
var cat = 0
var dog = 1
var llama = 2
var monkey = 3
var polarBear = 4
console.log('animals[0]: ' + animals[cat]);
console.log('animals[1]: ' + animals[dog]);
console.log('animals[2]: ' + animals[llama]);
console.log('animals[3]: ' + animals[monkey]);
console.log('animals[4]: ' + animals[polarBear]);
console.log(animals);
console.log('//____________________________________________________');
//_______________________________________________
var furryAnimals = ['Flpkaka', 'Ring-tailed lemur', 'Yeti'];
console.log(furryAnimals);
var scalyAnimals = ['Boa constrictor', 'Godzilla'];
console.log(scalyAnimals);
var featheredAnimals = ['Ara', 'Dodo'];
console.log(featheredAnimals);

var allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
console.log(allAnimals);
//_______________________________________________
var color = ['red', 'green', 'blue'];
print(color);
console.log('indexOf("blue") = ' + color.indexOf('blue'));
console.log('indexOf("green") = ' + color.indexOf('green'));
console.log('indexOf("red") = ' + color.indexOf('red'));
//_______________________________________________
console.log(color[2]);
console.log(color.indexOf('blue'));
console.log(color[0]);
console.log(color.indexOf('red'));
console.log(color[1]);
console.log(color.indexOf('green'));
//_______________________________________________
var boringAnimals = ['Martishka', 'Cat', 'Riba', 'Lizard',];
console.log(boringAnimals);
console.log(boringAnimals.join(["Bee", "Ant"]));
//_______________________________________________
//_There_is_no_element_in_the_array______________
console.log(color.indexOf('Violet'));
//_______________________________________________
var insects = ["Bee", "Ant", "Bee", "Bee", "Ant"];
console.log(insects.indexOf("Ant"));
//_______________________________________________
console.log(animals);
console.log(animals.unshift("monkey"));
console.log(animals);
//_______________________________________________
var lastAnimal = animals.pop();
console.log(lastAnimal);
console.log(animals);
//_______________________________________________
console.log(animals);
var firstAnimal = animals.shift();
console.log(firstAnimal);
console.log(animals);
var firstAnimal = animals.shift();
console.log(firstAnimal);
console.log(animals);
var firstAnimal = animals.shift();
console.log(firstAnimal);
console.log(animals);
var firstAnimal = animals.shift();
console.log(firstAnimal);
console.log(animals);
var firstAnimal = animals.shift();
console.log(firstAnimal);
console.log(animals);
var firstAnimal = animals.shift();
console.log(firstAnimal);
console.log(animals);
var firstAnimal = animals.shift();
console.log(firstAnimal);
console.log(animals);
//______________________________________________>
var boringAnimals = ['', 'monkey', 'cat', 'fish', 'lizard', ''];
console.log(boringAnimals.join('=- -='));
var boringAnimals = ['monkey', 'cat', 'fish', 'lizard'];
console.log(boringAnimals.join(' and '));
console.log(boringAnimals.join(' & '));
//________________________________________________
console.log('//________________________________________________')
//________________________________________________
var myNames = ['Nicholas', 'Andrew', 'Maxwell', 'Morgan',];
console.log(myNames.join(" "));
console.log(myNames.join("_"));
console.log(myNames.join("-"));
console.log(myNames.join(" & "));
console.log(myNames.join(" and "));
console.log(myNames.join("/"));
console.log(myNames.join(" = "));
console.log(myNames.join(" + "));
console.log(myNames.join(" @ "));
//_______________________________________________
console.log(myNames [0] + ' ' + myNames [1] + ' ' + myNames [2] + ' ' + myNames [3]);
//_______________________________________________
var ages = [11, 14 ,79];
console.log(ages.join(' '));
//_______________________________________________
console.log(Math.random());
//_______________________________________________
console.log(Math.random()* 10);
//_______________________________________________
var number = 9.99;
var numberFloor = Math.floor(number);
console.log(number);
console.log(numberFloor);
//_______________________________________________
console.log(Math.floor(Math.random));
//_______________________________________________
console.log(Math.floor(Math.random)) * 10;
console.log(Math.floor(Math.random)) * 100;
//_______________________________________________
