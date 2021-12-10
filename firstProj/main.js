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
var userInput = prompt();
console.log('//_______________________________________________');
console.log('userInput: <--- (' + userInput + ')');
var age = 9;
console.log('secondsInAYear(s): <--- (' + secondsInAYear * age + ')');
