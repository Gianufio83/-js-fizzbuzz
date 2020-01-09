// alert('Ciao');
// Scrivi un programma che stampi i numeri da 1
// a 100,
// ma per i multipli di 3 stampi “Fizz” al
// posto del numero e per i multipli di 5 stampi
// Buzz.
// Per i numeri che sono sia multipli di 3
// che di 5 stampi FizzBuzz.
// Stampiamo come sempre prima in console e poi su html

for (var i = 0; i <= 100; i++) {
  console.log(i);
  var contenuto = document.getElementById('numeri').innerHTML;
  document.getElementById('numeri').innerHTML = contenuto + '<li>' + [i] + '</li>';

if(i % 3 == 0 && i % 5 == 0){
console.log("fizzBuzz");
var contenuto = document.getElementById('numeri').innerHTML;
document.getElementById('numeri').innerHTML = contenuto + '<li>' + 'fizzBuzz' + '</li>';
} else if(i % 3 == 0){
console.log("fizz");
var contenuto = document.getElementById('numeri').innerHTML;
document.getElementById('numeri').innerHTML = contenuto + '<li>' + 'fizz' + '</li>';
} else if(i % 5 == 0){
console.log("buzz");
var contenuto = document.getElementById('numeri').innerHTML;
document.getElementById('numeri').innerHTML = contenuto + '<li>' + 'buzz' + '</li>';
}else{
console.log(i);
var contenuto = document.getElementById('numeri').innerHTML;
document.getElementById('numeri').innerHTML = contenuto + '<li>' + [i] + '</li>';
};
};


// var numero = i;
// var muliplo3 = (i % 3);
// if (multiplo3 == 0) {
//   console.log('Frizz');
// }
// else {
//   console.log(i);
// }







// var multiplo5 = (numero / 5);
