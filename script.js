// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedArr = []; // Your Result goes here
  // Only change code below this line
encodedStr.split().forEach(val=>{
	if(val===' ')decodedArr.push(' ')
	else decodedArr.push(lookup[val])
})
	console.log(decodedArr)
  return decodedArr; //return decodedArr
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log("test",rot13("SERR YBIR? NPPVBWBO"));
console.log("Hello")
// Do not change this line
window.rot13 = rot13;
