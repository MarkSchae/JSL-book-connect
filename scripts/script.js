let count = 5;




5 * 5;
5 < 15;
false;


{
  let x = 10;
  if (x > 6) {
    // Do something
  }




  console.log(x == '10');
  console.log(x === '10');
  console.log(x !== '10');
  console.log(x > 6);
  console.log(x < 6); 
  console.log(x >= '10');
  console.log(x <= '10');





console.log(true && false);
console.log(true || false);
console.log(!true);






console.log(5 > '');
console.log(5 > 'code');
console.log(5 < 'code');
console.log('5' > '6');
console.log('5' < '6');


let y = 5;
if (y > 6) {

} else {

}

}




{

  let x = 'first';
  if (x === 'third') {
    console.log('this line ran');
  } else if (x === 'second') {
    console.log('this line ran');
  } else if (x === 'first') {
    console.log('this line ran') 
  }


}



let x = 'niether';
if (x === 'third') {
  console.log('this line ran');
} else if (x === 'second') {
  console.log('this line ran');
} else {
  console.log('this line ran'); 
}




const k = 10;
const y =7;
let first = (y < k) ? y : k; 
console.log(first)

// Switch statement
let page = 'contact';

switch (page) {
  case 'home': {
    console.log('homepage');
    break
  }
    case 'about': {
    console.log('aboutpage');
    break
  }
    case 'contact': {
    console.log('contactpage');
    break
  }
}


// Loops

for (let x = 0; x < 5; x++) {
  console.log('');
}


let q = 0;
while (q < 5) {
  console.log('while loop')
  q++;
}


let h = 10;
do {
  console.log('always runs once');  
} while (h > 20)

for (let x = 0; x < 1000; x++) {
  if (x === 5) {
    break // continue
  }
  console.log(x)
}
