
function getPromptFromUser() {
  let code = prompt("Hvort viltu kóða eða afkóða streng?");

   if (code === "kóða"){
    numberEncode();
   }

   else if(code === "afkóða") {
    numberDecode();
   }

    else {
      alert("Veit ekki hvaða aðgerð er. Reyndu aftur");
      getPromptFromUser();
    }
  }



  function numberDecode() {
    let number = prompt("Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu 1 - 31");

    if(number > 1 && number < 31) {
      var string = prompt("Skrifaðu orð sem þú vilt hliðra")
    Encode(); // náði bara að reyna að skrifa encode function

    }
    else {

      alert("Veit ekki hvaða aðgerð er. Reyndu aftur.");
      numberDecode();
    }
  }



function numberEncode() {
  let number = prompt("Hversu mikið á að hliðra streng? Gefðu upp heiltölu á bilinu 1 - 31");

    if(number > 1 && number < 31) {
      var string = prompt("Skrifaðu orð sem þú vilt hliðra")
    Encode();

    }
    else{
      alert("Veit ekki hvaða aðgerð er. Reyndu aftur.");
      numberEncode();
    }
  }

function Encode(string, number) {
  var newstring = string
  var n = str.charCodeAt(newstring.length-number);
}

function Decode() {
  alert("Sorry náði ekki að klára");
}
