'use strict';
let counterx = 0;
let UM = prompt('inter your name please: ');
alert('Wlecome  '+UM+' '+ 'to my website');
confirm(UM+' '+ 'are you ready for a quik quiz about me ?');
let ccc;
function firstQ ( ccc){
  if ( ccc.toLowerCase() === 'yes' || ccc.toLowerCase() === 'y'){
    alert ('CORRECT');
    //console.log('CORRECT');
    counterx++;}else{
    if (ccc.toLowerCase() === 'no' || ccc.toLowerCase() === 'n'){
      alert( 'INCORRECT');
      //console.log('INCORRECT');
      return counterx;}}}

function niv ( ccc){
  if ( ccc.toLowerCase() === 'yes' || ccc.toLowerCase() === 'y'){
    alert ('INCORRECT');
    //console.log('INCORRECT');
  } else{
    if (ccc.toLowerCase() === 'no' || ccc.toLowerCase() === 'n'){
      alert( 'CORRECT');
      //console.log('CORRECT');
      counterx++;

      return counterx; }}}

let f1q = prompt('Is I am 23 years old ?  yes/no : ');
ccc = f1q;
firstQ(ccc);//---------------------fun


let s2q = prompt('Is I am live in Jordan ?  yes/no :');
ccc = s2q;
firstQ(ccc);

let t3q = prompt('Is I am a Mechatronisce Engineer ?  yes/no :');
ccc = t3q;
firstQ(ccc);


let f4q = prompt('Is I am from Japan ?  yes/no : ');
ccc = f4q;
niv(ccc);



let f5q = prompt('Is I am a current student at ASAC ?  yes/no :');

ccc = f5q;
firstQ(ccc);


let medals;
let m;

function number (){
  let count1 = 4;
  while (count1 !== 0 ){
    medals = prompt(' I have a lot of medals in many sports. Guess how many medals I have ? ');
    count1-=1;
    m = parseInt(medals);
    if ( m === 12 ){alert('you nailed it, It is correct '); count1 =0; counterx++; //console.log('CORRECT');
    }else {
      if ( m < 5 ){ alert('its too low');} else{ if ( m < 12){ alert('its too low!');} else{ if ( m >12 && m <15 ){ alert('it is too high');} else {if ( m > 15){ alert('it is too high');}}}}}
    if ( count1 === 0 && m !== 12){alert(' sorry its incorrect, the right is 12 '); //console.log('INCORRECT');
    }}
}
number();


function name1(){
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
        //console.log('CORRECT');
        counterx++;
        dd= 1;
      }
    }
    if( dd !==1 ){ alert('INCORRECT, try agin'); //console.log('INCORRECT');
    }else{ z = 0; }
    if (z === 0 && dd !== 1){ alert('sorry its incorrect. Here is my freinds names : '+ myfreind);}
  }
  return counterx;
}
name1 ();
alert( 'Your score is :' +counterx+'/7');
alert('Thank '+UM+ ' for you time , It was pleasure ;)');
//console.log(counterx);




