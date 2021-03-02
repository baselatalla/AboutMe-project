'use strict';
let counterx = 0;
let UM = prompt('inter your name please: ');
alert('Wlecome  '+UM+' '+ 'to my website');
confirm(UM+' '+ 'are you ready for a quik quiz about me ?');
let f1q = prompt('Is I am 23 years old ?  yes/no : ');
if ( f1q.toLowerCase() === 'yes' || f1q.toLowerCase() === 'y'){
  alert ('CORRECT');
  console.log('CORRECT');
  counterx++;
} else{ if (f1q.toLowerCase() === 'no' || f1q.toLowerCase() === 'n'){
  alert( 'INCORRECT');
  console.log('INCORRECT');
}}
let s2q = prompt('Is I am live in Jordan ?  yes/no :');
if ( s2q.toLowerCase() === 'yes' || s2q.toLowerCase() === 'y'){
  alert ('CORRECT');
  console.log('CORRECT');
  // eslint-disable-next-line no-unused-vars
  counterx++;
} else{ if (s2q.toLowerCase() === 'no' || s2q.toLowerCase() === 'n'){
  alert( 'INCORRECT');
  console.log('INCORRECT');
}}
let t3q = prompt('Is I am a Mechatronisce Engineer ?  yes/no :');
if ( t3q.toLowerCase() === 'yes' || t3q.toLowerCase() === 'y'){
  alert ('CORRECT');
  console.log('CORRECT');
  counterx++;
} else{ if (t3q.toLowerCase() === 'no' || t3q.toLowerCase() === 'n'){
  alert( 'INCORRECT');
  console.log('INCORRECT');
}}
let f4q = prompt('Is I am from Japan ?  yes/no : ');
if ( f4q.toLowerCase() === 'yes' || f4q.toLowerCase() === 'y'){
  alert ('INCORRECT');
  console.log('INCORRECT');
} else{ if (f4q.toLowerCase() === 'no' || f4q.toLowerCase() === 'n'){
  alert( 'CORRECT');
  console.log('CORRECT');
  counterx++;
}}
let f5q = prompt('Is I am a current student at ASAC ?  yes/no :');
if ( f5q.toLowerCase() === 'yes' || f5q.toLowerCase() === 'y'){
  alert ('CORRECT');
  console.log('CORRECT');
  counterx++;
} else{ if (f5q.toLowerCase() === 'no' || f5q.toLowerCase() === 'n'){
  alert( 'INCORRECT');
  console.log('INCORRECT');
}}

let count1 = 4;
let medals;
let m;
while (count1 !== 0 ){
  medals = prompt(' I have a lot of medals in many sports. Guess how many medals I have ? ');
  count1-=1;
  m = parseInt(medals);
  if ( m === 12 ){alert('you nailed it, It is correct '); count1 =0; counterx++; console.log('CORRECT');}else {
    if ( m < 5 ){ alert('its too low');} else{ if ( m < 12){ alert('little bit higher !');} else{ if ( m >12 && m <15 ){ alert('litle bit lower');} else {if ( m > 15){ alert('it is too high');}}}}}
  if ( count1 === 0 && m !== 12){alert(' sorry its incorrect, the right is 12 '); console.log('INCORRECT');}}
let myfreind = ['ahmad','obada','hosam','ramy','yousf',];
let z = 6;
let dd = 0;
while(z !== 0){
  let fname = prompt('Guess a name of one of my freinds ?');
  let smallname = fname.toLowerCase();
  z--;
  for (let i =0; i<=4 ;i++){
    if ( myfreind[i] === smallname){
      alert('Its CORRECT');
      console.log('CORRECT');
      counterx++;
      dd= 1;
    }
  }
  if( dd !==1 ){ alert('INCORRECT, try agin'); console.log('INCORRECT');}else{ z = 0; }
  if (z === 0 && dd !== 1){ alert('sorry its incorrect. Here is my freinds names : '+ myfreind);}
}

alert( 'Your score is :' +counterx+'/7');
alert('Thank '+UM+ ' for you time , It was pleasure ;)');
console.log(counterx);




