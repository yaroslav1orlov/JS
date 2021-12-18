console.log("сhapter_2");

//debugger;
// ресуем котиков________________________________
console.log('=^.^=');
var drawCats = function (hawManyTimes) {
    for (var i = 0; i < hawManyTimes; i++){
        console.log(i + " =^.^= ");
    }
};
drawCats(10);
// виводим слова_________________________________
console.log('Yaroslav')
// виводим long string___________________________
var a = 2;
var b = 3;
console.log(a + ' + ' + b + ' = ' + (a + b));
console.log("Theis is a long string");
console.log("Theis is a long string".slice(0, 5));
console.log(true && false);
console.log(1 != 2);
console.log(1 == 2);
var Boom;
// секунд в часе_________________________________
var hoursInADay = 24;
var secondsInMinute = 60;
var minuteInHour = 60;
var secondsInHour = secondsInMinute * minuteInHour;
console.log('secondsInHour:' + secondsInHour);
var secondsInDay = secondsInHour * hoursInADay ;
console.log('secondsInDay:' + secondsInDay)
// секунд в году_________________________________
var daysInYear = 365;
var secondsInAYear = secondsInMinute * minuteInHour * hoursInADay * daysInYear;
console.log('secondsInAYear: ' + secondsInAYear);
// секунд в годах________________________________
// мне 283824000 секунд__________________________
// а скільки в тобі секунд?_
//                          |
//                          |
//                         \ /
//                          '
var userInput = prompt();
console.log('//_______________________________________________');
console.log('userInput: <--- (' + userInput + ')');
var age = 9;
console.log('secondsInAYear(s): <--- (' + secondsInAYear * age + ')');
//_______________________________________________
var highFives = 0;
console.log('highFives = ---> (' + highFives + ')' );
console.log('++highFives = ---> (' + ++highFives + ')' );
console.log('highFives = ---> (' + highFives + ')' );
highFives = 0;
console.log('highFives = ---> (' + highFives + ')' );
console.log('--highFives = ---> (' + --highFives + ')' );
console.log('highFives = ---> (' + highFives + ')' );
highFives = 0;
console.log('highFives = ---> (' + highFives + ')' );
console.log('highFives++ = ---> (' + highFives++ + ')' );
console.log('highFives = ---> (' + highFives + ')' );
highFives = 0;
console.log('highFives = ---> (' + highFives + ')' );
console.log('highFives-- = ---> (' + highFives-- + ')' );
console.log('highFives = ---> (' + highFives + ')' );
// плюс дорівнює|мінус дорівнює__________________
var x = 10;
console.log(x + 5 );
x;
var score = 10;
console.log(score += 7);
console.log(score -= 3);
// ______________________________________________
var balloons = 100;
console.log(balloons *= 2);
var balloons = 100;
console.log(balloons /= 4);
// визначаємо довжину рядка______________________
//
//                          |
//                          |
//                         \ /
//                          '
//
//                         \
//                          \/
//
//                       правельно
console.log("__________________________________________________".length);
// true | false__________________________________
var jsIsCool = true;
console.log('IsJSCool? Yes it is ' + jsIsCool);
var jsIsBad = false;
console.log('IsJSBad? No!!! It is ' + jsIsBad + '!');
//_______________________________________________
console.log(0 == false);
console.log("false" == false);
//_______________________________________________
var dinosaur1 = "T-rex";
console.log(dinosaur1);
var dinosaur2 = "Velccirator";
console.log(dinosaur2);
var dinosaur3 = "Stegosaurus";
console.log(dinosaur3);
var dinosaur4 = "Triceratops";
console.log(dinosaur4);
var dinosaur5 = "Brachiosaurus";
console.log(dinosaur5);
var dinosaur6 = "Pteranodon";
console.log(dinosaur6);
var dinosaur7 = "Apatosaurus";
console.log(dinosaur7);
var dinosaur8 = "Diplodocus";
console.log(dinosaur8);
var dinosaur9 = "Compsognathus";
console.log(dinosaur9);
 //_______________________________________________
var dinosaurs = ["T-rex", "Velccirator", "Stegosaurus", "Triceratops", "Brachiosaurus",
                "Pteranodon", "Apatosaurus", "Diplodocus", "Compsognathus"];

for (let i = 0; i < dinosaurs.length; i++) {
    const element = dinosaurs[i];
    console.log(element);
}
