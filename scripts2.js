/**
 * Verkefni 7 – Caesar dulmál


const LETTERS = `AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ`;

/**
for (var i = 0; i < LETTERS.length; i++)
{
  var code = msg.console(i);

  if (code >= 32 && code ,+)
}




n-3

/**
 *
 * Byrja forrit.

function start() {
  alert('Halló!')
}
*/

let code;
do {
  code = prompt("Hvort viltu kóða eða afkóða streng?,");
}

while (code == "kóða");
    alert("Veit ekki hvaða aðgerð er. Reyndu aftur,");

    let number
    do {
      number = Number(window.prompt("Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu, 1 - 31"));



console.log(code)


let code;


code = prompt("Hvort viltu kóða eða afkóða streng?");


let number
do {
  number = Number(window.prompt("Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu, 1 - 31"));





if (code === "kóða" || code === "afkóða") {

  let number = Number(window.prompt("Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu 1, 31"));
  console.log(number)

}

 else if (number > 31 || number < 1) {
 alert("Veit ekki hvaða aðgerð er. Reyndu aftur.");

 }



let number
do {
  number = Number(window.prompt("Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu, 1 - 31"));
}
 while(number > 31 || number < 1)
    prompt("Veit ekki hvaða aðgerð „${input}“ er. Reyndu aftur.");





// Hér er gott að commenta út til að vinna í encode/decode föllum fyrst og síðan „viðmóti“ forrits


/**
 *

 * Kóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal kóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til hægri
 * function encode(str, n) {
  return str;
}
 */


/**
 * Afkóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal afkóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @returns {string} Upprunalegi strengurinn hliðraður um n til vinstri



function decode(str, n) {
  return str;
}

console.assert(encode('A', 3) === 'D', 'kóðun á A með n=3 er D');
console.assert(decode('D', 3) === 'A', 'afkóðun á D með n=3 er A');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 32) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'kóðun með n=32 er byrjunarstrengur');
console.assert(encode('AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 3) === 'DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 'kóðun á stafrófi með n=3');
console.assert(decode('DÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖAÁB', 3) === 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ', 'afkóðun á stafrófi með n=3');
console.assert(decode(encode('HALLÓHEIMUR', 13), 13) === 'HALLÓHEIMUR', 'kóðun og afkóðun eru andhverf');
 */
let code;
do {
  code = prompt("Hvort viltu kóða eða afkóða streng?",);
}

while (code == "kóða");
    alert("Veit ekki hvaða aðgerð er. Reyndu aftur",);



let number
    do {
      number = Number(window.prompt("Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu, 1 - 31",));
    }
 while(number > 31 || number < 1)
    alert("Veit ekki hvaða aðgerð er. Reyndu aftur",);


