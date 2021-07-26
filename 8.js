// Advantages of Javascript.
let text1 = `program generally is a computer program that outputs or displays the message "Hello, World!". Such a program is very simple in most programming languages, and is o`;

let text2 =
  "as asf asdf adfasf asdfas fadsfa " +
  "adsfadf afasd fads fasdfa dsfads fdsaf" +
  "asdfadsf asfdas dfadfasd fasdfsd";

// Multi line String
let text3 = `adsfafadsf df asdf adsfadsfsd fads
            asdfadfasdfadsfdsafadsfdsaf dfdf asdf adsfasdfa s
            asdfadsfa dsfds fasdf asdfasd fasdfsa fd `;

// concatnation
let name = "cdac";
let city = "mumbai";
let unit = "d";

// I love cdac and mumbai  everything.

let output = "I love " + name + " and" + city + " and everything.";
console.log(output);

let output1 = `I love ${name} and ${city} everything.`;
console.log(output1);

// http://localhost:8080/api/weather?city=mumbai&unit=celicus
// http://localhost:8080/api/weather?city=delhi&unit=celicus
let finalUrl =
  "http://localhost:8080/api/weather?city=" + city + "&unit=" + unit;

// ${} :: Variable Placeholder
let finalUrl1 = `http://localhost:8080/api/weather?city=${city}&unit=${unit}`;
