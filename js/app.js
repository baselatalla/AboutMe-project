/* eslint-disable no-unused-vars */
'use strict';
let UM = prompt('inter your name please: ');
alert('Wlecome  '+UM+' '+ 'to my website');
confirm(UM+' '+ 'are you ready for a quik quiz about me ?');
let f1q = prompt('Is I am 23 years old ?  yes/no : ');
if ( f1q.toLowerCase() === 'yes' || f1q.toLowerCase() === 'y'){
  alert ('CORRECT');
  console.log('CORRECT');
} else{ if (f1q.toLowerCase() === 'no' || f1q.toLowerCase() === 'n'){
  alert( 'INCORRECT');
  console.log('CORRECT');
}}
let s2q = prompt('Is I am live in Jordan ?  yes/no :');
if ( s2q.toLowerCase() === 'yes' || s2q.toLowerCase() === 'y'){
  alert ('CORRECT');
  console.log('CORRECT');
} else{ if (s2q.toLowerCase() === 'no' || s2q.toLowerCase() === 'n'){
  alert( 'INCORRECT');
  console.log('INCORRECT');
}}
let t3q = prompt('Is I am a Mechatronisce Engineer ?  yes/no :');
if ( t3q.toLowerCase() === 'yes' || t3q.toLowerCase() === 'y'){
  alert ('CORRECT');
  console.log('CORRECT');
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
}}
let f5q = prompt('Is I am a current student at ASAC ?  yes/no :');
if ( f5q.toLowerCase() === 'yes' || f5q.toLowerCase() === 'y'){
  alert ('CORRECT');
  console.log('CORRECT');
} else{ if (f5q.toLowerCase() === 'no' || f5q.toLowerCase() === 'n'){
  alert( 'INCORRECT');
  console.log('INCORRECT');
}}
alert('Thank '+UM+ ' for you time , It was pleasure ;)')