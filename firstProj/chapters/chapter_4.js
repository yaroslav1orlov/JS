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
    console.log(cat);
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
{ name: "TyrannosaurusRex", reriod: "UpperCretaceous" },
{ name: "Stegosaurus", regiod: "UpperKorsky" },
{ name: "Platheovaur", reriod: "Triassic" }
];
console.log(dinosaura);
    //способ 1
    console.log(dinosaura['TyrannosaurusRex']);
    console.log(dinosaura['UpperCretaceous']);
    console.log(dinosaura['Stegosaurus']);
    console.log(dinosaura['UpperKorsky']);
    console.log(dinosaura['Platheovaur']);
    console.log(dinosaura['Triassic']);
    //способ 2
    console.log(dinosaura.TyrannosaurusRex);
    console.log(dinosaura.UpperCretaceous);
    console.log(dinosaura.Stegosaurus);
    console.log(dinosaura.UpperKorsky);
    console.log(dinosaura.Platheovaur);
    console.log(dinosaura.Triassic);