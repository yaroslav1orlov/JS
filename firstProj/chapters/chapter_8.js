var ourFirstFunction = function () {
    console.log('Hello, world!');
}

var sayHelloTo = function (name) {
    console.log('Hello' + name + '!');
}

sayHelloTo('Mike');
sayHelloTo('Yaroslav');
var drawCats = function (howManiTimes) {
    for (var i = 0; i < howManiTimes; i++) {
        console.log(i + ' =^.^= ');
    }
};

drawCats(5);

var printMultipleTimes = function (i, content) {
    for (let y = 0; y < i; y++) {
        console.log(y + ". " + content);
    }
}

printMultipleTimes(1, "=^.^=");

printMultipleTimes(2, " =^.^= ");

printMultipleTimes(3, "  =^.^=  ");

printMultipleTimes(4, "   =^.^=   ");

printMultipleTimes(5, "    =^.^=   ");

5 + Math.floor(1.2345);

var double = function (number) {
    return number * 2;
};

for (let i = 0; i < 6; i++) {
    console.log(double(i));
}

console.log("double(5) * double(5) = " + double(5) * double(5));
double(5) * double(5);
console.log("double(5) + double(5) = " + double(5) + double(5));
double(5) + double(5);
console.log("double(5) / double(5) = " + double(5) / double(5));
double(5) / double(5);
console.log("double(5) - double(5) = " + double(5) - double(5));
double(5) - double(5);
console.log("double(double(5)) = " + double(double(5)));
double(double(5));
var pickRandomWord = function (words) {
    return words[Math.floor(Math.random() * words.length)];
};
var randomWords = ["Planet", "Worm", "Flower", "Computer"];
pickRandomWord(randomWords);
pickRandomWord(("Charlie", "Rada", "Raj", "Nicole", "Kate", "Sandy"));
var randomBodyParts = ["eye", "nose", "skull"];
var randomAdjectives = ["smelly", "dull", "stupid"];
var randomWords = ["fly", "bydra", "club", "monkey", "rat"];
var randomBodyPart = randomBodyParts[Math.floor(Math.random() + 3)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() + 3)];
var randomWord = randomWords[Math.floor(Math.random() * 5)];
randomAdjective + " " + randomWord + "!!!"
var randomInsult = 'You heve a ' + randomBodyPart + "like a " + randomWord;
console.log(randomInsult);
var randomBodyParts = ["eye", "nose", "skull"];
var randomAdjectives = ["smelly", "dull", "stupid"];
var randomWords = ["fly", "strong", "club", "monkey", "rat"];
var randomString = "You have " + pickRandomWord(randomBodyParts) + + " like " + pickRandomWord(randomAdjectives)
" " + pickRandomWord(randomWords) + "!!!";
randomString;
"Your nose is like a stupid vyprya!"
var generateRandomInsult = function () {
    var randomBodyParts = ["eye", "nose", "black"];
    var randomAdjectives = ["smelly", "dull", "stupid"];
    var randomWords = ["Myxa", "otter", "club", "monkey", "rat"];
    var randomstring = "You have " + pickRandomWord(randomBodyParts) + "like" + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!!!";
    return randomString;
};
generateRandomInsult();
"Your skull is like a dull club!!!"
generateRandomInsult();
"Your nose is like a stupid card!"
generateRandomInsult();
"Your eye is like a stink fly!"

var fifthLetter = function (name) {
    if (name.length > 4) {
        return "Пятая буква имени '" + name + "': " + name[4] + ".";
    }
    else {
        return "Ошибка! Имя: '" + name + "' слишком короткое."
    }
};

console.log(fifthLetter("Mihail"));
console.log(fifthLetter("Mike"));

var medalForScore = function (score) {

    if (score < 4) {

        return "Бронзовая";
    }
    console.log(medalForScore(1));
    console.log(medalForScore(2));
    console.log(medalForScore(3));

    if (score < 7) {

        return "Серебряная";
    }
    console.log(medalForScore(4));
    console.log(medalForScore(5));
    console.log(medalForScore(6));

    return "Золотая";
};
console.log(medalForScore(7));
console.log(medalForScore(8));
console.log(medalForScore(9));

var add = function (a, b) {
    return a + b;
};
var ar1 = 9824;
var ar2 = 777;
console.log(ar1 + " + " + ar2 + " = " + add(ar1, ar2));

var multiply = function (a, b) {
    return a * b;
};

var ar3 = 36325;
console.log(ar3 + " * " + ar1 + " = " + multiply(ar3, ar1));

var res1 = multiply(ar3, ar1)
console.log(ar3 + " * " + ar1 + " = " + res1);

var res2 = add(res1, ar2);
console.log(res1 + " + " + ar2 + " = " + res2);

var areArraysSame = function (c, d) {
    if (c.length == d.length) {

    }

    return false;
};

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

console.log(ar1 + " + " + ar2 + " = " + add(ar1, ar2));
var minus = function (a, b) {
    return a - b;
};

var division = function (a, b) {
    return a / b;
};

console.log(ar3 + " / " + ar1 + " = " + division(ar3, ar1));

var res3 = division(ar3, ar1)
console.log(ar3 + " / " + ar1 + " = " + res3);

var res4 = minus(res3, ar2);
console.log(res3 + " - " + ar2 + " = " + res4);

var remainderOfTheDivision = function (a, b) {
    return a % b;
};

var g = 5;
var h = 2;

console.log(g + "%" + h + remainderOfTheDivision(g, h));

var show = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
};

show([1, 2, 3]);

var sum = function (arr) {
    var s = 0;
    for (let i = 0; i < arr.length; i++) {
        s = s + arr[i];
    }

    return s;
};

console.log(sum([2]));
console.log(sum([]));
console.log(sum([25, 20, 55, 50]));
console.log(sum([100, 100, 100]));

var avg = function (arr) {
    var d = sum(arr) / arr.length;
    return d;
};

var areArraySame = function(a, b){
    if (a.length != b.length) {
        return false;
    }

    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            return false;
        }
    }

    return true;
}

var arr11 = [1, 2, 3, 4];
var res1 = areArraySame(arr1, arr11);
console.log(Object.keys({arr1})[0] + " == " + Object.keys({arr11})[0] + ": " + res1)

var arr3 = [10, 8];
console.log("（╹◡╹）Среднее арифметическое（╹◡╹）= " + avg(arr3));