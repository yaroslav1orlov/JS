var cat = {
    "legs": 4,
    'paws': 4,
    "eyes": 2,
    'ears': 2,
    'tail': 1,
    'mouse': 1,
    'head': 1,
    'nose': 1,
    'body': 1
};
console.log(cat);
console.log(cat['legs']);
console.log(cat['paws']);
console.log(cat['eyes']);
console.log(cat['ears']);
console.log(cat['tail']);
console.log(cat['mouse']);
console.log(cat['head']);
console.log(cat['nose']);
console.log(cat['body']);
//способ 2
console.log(cat.legs);
console.log(cat.paws);
console.log(cat.eyes);
console.log(cat.ears);
console.log(cat.tail);
console.log(cat.mouse);
console.log(cat.head);
console.log(cat.nose);
console.log(cat.body);
//_______________________________________________
var kitten = {};
kitten['legs'] = 4,
    kitten['paws'] = 4,
    kitten["eyes"] = 2,
    kitten['ears'] = 2,
    kitten['tail'] = 1,
    kitten['mouse'] = 1,
    kitten['head'] = 1,
    kitten['nose'] = 1,
    kitten['body'] = 1
console.log(kitten);
//способ 1
console.log(kitten['legs']);
console.log(kitten['paws']);
console.log(kitten['eyes']);
console.log(kitten['ears']);
console.log(kitten['tail']);
console.log(kitten['mouse']);
console.log(kitten['head']);
console.log(kitten['nose']);
console.log(kitten['body']);
//способ 2
console.log(kitten.legs);
console.log(kitten.paws);
console.log(kitten.eyes);
console.log(kitten.ears);
console.log(kitten.tail);
console.log(kitten.mouse);
console.log(kitten.head);
console.log(kitten.nose);
console.log(kitten.body);
//_______________________________________________
var dinosaura = [
    { name: "TyrannosaurusRex", period: "UpperCretaceous" },
    { name: "Stegosaurus", period: "UpperKorsky" },
    { name: "Platheovaur", period: "Triassic" }
];
console.log(dinosaura);
//способ 1
console.log(dinosaura[0]);
console.log('name: ' + dinosaura[0]['name']);
console.log('period: ' + dinosaura[0]['period']);
console.log(dinosaura[1]);
console.log('name: ' + dinosaura[1]['name']);
console.log('period: ' + dinosaura[1]['period']);
console.log(dinosaura[2]);
console.log('name: ' + dinosaura[2]['name']);
console.log('period: ' + dinosaura[2]['period']);
//способ 2
console.log("name: " + dinosaura[0].name);
console.log("period: " + dinosaura[0].period);
console.log("name: " + dinosaura[1].name);
console.log("period: " + dinosaura[1].period);
console.log("name: " + dinosaura[2].name);
console.log("period: " + dinosaura[2].period);
//_______________________________________________
var randomBodyPart = ['nose', 'hand', 'growth'];
var randomAdjective = ['elephant', 'monkey', 'ant'];
var randomBodyPart  = randomBodyPart[Math.floor(Math.random()*randomBodyPart.length)];
var randomAdjective = randomAdjective[Math.floor(Math.random()*randomAdjective.length)];
var result = ['By you '] + randomBodyPart + ['is yours more than'] + randomAdjective;
console.log(result);
var anna = { name: 'Anna', age: 11, luckyNumbers: [2, 4, 8, 16] }
var dave = { name: 'Dave', age: 5, luckyNumbers: [3, 9, 40] }
var kaye = { name: 'Kaye', age: 9, luckyNumbers: [1, 2, 3] }
console.log(anna);
console.log(dave);
console.log(kaye);
//_______________________________________________
console.log(name);
//_______________________________________________
var owedMoney = {};
owedMoney["Jimmy"] = 5;
owedMoney["Anna"] = 7;
owedMoney["Jimmy"];
owedMoney["Jinen"];
//_______________________________________________